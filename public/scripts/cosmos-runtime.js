// === SCRIPT 1 ===
//lenis
        function t(t, e, i) {
            return Math.max(t, Math.min(e, i))
        }
        var e = class {
            isRunning = !1;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(e) {
                if (!this.isRunning) return;
                let i = !1;
                if (this.duration && this.easing) {
                    this.currentTime += e;
                    const s = t(0, this.currentTime / this.duration, 1);
                    i = s >= 1;
                    const o = i ? 1 : this.easing(s);
                    this.value = this.from + (this.to - this.from) * o
                } else this.lerp ? (this.value = function (t, e, i, s) {
                    return function (t, e, i) {
                        return (1 - i) * t + i * e
                    }(t, e, 1 - Math.exp(-i * s))
                }(this.value, this.to, 60 * this.lerp, e), Math.round(this.value) === this.to && (this.value = this.to, i = !0)) : (this.value = this.to, i = !0);
                i && this.stop(), this.onUpdate ?.(this.value, i)
                }
            stop() {
                this.isRunning = !1
            }
            fromTo(t, e, {
                lerp: i,
                duration: s,
                easing: o,
                onStart: n,
                onUpdate: r
            }) {
                this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n ?.(), this.onUpdate = r
            }
        };
        var i = class {
            constructor(t, e, {
                autoResize: i = !0,
                debounce: s = 250
            } = {}) {
                this.wrapper = t, this.content = e, i && (this.debouncedResize = function (t, e) {
                    let i;
                    return function (...s) {
                        let o = this;
                        clearTimeout(i), i = setTimeout((() => {
                            i = void 0, t.apply(o, s)
                        }), e)
                    }
                }(this.resize, s), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            destroy() {
                this.wrapperResizeObserver ?.disconnect(), this.contentResizeObserver ?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        },
            s = class {
                events = {};
                emit(t, ...e) {
                    let i = this.events[t] || [];
                    for (let t = 0, s = i.length; t < s; t++) i[t] ?.(...e)
                    }
                on(t, e) {
                    return this.events[t] ?.push(e) || (this.events[t] = [e]), () => {
                        this.events[t] = this.events[t] ?.filter((t => e !== t))
                        }
                }
                off(t, e) {
                    this.events[t] = this.events[t] ?.filter((t => e !== t))
                    }
                destroy() {
                    this.events = {}
                }
            },
            o = 100 / 6,
            n = {
                passive: !1
            },
            r = class {
                constructor(t, e = {
                    wheelMultiplier: 1,
                    touchMultiplier: 1
                }) {
                    this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, n), this.element.addEventListener("touchstart", this.onTouchStart, n), this.element.addEventListener("touchmove", this.onTouchMove, n), this.element.addEventListener("touchend", this.onTouchEnd, n)
                }
                touchStart = {
                    x: 0,
                    y: 0
                };
                lastDelta = {
                    x: 0,
                    y: 0
                };
                window = {
                    width: 0,
                    height: 0
                };
                emitter = new s;
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                destroy() {
                    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, n), this.element.removeEventListener("touchstart", this.onTouchStart, n), this.element.removeEventListener("touchmove", this.onTouchMove, n), this.element.removeEventListener("touchend", this.onTouchEnd, n)
                }
                onTouchStart = t => {
                    const {
                        clientX: e,
                        clientY: i
                    } = t.targetTouches ? t.targetTouches[0] : t;
                    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                        x: 0,
                        y: 0
                    }, this.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: t
                    })
                };
                onTouchMove = t => {
                    const {
                        clientX: e,
                        clientY: i
                    } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.options.touchMultiplier, o = -(i - this.touchStart.y) * this.options.touchMultiplier;
                    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                        x: s,
                        y: o
                    }, this.emitter.emit("scroll", {
                        deltaX: s,
                        deltaY: o,
                        event: t
                    })
                };
                onTouchEnd = t => {
                    this.emitter.emit("scroll", {
                        deltaX: this.lastDelta.x,
                        deltaY: this.lastDelta.y,
                        event: t
                    })
                };
                onWheel = t => {
                    let {
                        deltaX: e,
                        deltaY: i,
                        deltaMode: s
                    } = t;
                    e *= 1 === s ? o : 2 === s ? this.window.width : 1, i *= 1 === s ? o : 2 === s ? this.window.height : 1, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                        deltaX: e,
                        deltaY: i,
                        event: t
                    })
                };
                onWindowResize = () => {
                    this.window = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
            },
            l = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            Lenis = class {
                _isScrolling = !1;
                _isStopped = !1;
                _isLocked = !1;
                _preventNextNativeScrollEvent = !1;
                _resetVelocityTimeout = null;
                __rafID = null;
                isTouching;
                time = 0;
                userData = {};
                lastVelocity = 0;
                velocity = 0;
                direction = 0;
                options;
                targetScroll;
                animatedScroll;
                animate = new e;
                emitter = new s;
                dimensions;
                virtualScroll;
                constructor({
                    wrapper: t = window,
                    content: e = document.documentElement,
                    eventsTarget: s = t,
                    smoothWheel: o = !0,
                    syncTouch: n = !1,
                    syncTouchLerp: h = .075,
                    touchInertiaMultiplier: a = 35,
                    duration: c,
                    easing: p,
                    lerp: d = .1,
                    infinite: u = !1,
                    orientation: m = "vertical",
                    gestureOrientation: v = "vertical",
                    touchMultiplier: g = 1,
                    wheelMultiplier: w = 1,
                    autoResize: S = !0,
                    prevent: f,
                    virtualScroll: y,
                    overscroll: E = !0,
                    autoRaf: T = !1,
                    anchors: z = !1,
                    autoToggle: b = !1,
                    allowNestedScroll: _ = !1,
                    __experimental__naiveDimensions: L = !1
                } = {}) {
                    window.lenisVersion = "1.3.4", t && t !== document.documentElement || (t = window), "number" == typeof c && "function" != typeof p ? p = l : "function" == typeof p && "number" != typeof c && (c = 1), this.options = {
                        wrapper: t,
                        content: e,
                        eventsTarget: s,
                        smoothWheel: o,
                        syncTouch: n,
                        syncTouchLerp: h,
                        touchInertiaMultiplier: a,
                        duration: c,
                        easing: p,
                        lerp: d,
                        infinite: u,
                        gestureOrientation: v,
                        orientation: m,
                        touchMultiplier: g,
                        wheelMultiplier: w,
                        autoResize: S,
                        prevent: f,
                        virtualScroll: y,
                        overscroll: E,
                        autoRaf: T,
                        anchors: z,
                        autoToggle: b,
                        allowNestedScroll: _,
                        __experimental__naiveDimensions: L
                    }, this.dimensions = new i(t, e, {
                        autoResize: S
                    }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                        capture: !0
                    }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new r(s, {
                        touchMultiplier: g,
                        wheelMultiplier: w
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                        passive: !0
                    }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                }
                destroy() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                        capture: !0
                    }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                off(t, e) {
                    return this.emitter.off(t, e)
                }
                onScrollEnd = t => {
                    t instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || t.stopPropagation()
                };
                dispatchScrollendEvent = () => {
                    this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                        bubbles: this.options.wrapper === window,
                        detail: {
                            lenisScrollEnd: !0
                        }
                    }))
                };
                onTransitionEnd = t => {
                    if (t.propertyName.includes("overflow")) {
                        const t = this.isHorizontal ? "overflow-x" : "overflow-y",
                            e = getComputedStyle(this.rootElement)[t];
                        ["hidden", "clip"].includes(e) ? this.stop() : this.start()
                    }
                };
                setScroll(t) {
                    this.isHorizontal ? this.options.wrapper.scrollTo({
                        left: t,
                        behavior: "instant"
                    }) : this.options.wrapper.scrollTo({
                        top: t,
                        behavior: "instant"
                    })
                }
                onClick = t => {
                    const e = t.composedPath().find((t => t instanceof HTMLAnchorElement && (t.getAttribute("href") ?.startsWith("#") || t.getAttribute("href") ?.startsWith("/#") || t.getAttribute("href") ?.startsWith("./#"))));
                    if (e) {
                        const t = e.getAttribute("href");
                        if (t) {
                            const e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0;
                            let i = `#${t.split("#")[1]}`;
                            ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(t) && (i = 0), this.scrollTo(i, e)
                        }
                    }
                };
                onPointerDown = t => {
                    1 === t.button && this.reset()
                };
                onVirtualScroll = t => {
                    if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
                    const {
                        deltaX: e,
                        deltaY: i,
                        event: s
                    } = t;
                    if (this.emitter.emit("virtual-scroll", {
                        deltaX: e,
                        deltaY: i,
                        event: s
                    }), s.ctrlKey) return;
                    if (s.lenisStopPropagation) return;
                    const o = s.type.includes("touch"),
                        n = s.type.includes("wheel");
                    this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
                    const r = 0 === e && 0 === i;
                    if (this.options.syncTouch && o && "touchstart" === s.type && r && !this.isStopped && !this.isLocked) return void this.reset();
                    const l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
                    if (r || l) return;
                    let h = s.composedPath();
                    h = h.slice(0, h.indexOf(this.rootElement));
                    const a = this.options.prevent;
                    if (h.find((t => t instanceof HTMLElement && ("function" == typeof a && a ?.(t) || t.hasAttribute ?.("data-lenis-prevent") || o && t.hasAttribute ?.("data-lenis-prevent-touch") || n && t.hasAttribute ?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(t, {
                        deltaX: e,
                        deltaY: i
                    }))))) return;
                    if (this.isStopped || this.isLocked) return void s.preventDefault();
                    if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", this.animate.stop(), void (s.lenisStopPropagation = !0);
                    let c = i;
                    "both" === this.options.gestureOrientation ? c = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (c = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = !0), s.preventDefault();
                    const p = o && this.options.syncTouch,
                        d = o && "touchend" === s.type && Math.abs(c) > 5;
                    d && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, {
                        programmatic: !1,
                        ...p ? {
                            lerp: d ? this.options.syncTouchLerp : 1
                        } : {
                            lerp: this.options.lerp,
                            duration: this.options.duration,
                            easing: this.options.easing
                        }
                    })
                };
                resize() {
                    this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
                }
                emit() {
                    this.emitter.emit("scroll", this)
                }
                onNativeScroll = () => {
                    if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) this._preventNextNativeScrollEvent = !1;
                    else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                        const t = this.animatedScroll;
                        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout((() => {
                            this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                        }), 400))
                    }
                };
                reset() {
                    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
                }
                start() {
                    this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
                }
                stop() {
                    this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
                }
                raf = t => {
                    const e = t - (this.time || t);
                    this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                };
                scrollTo(e, {
                    offset: i = 0,
                    immediate: s = !1,
                    lock: o = !1,
                    duration: n = this.options.duration,
                    easing: r = this.options.easing,
                    lerp: h = this.options.lerp,
                    onStart: a,
                    onComplete: c,
                    force: p = !1,
                    programmatic: d = !0,
                    userData: u
                } = {}) {
                    if (!this.isStopped && !this.isLocked || p) {
                        if ("string" == typeof e && ["top", "left", "start"].includes(e)) e = 0;
                        else if ("string" == typeof e && ["bottom", "right", "end"].includes(e)) e = this.limit;
                        else {
                            let t;
                            if ("string" == typeof e ? t = document.querySelector(e) : e instanceof HTMLElement && e ?.nodeType && (t = e), t) {
                                if (this.options.wrapper !== window) {
                                    const t = this.rootElement.getBoundingClientRect();
                                    i -= this.isHorizontal ? t.left : t.top
                                }
                                const s = t.getBoundingClientRect();
                                e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof e) {
                            if (e += i, e = Math.round(e), this.options.infinite) {
                                if (d) {
                                    this.targetScroll = this.animatedScroll = this.scroll;
                                    const t = e - this.animatedScroll;
                                    t > this.limit / 2 ? e -= this.limit : t < -this.limit / 2 && (e += this.limit)
                                }
                            } else e = t(0, e, this.limit);
                            if (e === this.targetScroll) return a ?.(this), void c ?.(this);
                            if (this.userData = u ?? {}, s) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c ?.(this), this.userData = {}, void requestAnimationFrame((() => {
                                this.dispatchScrollendEvent()
                            }));
                            d || (this.targetScroll = e), "number" == typeof n && "function" != typeof r ? r = l : "function" == typeof r && "number" != typeof n && (n = 1), this.animate.fromTo(this.animatedScroll, e, {
                                duration: n,
                                easing: r,
                                lerp: h,
                                onStart: () => {
                                    o && (this.isLocked = !0), this.isScrolling = "smooth", a ?.(this)
                                    },
                                onUpdate: (t, e) => {
                                    this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), d && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), c ?.(this), this.userData = {}, requestAnimationFrame((() => {
                                        this.dispatchScrollendEvent()
                                    })), this.preventNextNativeScrollEvent())
                                }
                            })
                        }
                    }
                }
                preventNextNativeScrollEvent() {
                    this._preventNextNativeScrollEvent = !0, requestAnimationFrame((() => {
                        this._preventNextNativeScrollEvent = !1
                    }))
                }
                checkNestedScroll(t, {
                    deltaX: e,
                    deltaY: i
                }) {
                    const s = Date.now(),
                        o = t._lenis ??= {};
                    let n, r, l, h, a, c, p, d;
                    const u = this.options.gestureOrientation;
                    if (s - (o.time ?? 0) > 2e3) {
                        o.time = Date.now();
                        const e = window.getComputedStyle(t);
                        o.computedStyle = e;
                        const i = e.overflowX,
                            s = e.overflowY;
                        if (n = ["auto", "overlay", "scroll"].includes(i), r = ["auto", "overlay", "scroll"].includes(s), o.hasOverflowX = n, o.hasOverflowY = r, !n && !r) return !1;
                        if ("vertical" === u && !r) return !1;
                        if ("horizontal" === u && !n) return !1;
                        a = t.scrollWidth, c = t.scrollHeight, p = t.clientWidth, d = t.clientHeight, l = a > p, h = c > d, o.isScrollableX = l, o.isScrollableY = h, o.scrollWidth = a, o.scrollHeight = c, o.clientWidth = p, o.clientHeight = d
                    } else l = o.isScrollableX, h = o.isScrollableY, n = o.hasOverflowX, r = o.hasOverflowY, a = o.scrollWidth, c = o.scrollHeight, p = o.clientWidth, d = o.clientHeight;
                    if (!n && !r || !l && !h) return !1;
                    if (!("vertical" !== u || r && h)) return !1;
                    if (!("horizontal" !== u || n && l)) return !1;
                    let m, v, g, w, S, f;
                    if ("horizontal" === u) m = "x";
                    else if ("vertical" === u) m = "y";
                    else {
                        0 !== e && n && l && (m = "x"), 0 !== i && r && h && (m = "y")
                    }
                    if (!m) return !1;
                    if ("x" === m) v = t.scrollLeft, g = a - p, w = e, S = n, f = l;
                    else {
                        if ("y" !== m) return !1;
                        v = t.scrollTop, g = c - d, w = i, S = r, f = h
                    }
                    return (w > 0 ? v < g : v > 0) && S && f
                }
                get rootElement() {
                    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                }
                get limit() {
                    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation
                }
                get actualScroll() {
                    const t = this.options.wrapper;
                    return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop
                    }
                get scroll() {
                    return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
                    var t, e
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
                get isScrolling() {
                    return this._isScrolling
                }
                set isScrolling(t) {
                    this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
                }
                get isStopped() {
                    return this._isStopped
                }
                set isStopped(t) {
                    this._isStopped !== t && (this._isStopped = t, this.updateClassName())
                }
                get isLocked() {
                    return this._isLocked
                }
                set isLocked(t) {
                    this._isLocked !== t && (this._isLocked = t, this.updateClassName())
                }
                get isSmooth() {
                    return "smooth" === this.isScrolling
                }
                get className() {
                    let t = "lenis";
                    return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
                }
                updateClassName() {
                    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
                }
                cleanUpClassName() {
                    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
                }
            };
        globalThis.Lenis = Lenis, globalThis.Lenis.prototype = Lenis.prototype; //# sourceMappingURL=lenis.min.js.map

// === SCRIPT 2 ===
//keen
        /**
         * Skipped minification because the original files appears to be already minified.
         * Original file: /npm/keen-slider@6.8.5/keen-slider.js
         *
         * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
         */
        ! function (n, t) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).KeenSlider = t()
        }(this, (function () {
            "use strict";
            var n = function () {
                return n = Object.assign || function (n) {
                    for (var t, i = 1, e = arguments.length; i < e; i++)
                        for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n
                }, n.apply(this, arguments)
            };

            function t(n, t, i) {
                if (i || 2 === arguments.length)
                    for (var e, r = 0, a = t.length; r < a; r++) !e && r in t || (e || (e = Array.prototype.slice.call(t, 0, r)), e[r] = t[r]);
                return n.concat(e || Array.prototype.slice.call(t))
            }

            function i(n) {
                return Array.prototype.slice.call(n)
            }

            function e(n, t) {
                var i = Math.floor(n);
                return i === t || i + 1 === t ? n : t
            }

            function r() {
                return Date.now()
            }

            function a(n, t, i) {
                if (t = "data-keen-slider-" + t, null === i) return n.removeAttribute(t);
                n.setAttribute(t, i || "")
            }

            function o(n, t) {
                return t = t || document, "function" == typeof n && (n = n(t)), Array.isArray(n) ? n : "string" == typeof n ? i(t.querySelectorAll(n)) : n instanceof HTMLElement ? [n] : n instanceof NodeList ? i(n) : []
            }

            function u(n) {
                n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault()
            }

            function s(n) {
                n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation()
            }

            function c() {
                var n = [];
                return {
                    add: function (t, i, e, r) {
                        t.addListener ? t.addListener(e) : t.addEventListener(i, e, r), n.push([t, i, e, r])
                    },
                    input: function (n, t, i, e) {
                        this.add(n, t, function (n) {
                            return function (t) {
                                t.nativeEvent && (t = t.nativeEvent);
                                var i = t.changedTouches || [],
                                    e = t.targetTouches || [],
                                    r = t.detail && t.detail.x ? t.detail : null;
                                return n({
                                    id: r ? r.identifier ? r.identifier : "i" : e[0] ? e[0] ? e[0].identifier : "e" : "d",
                                    idChanged: r ? r.identifier ? r.identifier : "i" : i[0] ? i[0] ? i[0].identifier : "e" : "d",
                                    raw: t,
                                    x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
                                    y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
                                })
                            }
                        }(i), e)
                    },
                    purge: function () {
                        n.forEach((function (n) {
                            n[0].removeListener ? n[0].removeListener(n[2]) : n[0].removeEventListener(n[1], n[2], n[3])
                        })), n = []
                    }
                }
            }

            function d(n, t, i) {
                return Math.min(Math.max(n, t), i)
            }

            function l(n) {
                return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n
            }

            function f(n) {
                var t = n.getBoundingClientRect();
                return {
                    height: e(t.height, n.offsetHeight),
                    width: e(t.width, n.offsetWidth)
                }
            }

            function p(n, t, i, e) {
                var r = n && n[t];
                return null == r ? i : e && "function" == typeof r ? r() : r
            }

            function v(n) {
                return Math.round(1e6 * n) / 1e6
            }

            function h(n) {
                var t, i, e, r, a, o;

                function u(t) {
                    o || (o = t), s(!0);
                    var a = t - o;
                    a > e && (a = e);
                    var l = r[i];
                    if (l[3] < a) return i++, u(t);
                    var f = l[2],
                        p = l[4],
                        v = l[0],
                        h = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
                    if (h && n.track.to(v + h), a < e) return d();
                    o = null, s(!1), c(null), n.emit("animationEnded")
                }

                function s(n) {
                    t.active = n
                }

                function c(n) {
                    t.targetIdx = n
                }

                function d() {
                    var n;
                    n = u, a = window.requestAnimationFrame(n)
                }

                function l() {
                    var t;
                    t = a, window.cancelAnimationFrame(t), s(!1), c(null), o && n.emit("animationStopped"), o = null
                }
                return t = {
                    active: !1,
                    start: function (t) {
                        if (l(), n.track.details) {
                            var a = 0,
                                o = n.track.details.position;
                            i = 0, e = 0, r = t.map((function (n) {
                                var t, i = Number(o),
                                    r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration,
                                    u = n.easing,
                                    s = n.distance * u(r / n.duration) || 0;
                                o += s;
                                var c = e;
                                return e += r, a += s, [i, n.distance, c, e, n.duration, u]
                            })), c(n.track.distToIdx(a)), d(), n.emit("animationStarted")
                        }
                    },
                    stop: l,
                    targetIdx: null
                }
            }

            function m(n) {
                var i, e, a, o, u, s, c, f, h, m, g, b, x, y, k = 1 / 0,
                    w = [],
                    M = null,
                    T = 0;

                function C(n) {
                    _(T + n)
                }

                function E(n) {
                    var t = z(T + n).abs;
                    return D(t) ? t : null
                }

                function z(n) {
                    var i = Math.floor(Math.abs(v(n / e))),
                        r = v((n % e + e) % e);
                    r === e && (r = 0);
                    var a = l(n),
                        o = c.indexOf(t([], c, !0).reduce((function (n, t) {
                            return Math.abs(t - r) < Math.abs(n - r) ? t : n
                        }))),
                        u = o;
                    return a < 0 && i++, o === s && (u = 0, i += a > 0 ? 1 : -1), {
                        abs: u + i * s * a,
                        origin: o,
                        rel: u
                    }
                }

                function I(n, t, i) {
                    var e;
                    if (t || !S()) return A(n, i);
                    if (!D(n)) return null;
                    var r = z(null != i ? i : T),
                        a = r.abs,
                        o = n - r.rel,
                        u = a + o;
                    e = A(u);
                    var c = A(u - s * l(o));
                    return (null !== c && Math.abs(c) < Math.abs(e) || null === e) && (e = c), v(e)
                }

                function A(n, t) {
                    if (null == t && (t = v(T)), !D(n) || null === n) return null;
                    n = Math.round(n);
                    var i = z(t),
                        r = i.abs,
                        a = i.rel,
                        o = i.origin,
                        u = O(n),
                        d = (t % e + e) % e,
                        l = c[o],
                        f = Math.floor((n - (r - a)) / s) * e;
                    return v(l - d - l + c[u] + f + (o === s ? e : 0))
                }

                function D(n) {
                    return L(n) === n
                }

                function L(n) {
                    return d(n, h, m)
                }

                function S() {
                    return o.loop
                }

                function O(n) {
                    return (n % s + s) % s
                }

                function _(t) {
                    var i;
                    i = t - T, w.push({
                        distance: i,
                        timestamp: r()
                    }), w.length > 6 && (w = w.slice(-6)), T = v(t);
                    var e = H().abs;
                    if (e !== M) {
                        var a = null !== M;
                        M = e, a && n.emit("slideChanged")
                    }
                }

                function H(t) {
                    var r = t ? null : function () {
                        if (s) {
                            var n = S(),
                                t = n ? (T % e + e) % e : T,
                                i = (n ? T % e : T) - u[0][2],
                                r = 0 - (i < 0 && n ? e - Math.abs(i) : i),
                                c = 0,
                                d = z(T),
                                f = d.abs,
                                p = d.rel,
                                v = u[p][2],
                                k = u.map((function (t, i) {
                                    var a = r + c;
                                    (a < 0 - t[0] || a > 1) && (a += (Math.abs(a) > e - 1 && n ? e : 0) * l(-a));
                                    var u = i - p,
                                        d = l(u),
                                        h = u + f;
                                    n && (-1 === d && a > v && (h += s), 1 === d && a < v && (h -= s), null !== g && h < g && (a += e), null !== b && h > b && (a -= e));
                                    var m = a + t[0] + t[1],
                                        x = Math.max(a >= 0 && m <= 1 ? 1 : m < 0 || a > 1 ? 0 : a < 0 ? Math.min(1, (t[0] + a) / t[0]) : (1 - a) / t[0], 0);
                                    return c += t[0] + t[1], {
                                        abs: h,
                                        distance: o.rtl ? -1 * a + 1 - t[0] : a,
                                        portion: x,
                                        size: t[0]
                                    }
                                }));
                            return f = L(f), p = O(f), {
                                abs: L(f),
                                length: a,
                                max: y,
                                maxIdx: m,
                                min: x,
                                minIdx: h,
                                position: T,
                                progress: n ? t / e : T / a,
                                rel: p,
                                slides: k,
                                slidesLength: e
                            }
                        }
                    }();
                    return i.details = r, n.emit("detailsChanged"), r
                }
                return i = {
                    absToRel: O,
                    add: C,
                    details: null,
                    distToIdx: E,
                    idxToDist: I,
                    init: function (t) {
                        if (function () {
                            if (o = n.options, u = (o.trackConfig || []).map((function (n) {
                                return [p(n, "size", 1), p(n, "spacing", 0), p(n, "origin", 0)]
                            })), s = u.length) {
                                e = v(u.reduce((function (n, t) {
                                    return n + t[0] + t[1]
                                }), 0));
                                var t, i = s - 1;
                                a = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1]), c = u.reduce((function (n, i) {
                                    if (!n) return [0];
                                    var e = u[n.length - 1],
                                        r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                                    return r -= i[2], n[n.length - 1] > r && (r = n[n.length - 1]), r = v(r), n.push(r), (!t || t < r) && (f = n.length - 1), t = r, n
                                }), null), 0 === a && (f = 0), c.push(v(e))
                            }
                        }(), !s) return H(!0);
                        var i;
                        ! function () {
                            var t = n.options.range,
                                i = n.options.loop;
                            g = h = i ? p(i, "min", -1 / 0) : 0, b = m = i ? p(i, "max", k) : f;
                            var e = p(t, "min", null),
                                r = p(t, "max", null);
                            e && (h = e), r && (m = r), x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0), y = m === k ? m : I(m, !0, 0), null === r && (b = m), p(t, "align", !1) && m !== k && 0 === u[O(m)][2] && (y -= 1 - u[O(m)][0], m = E(y - T)), x = v(x), y = v(y)
                        }(), i = t, Number(i) === i ? C(A(L(t))) : H()
                    },
                    to: _,
                    velocity: function () {
                        var n = r(),
                            t = w.reduce((function (t, i) {
                                var e = i.distance,
                                    r = i.timestamp;
                                return n - r > 200 || (l(e) !== l(t.distance) && t.distance && (t = {
                                    distance: 0,
                                    lastTimestamp: 0,
                                    time: 0
                                }), t.time && (t.distance += e), t.lastTimestamp && (t.time += r - t.lastTimestamp), t.lastTimestamp = r), t
                            }), {
                                distance: 0,
                                lastTimestamp: 0,
                                time: 0
                            });
                        return t.distance / t.time || 0
                    }
                }
            }

            function g(n) {
                var t, i, e, r, a, o, u, s;

                function c(n) {
                    return 2 * n
                }

                function f(n) {
                    return d(n, u, s)
                }

                function p(n) {
                    return 1 - Math.pow(1 - n, 3)
                }

                function v() {
                    return e ? n.track.velocity() : 0
                }

                function h() {
                    b();
                    var t = "free-snap" === n.options.mode,
                        i = n.track,
                        e = v();
                    r = l(e);
                    var u = n.track.details,
                        s = [];
                    if (e || !t) {
                        var d = m(e),
                            h = d.dist,
                            g = d.dur;
                        if (g = c(g), h *= r, t) {
                            var x = i.idxToDist(i.distToIdx(h), !0);
                            x && (h = x)
                        }
                        s.push({
                            distance: h,
                            duration: g,
                            easing: p
                        });
                        var y = u.position,
                            k = y + h;
                        if (k < a || k > o) {
                            var w = k < a ? a - y : o - y,
                                M = 0,
                                T = e;
                            if (l(w) === r) {
                                var C = Math.min(Math.abs(w) / Math.abs(h), 1),
                                    E = function (n) {
                                        return 1 - Math.pow(1 - n, 1 / 3)
                                    }(C) * g;
                                s[0].earlyExit = E, T = e * (1 - C)
                            } else s[0].earlyExit = 0, M += w;
                            var z = m(T, 100),
                                I = z.dist * r;
                            n.options.rubberband && (s.push({
                                distance: I,
                                duration: c(z.dur),
                                easing: p
                            }), s.push({
                                distance: -I + M,
                                duration: 500,
                                easing: p
                            }))
                        }
                        n.animator.start(s)
                    } else n.moveToIdx(f(u.abs), !0, {
                        duration: 500,
                        easing: function (n) {
                            return 1 + --n * n * n * n * n
                        }
                    })
                }

                function m(n, t) {
                    void 0 === t && (t = 1e3);
                    var i = 147e-9 + (n = Math.abs(n)) / t;
                    return {
                        dist: Math.pow(n, 2) / i,
                        dur: n / i
                    }
                }

                function g() {
                    var t = n.track.details;
                    t && (a = t.min, o = t.max, u = t.minIdx, s = t.maxIdx)
                }

                function b() {
                    n.animator.stop()
                }
                n.on("updated", g), n.on("optionsChanged", g), n.on("created", g), n.on("dragStarted", (function () {
                    e = !1, b(), t = i = n.track.details.abs
                })), n.on("dragChecked", (function () {
                    e = !0
                })), n.on("dragEnded", (function () {
                    var e = n.options.mode;
                    "snap" === e && function () {
                        var e = n.track,
                            r = n.track.details,
                            u = r.position,
                            s = l(v());
                        (u > o || u < a) && (s = 0);
                        var c = t + s;
                        0 === r.slides[e.absToRel(c)].portion && (c -= s), t !== i && (c = i), l(e.idxToDist(c, !0)) !== s && (c += s), c = f(c);
                        var d = e.idxToDist(c, !0);
                        n.animator.start([{
                            distance: d,
                            duration: 500,
                            easing: function (n) {
                                return 1 + --n * n * n * n * n
                            }
                        }])
                    }(), "free" !== e && "free-snap" !== e || h()
                })), n.on("dragged", (function () {
                    i = n.track.details.abs
                }))
            }

            function b(n) {
                var t, i, e, r, a, f, p, v, h, m, g, b, x, y, k, w, M, T, C = c();

                function E(t) {
                    if (f && v === t.id) {
                        var o = D(t);
                        if (h) {
                            if (!A(t)) return I(t);
                            m = o, h = !1, n.emit("dragChecked")
                        }
                        if (w) return m = o;
                        u(t);
                        var c = function (t) {
                            if (M === -1 / 0 && T === 1 / 0) return t;
                            var e = n.track.details,
                                o = e.length,
                                u = e.position,
                                s = d(t, M - u, T - u);
                            if (0 === o) return 0;
                            if (!n.options.rubberband) return s;
                            if (u <= T && u >= M) return t;
                            if (u < M && i > 0 || u > T && i < 0) return t;
                            var c = (u < M ? u - M : u - T) / o,
                                l = r * o,
                                f = Math.abs(c * l),
                                p = Math.max(0, 1 - f / a * 2);
                            return p * p * t
                        }(p(m - o) / r * e);
                        i = l(c);
                        var x = n.track.details.position;
                        (x > M && x < T || x === M && i > 0 || x === T && i < 0) && s(t), g += c, !b && Math.abs(g * r) > 5 && (b = !0), n.track.add(c), m = o, n.emit("dragged")
                    }
                }

                function z(t) {
                    !f && n.track.details && n.track.details.length && (g = 0, f = !0, b = !1, h = !0, v = t.id, A(t), m = D(t), n.emit("dragStarted"))
                }

                function I(t) {
                    f && v === t.idChanged && (f = !1, n.emit("dragEnded"))
                }

                function A(n) {
                    var t = L(),
                        i = t ? n.y : n.x,
                        e = t ? n.x : n.y,
                        r = void 0 !== x && void 0 !== y && Math.abs(y - e) <= Math.abs(x - i);
                    return x = i, y = e, r
                }

                function D(n) {
                    return L() ? n.y : n.x
                }

                function L() {
                    return n.options.vertical
                }

                function S() {
                    r = n.size, a = L() ? window.innerHeight : window.innerWidth;
                    var t = n.track.details;
                    t && (M = t.min, T = t.max)
                }

                function O(n) {
                    b && (s(n), u(n))
                }

                function _() {
                    if (C.purge(), n.options.drag && !n.options.disabled) {
                        var i;
                        i = n.options.dragSpeed || 1, p = "function" == typeof i ? i : function (n) {
                            return n * i
                        }, e = n.options.rtl ? -1 : 1, S(), t = n.container,
                            function () {
                                var n = "data-keen-slider-clickable";
                                o("[".concat(n, "]:not([").concat(n, "=false])"), t).map((function (n) {
                                    C.add(n, "dragstart", s), C.add(n, "mousedown", s), C.add(n, "touchstart", s)
                                }))
                            }(), C.add(t, "dragstart", (function (n) {
                                u(n)
                            })), C.add(t, "click", O, {
                                capture: !0
                            }), C.input(t, "ksDragStart", z), C.input(t, "ksDrag", E), C.input(t, "ksDragEnd", I), C.input(t, "mousedown", z), C.input(t, "mousemove", E), C.input(t, "mouseleave", I), C.input(t, "mouseup", I), C.input(t, "touchstart", z, {
                                passive: !0
                            }), C.input(t, "touchmove", E, {
                                passive: !1
                            }), C.input(t, "touchend", I), C.input(t, "touchcancel", I), C.add(window, "wheel", (function (n) {
                                f && u(n)
                            }));
                        var r = "data-keen-slider-scrollable";
                        o("[".concat(r, "]:not([").concat(r, "=false])"), n.container).map((function (n) {
                            return function (n) {
                                var t;
                                C.input(n, "touchstart", (function (n) {
                                    t = D(n), w = !0, k = !0
                                }), {
                                    passive: !0
                                }), C.input(n, "touchmove", (function (i) {
                                    var e = L(),
                                        r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth,
                                        a = t - D(i),
                                        o = e ? n.scrollTop : n.scrollLeft,
                                        s = e && "scroll" === n.style.overflowY || !e && "scroll" === n.style.overflowX;
                                    if (t = D(i), (a < 0 && o > 0 || a > 0 && o < r) && k && s) return w = !0;
                                    k = !1, u(i), w = !1
                                })), C.input(n, "touchend", (function () {
                                    w = !1
                                }))
                            }(n)
                        }))
                    }
                }
                n.on("updated", S), n.on("optionsChanged", _), n.on("created", _), n.on("destroyed", C.purge)
            }

            function x(n) {
                var t, i, e = null;

                function r(t, i, e) {
                    n.animator.active ? o(t, i, e) : requestAnimationFrame((function () {
                        return o(t, i, e)
                    }))
                }

                function a() {
                    r(!1, !1, i)
                }

                function o(i, r, a) {
                    var o = 0,
                        u = n.size,
                        d = n.track.details;
                    if (d && t) {
                        var l = d.slides;
                        t.forEach((function (n, t) {
                            if (i) !e && r && s(n, null, a), c(n, null, a);
                            else {
                                if (!l[t]) return;
                                var d = l[t].size * u;
                                !e && r && s(n, d, a), c(n, l[t].distance * u - o, a), o += d
                            }
                        }))
                    }
                }

                function u(t) {
                    return "performance" === n.options.renderMode ? Math.round(t) : t
                }

                function s(n, t, i) {
                    var e = i ? "height" : "width";
                    null !== t && (t = u(t) + "px"), n.style["min-" + e] = t, n.style["max-" + e] = t
                }

                function c(n, t, i) {
                    if (null !== t) {
                        t = u(t);
                        var e = i ? t : 0;
                        t = "translate3d(".concat(i ? 0 : t, "px, ").concat(e, "px, 0)")
                    }
                    n.style.transform = t, n.style["-webkit-transform"] = t
                }

                function d() {
                    t && (o(!0, !0, i), t = null), n.on("detailsChanged", a, !0)
                }

                function l() {
                    r(!1, !0, i)
                }

                function f() {
                    d(), i = n.options.vertical, n.options.disabled || "custom" === n.options.renderMode || (e = "auto" === p(n.options.slides, "perView", null), n.on("detailsChanged", a), (t = n.slides).length && l())
                }
                n.on("created", f), n.on("optionsChanged", f), n.on("beforeOptionsChanged", (function () {
                    d()
                })), n.on("updated", l), n.on("destroyed", d)
            }

            function y(t, i) {
                return function (e) {
                    var r, u, s, d, l, v, h = c();

                    function m(n) {
                        var t;
                        a(e.container, "reverse", "rtl" !== (t = e.container, window.getComputedStyle(t, null).getPropertyValue("direction")) || n ? null : ""), a(e.container, "v", e.options.vertical && !n ? "" : null), a(e.container, "disabled", e.options.disabled && !n ? "" : null)
                    }

                    function g() {
                        b() && M()
                    }

                    function b() {
                        var t = null;
                        if (d.forEach((function (n) {
                            n.matches && (t = n.__media)
                        })), t === r) return !1;
                        r || e.emit("beforeOptionsChanged"), r = t;
                        var i = t ? s.breakpoints[t] : s;
                        return e.options = n(n({}, s), i), m(), I(), A(), C(), !0
                    }

                    function x(n) {
                        var t = f(n);
                        return (e.options.vertical ? t.height : t.width) / e.size || 1
                    }

                    function y() {
                        return e.options.trackConfig.length
                    }

                    function k(t) {
                        for (var a in r = !1, s = n(n({}, i), t), h.purge(), u = e.size, d = [], s.breakpoints || []) {
                            var o = window.matchMedia(a);
                            o.__media = a, d.push(o), h.add(o, "change", g)
                        }
                        h.add(window, "orientationchange", z), h.add(window, "resize", E), b()
                    }

                    function w(n) {
                        e.animator.stop();
                        var t = e.track.details;
                        e.track.init(null != n ? n : t ? t.abs : 0)
                    }

                    function M(n) {
                        w(n), e.emit("optionsChanged")
                    }

                    function T(n, t) {
                        if (n) return k(n), void M(t);
                        I(), A();
                        var i = y();
                        C(), y() !== i ? M(t) : w(t), e.emit("updated")
                    }

                    function C() {
                        var n = e.options.slides;
                        if ("function" == typeof n) return e.options.trackConfig = n(e.size, e.slides);
                        for (var t = e.slides, i = t.length, r = "number" == typeof n ? n : p(n, "number", i, !0), a = [], o = p(n, "perView", 1, !0), u = p(n, "spacing", 0, !0) / e.size || 0, s = "auto" === o ? u : u / o, c = p(n, "origin", "auto"), d = 0, l = 0; l < r; l++) {
                            var f = "auto" === o ? x(t[l]) : 1 / o - u + s,
                                v = "center" === c ?.5 - f / 2 : "auto" === c ? 0 : c;
                            a.push({
                                origin: v,
                                size: f,
                                spacing: u
                            }), d += f
                        }
                        if (d += u * (r - 1), "auto" === c && !e.options.loop && 1 !== o) {
                            var h = 0;
                            a.map((function (n) {
                                var t = d - h;
                                return h += n.size + u, t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n
                            }))
                        }
                        e.options.trackConfig = a
                    }

                    function E() {
                        I();
                        var n = e.size;
                        e.options.disabled || n === u || (u = n, T())
                    }

                    function z() {
                        E(), setTimeout(E, 500), setTimeout(E, 2e3)
                    }

                    function I() {
                        var n = f(e.container);
                        e.size = (e.options.vertical ? n.height : n.width) || 1
                    }

                    function A() {
                        e.slides = o(e.options.selector, e.container)
                    }
                    e.container = (v = o(t, l || document)).length ? v[0] : null, e.destroy = function () {
                        h.purge(), e.emit("destroyed"), m(!0)
                    }, e.prev = function () {
                        e.moveToIdx(e.track.details.abs - 1, !0)
                    }, e.next = function () {
                        e.moveToIdx(e.track.details.abs + 1, !0)
                    }, e.update = T, k(e.options)
                }
            }
            return function (n, i, e) {
                try {
                    return function (n, t) {
                        var i, e = {};
                        return i = {
                            emit: function (n) {
                                e[n] && e[n].forEach((function (n) {
                                    n(i)
                                }));
                                var t = i.options && i.options[n];
                                t && t(i)
                            },
                            moveToIdx: function (n, t, e) {
                                var r = i.track.idxToDist(n, t);
                                if (r) {
                                    var a = i.options.defaultAnimation;
                                    i.animator.start([{
                                        distance: r,
                                        duration: p(e || a, "duration", 500),
                                        easing: p(e || a, "easing", (function (n) {
                                            return 1 + --n * n * n * n * n
                                        }))
                                    }])
                                }
                            },
                            on: function (n, t, i) {
                                void 0 === i && (i = !1), e[n] || (e[n] = []);
                                var r = e[n].indexOf(t);
                                r > -1 ? i && delete e[n][r] : i || e[n].push(t)
                            },
                            options: n
                        },
                            function () {
                                if (i.track = m(i), i.animator = h(i), t)
                                    for (var n = 0, e = t; n < e.length; n++)(0, e[n])(i);
                                i.track.init(i.options.initial || 0), i.emit("created")
                            }(), i
                    }(i, t([y(n, {
                        drag: !0,
                        mode: "snap",
                        renderMode: "precision",
                        rubberband: !0,
                        selector: ".keen-slider__slide"
                    }), x, b, g], e || [], !0))
                } catch (n) {
                    console.error(n)
                }
            }
        }));

// === SCRIPT 3 ===
// Initialize Lenis
        function initLenisScroll() {
            if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
                setTimeout(initLenisScroll, 60);
                return;
            }
            if (window.__lenisInstance) return;
            const lenis = new Lenis({
                smooth: true,
                lerp: 0.2,
                wheelMultiplier: 1,
                infinite: false,
                wheelEventsTarget: document.body,
            });
            window.__lenisInstance = lenis;

            // Use requestAnimationFrame to continuously update the scroll
            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
        }
        initLenisScroll();

// === SCRIPT 4 ===
//navbar aria
        function initNavbarAria() {
            var toggles = document.querySelectorAll('.navbar_menu-open');
            if (!toggles.length) return;

            function sync(el) {
                el.setAttribute('aria-expanded', el.classList.contains('open') ? 'true' : 'false');
            }

            var observer = new MutationObserver(function (records) {
                records.forEach(function (r) {
                    sync(r.target);
                });
            });

            toggles.forEach(function (el) {
                sync(el);
                observer.observe(el, {
                    attributes: true,
                    attributeFilter: ['class']
                });
            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNavbarAria);
        } else {
            initNavbarAria();
        }

        //navbar text
        function initNavbarTextAnim() {
            if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') {
                setTimeout(initNavbarTextAnim, 60);
                return;
            }
            if (window.__navbarTextAnimInitialized) return;
            window.__navbarTextAnimInitialized = true;

            gsap.set('.navbar_logo-anim', {
                autoAlpha: 1
            });

            let blocks = gsap.utils.toArray('.navbar_logo-anim_text');
            if (!blocks.length) return;
            let step = 2.8; // time between blocks -> lower = more overlap (must be >= enter+hold = 2.5)
            let period = step * blocks.length; // shared loop length

            blocks.forEach((el, i) => {
                let chars = SplitText.create(el, {
                    type: 'chars'
                }).chars;
                gsap.set(chars, {
                    yPercent: 100,
                    opacity: 0
                });
                let iter = 0.8 + 2 + 0.04 * (chars.length - 1); // enter(0.4) + hold(2) + exit(0.4) + stagger on both
                gsap
                    .timeline({
                        repeat: -1,
                        delay: i * step,
                        repeatDelay: period - iter
                    })
                    .to(chars, {
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.02,
                        duration: 0.5
                    })
                    .to(chars, {
                        yPercent: -100,
                        opacity: 0,
                        stagger: 0.02,
                        duration: 0.5
                    }, '+=2');
            });
        }
        initNavbarTextAnim();


        ////timer


        const cities = {
            london: 'Europe/London',
            newyork: 'America/New_York',
            kyiv: 'Europe/Kyiv',
            dubai: 'Asia/Dubai'
        };

        function updateClocks() {
            const now = new Date();

            for (const [city, timeZone] of Object.entries(cities)) {
                const card = document.querySelector(`[data-time="${city}"]`);
                if (!card) continue;

                const parts = new Intl.DateTimeFormat('en-US', {
                    timeZone,
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                }).formatToParts(now);

                const hour = parts.find(p => p.type === 'hour').value;
                const minute = parts.find(p => p.type === 'minute').value;
                const period = parts.find(p => p.type === 'dayPeriod').value;

                card.querySelector('.time').textContent = `${hour}:${minute}`;
                card.querySelector('.time-pm').textContent = period.toLowerCase();

                card.querySelector('.date').textContent = new Intl.DateTimeFormat('en-US', {
                    timeZone,
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                }).format(now);
            }
        }

        updateClocks();
        setInterval(updateClocks, 1000);



        ///keen
        (function () {
            const els = document.querySelectorAll(
                ".blog_list-v3.keen-slider, [data-slider='mobile-slider']"
            )
            if (!els.length) return

            const mq = window.matchMedia("(max-width: 991px)")

            const instances = Array.from(els).map(function (el) {
                let slider = null

                return {
                    init: function () {
                        if (slider) return
                        slider = new KeenSlider(el, {
                            loop: false,
                            slides: {
                                perView: 1,
                                spacing: 16
                            },
                        })
                    },
                    destroy: function () {
                        if (!slider) return
                        slider.destroy()
                        slider = null
                    },
                }
            })

            function sync() {
                instances.forEach(function (s) {
                    mq.matches ? s.init() : s.destroy()
                })
            }

            sync()
            mq.addEventListener("change", sync)
        })();


        //stars

        (function () {
            const cv = document.getElementById("space");
            if (!cv || typeof cv.getContext !== "function") return; // not present, or not a <canvas>
            const x = cv.getContext("2d");
            if (!x) return; // context unavailable

            const rmq = matchMedia("(prefers-reduced-motion:reduce)");
            let rm = rmq.matches;

            // ⬇⬇⬇  CHANGE THIS to control how fast you fly forward  ⬇⬇⬇
            const SPEED = 0.00005; // slower = lower number  (try 0.00005 very slow → 0.0006 fast)
            // ⬆⬆⬆ -------------------------------------------------- ⬆⬆⬆
            const r = (a, b) => a + Math.random() * (b - a);

            let W, H, cx, cy, D, F, N, stars, raf, last;

            function reset(s) {
                s.x = r(-1, 1);
                s.y = r(-1, 1);
                s.z = 1;
                s.fresh = true;
            }

            function project(s) {
                const k = F / s.z;
                s.px = cx + s.x * k;
                s.py = cy + s.y * k;
            }

            function build() {
                D = Math.min(devicePixelRatio || 1, 2);
                W = cv.clientWidth || innerWidth;
                H = cv.clientHeight || innerHeight;
                cx = W / 2;
                cy = H / 2;
                F = cx * 0.7;
                cv.width = W * D;
                cv.height = H * D;
                x.setTransform(D, 0, 0, D, 0, 0);
                N = Math.min(Math.round(W * H * 0.0004), 700);
                stars = [];
                for (let i = 0; i < N; i++) {
                    const s = {};
                    reset(s);
                    s.z = r(0.05, 1);
                    project(s);
                    stars.push(s);
                }
            }

            function frame(t) {
                const dt = Math.min(t - last, 50);
                last = t;
                x.clearRect(0, 0, W, H);
                x.fillStyle = "#fff";
                x.strokeStyle = "#fff";
                for (let i = 0; i < N; i++) {
                    const s = stars[i];
                    s.z -= dt * SPEED;
                    if (s.z < 0.02) {
                        reset(s);
                        project(s);
                        continue;
                    }
                    const ox = s.px,
                        oy = s.py;
                    project(s);
                    if (s.px < -50 || s.px > W + 50 || s.py < -50 || s.py > H + 50) {
                        reset(s);
                        project(s);
                        continue;
                    }
                    const d = 1 - s.z; // 0 far → 1 near
                    const a = Math.min(d * 1.1, 1);
                    const w = 0.4 + d * 1.8; // size grows as it nears
                    x.globalAlpha = a;
                    if (s.fresh) {
                        s.fresh = false;
                    } // skip streak on the first frame
                    else if (d > 0.55) { // streaks only for close, fast stars
                        x.lineWidth = w;
                        x.beginPath();
                        x.moveTo(ox, oy);
                        x.lineTo(s.px, s.py);
                        x.stroke();
                    }
                    x.beginPath();
                    x.arc(s.px, s.py, w * 0.6, 0, 6.2832);
                    x.fill();
                }
                raf = requestAnimationFrame(frame);
            }

            function start() {
                if (!raf && !rm) {
                    last = performance.now();
                    raf = requestAnimationFrame(frame);
                }
            }

            function stop() {
                if (raf) {
                    cancelAnimationFrame(raf);
                    raf = null;
                }
            }

            function still() {
                x.clearRect(0, 0, W, H);
                x.fillStyle = "#fff";
                x.globalAlpha = 1;
                for (const s of stars) {
                    x.globalAlpha = Math.min((1 - s.z) * 1.1, 1);
                    x.beginPath();
                    x.arc(s.px, s.py, (0.4 + (1 - s.z) * 1.8) * 0.6, 0, 6.2832);
                    x.fill();
                }
            }

            document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());

            let rt;
            addEventListener("resize", () => {
                clearTimeout(rt);
                rt = setTimeout(() => {
                    build();
                    if (rm) still();
                }, 150);
            });

            const onMotion = e => {
                rm = e.matches;
                if (rm) {
                    stop();
                    still();
                } else start();
            };
            rmq.addEventListener ? rmq.addEventListener("change", onMotion) : rmq.addListener(onMotion);

            build();
            rm ? still() : start();
        })();


        //services counter
        function updateServicesCounter() {
            document.querySelectorAll('[data-count]').forEach(function (countEl) {
                var key = countEl.getAttribute('data-count');
                var list = document.querySelector('[data-items="' + key + '"]');
                if (!list) return;
                countEl.textContent = '(' + list.children.length + ')';
            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateServicesCounter);
        } else {
            updateServicesCounter();
        }

        //skip link
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.skip-link')) return;
            var m = document.getElementById('main');
            if (m) m.focus({
                preventScroll: true
            });
        });

// === SCRIPT 5 ===
        function triggerWebflowTabs() {
            try {
                const wf = window.Webflow;
                if (!wf || typeof wf.require !== 'function') {
                    setTimeout(triggerWebflowTabs, 100);
                    return;
                }
                const wfIx = wf.require('ix3');
                if (!wfIx) return;
                if (window.matchMedia('(min-width: 992px)').matches) {
                    setTimeout(function () {
                        wfIx.emit('tabs');
                    }, 1500);
                } else {
                    wfIx.emit('tabs');
                }
            } catch (e) {}
        }
        if (document.readyState === 'complete') {
            triggerWebflowTabs();
        } else {
            window.addEventListener('load', triggerWebflowTabs);
        }

// === SCRIPT 6 ===
// set variables
if ($(".marquee_wrap").length && $(".marquee_track").length) {
  let items = $(".marquee_item");
  let textItem = $(".marquee_text-item");
  let wrap = $(".marquee_wrap");
  let imageItem = $(".marquee_image");
  let totalItems = items.length / 2 + 1;
  let duration = totalItems * 3.2;

  // switch which item is active
  function makeItemActive(myIndex) {
    items.removeClass("is-active");
    $(".marquee_list").each(function (index) {
      $(this).find(".marquee_item").eq(myIndex).addClass("is-active");
    });
    textItem.removeClass("is-active");
    textItem.eq(myIndex).addClass("is-active");
    imageItem.removeClass("is-active");
    imageItem.eq(myIndex).addClass("is-active");
  }
  makeItemActive(3);

  // check if item is in center of wrapper
  function checkPosition() {
    if (!wrap.offset()) return;
    let wrapCenter = wrap.offset().top + wrap.height() / 2;
    items.each(function (index) {
      let itemHeight = $(this).height() / 2;
      let offsetTop = $(this).offset().top + itemHeight;
      if (offsetTop < wrapCenter + itemHeight / 2 && offsetTop > wrapCenter) {
        let myIndex = $(this).index();
        makeItemActive(myIndex);
      }
    });
  }

  // create vertical loop
  let marquee = gsap.timeline({ repeat: -1 }).fromTo(
    ".marquee_track",
    { yPercent: 0 },
    {
      yPercent: -50,
      duration: duration,
      ease: "none",
      onUpdate: () => {
        checkPosition();
      }
    }
  );
}

// === SCRIPT 7 ===
///random dances

        (function () {
            const video = document.querySelector('.dance-vid');
            if (!video) return;

            const dances = [
                'cosmonaut-dance_Silly-Dance-2',
                'cosmonaut-dance_Silly-Dance',
                'cosmonaut-dance_Rumba',
                'cosmonaut-dance_Chicken-Dance',
            ];

            const dance = dances[Math.floor(Math.random() * dances.length)];
            const base = `https://video.cosmos.studio/${dance}`;
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


            video.preload = 'none';
            video.muted = true;
            video.playsInline = true;
            video.loop = true;

            let started = false;

            const start = () => {
                if (started) return;
                started = true;

                video.querySelector('source') ?.remove();

                const makeSource = (ext, type) => {
                    const s = document.createElement('source');
                    s.src = `${base}.${ext}`;
                    s.type = type;
                    return s;
                };

                const webm = makeSource('webm', 'video/webm');
                const mov = makeSource('mov', 'video/quicktime');

                video.append(isSafari ? mov : webm, isSafari ? webm : mov);
                video.load();
                video.play().catch(() => { });
            };

            if (!('IntersectionObserver' in window)) {
                start();
                return;
            }

            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        start();
                        video.play().catch(() => { });
                    } else if (started) {
                        video.pause(); // saves CPU/battery while scrolled away
                    }
                });
            }, {
                rootMargin: '200px 0px'
            });

            io.observe(video);
        })();


        ///hero video button

        window.Webflow ||=[];
        window.Webflow.push(function () {
            document.querySelectorAll('[data-w-bg-video-control]').forEach(function (btn) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var video = document.getElementById(btn.getAttribute('aria-controls'));
                    if (!video) return;
                    var spans = btn.querySelectorAll('span');
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                    spans[0].hidden = video.paused;
                    spans[1].hidden = !video.paused;
                });
            });
        });

        //custom play pause

        (function () {
            document.querySelectorAll('[data-video]').forEach(function (wrap) {
                var video = wrap.querySelector('video');
                var btn = wrap.querySelector('.play-pause');
                if (!video || !btn) return;


                var pauseIcon = btn.querySelector('[data-state="play"]');
                var playIcon = btn.querySelector('[data-state="pause"]');

                btn.type = 'button';

                function sync() {
                    var playing = !video.paused && !video.ended;
                    if (pauseIcon) pauseIcon.style.display = playing ? '' : 'none';
                    if (playIcon) playIcon.style.display = playing ? 'none' : '';
                    btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
                    btn.setAttribute('aria-pressed', playing ? 'false' : 'true');
                    wrap.setAttribute('data-video', playing ? 'playing' : 'paused');
                }

                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (video.paused || video.ended) video.play().catch(function () { });
                    else video.pause();
                });


                video.addEventListener('play', sync);
                video.addEventListener('pause', sync);
                video.addEventListener('ended', sync);
                sync();
            });
        })();


        //hero video

        (function () {
            var wrap = document.getElementById('hero-video');
            if (!wrap) return;
            var video = wrap.querySelector('video');
            if (!video || !video.getAttribute('data-src')) return;

            var userPaused = false;
            var attached = false;

            function attach() {
                if (attached) return;
                attached = true;
                var s = document.createElement('source');
                s.src = video.getAttribute('data-src');
                s.type = 'video/mp4';
                video.appendChild(s);
                video.load();
            }


            function sync(playing) {
                wrap.setAttribute('data-video', playing ? 'playing' : 'paused');
                var btn = wrap.querySelector('.play-pause');
                if (btn) {
                    btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
                    btn.setAttribute('aria-pressed', playing ? 'false' : 'true');
                }
                var pauseIcon = wrap.querySelector('[data-state="play"]');
                var playIcon = wrap.querySelector('[data-state="pause"]');
                if (pauseIcon) pauseIcon.style.display = playing ? '' : 'none';
                if (playIcon) playIcon.style.display = playing ? 'none' : '';
            }

            video.addEventListener('play', function () {
                sync(true);
            });
            video.addEventListener('pause', function () {
                sync(false);
            });


            wrap.addEventListener('click', function (e) {
                if (!e.target.closest('.play-pause')) return;
                attach();
                userPaused = !video.paused;
            }, true);

            function tryPlay() {
                var p = video.play();
                if (p && p.catch) {
                    p.catch(function () {

                        video.addEventListener('canplay', function once() {
                            video.removeEventListener('canplay', once);
                            if (!userPaused) {
                                var r = video.play();
                                if (r && r.catch) r.catch(function () { });
                            }
                        });
                    });
                }
            }

            function boot() {
                var conn = navigator.connection || {};
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                    conn.saveData || /2g/.test(conn.effectiveType || '')) {
                    sync(false);
                    return;
                }
                attach();
                if (userPaused) return;
                tryPlay();
            }

            function whenIdle(fn) {
                if ('requestIdleCallback' in window) requestIdleCallback(fn, {
                    timeout: 2000
                });
                else setTimeout(fn, 300);
            }

            if (document.readyState === 'complete') whenIdle(boot);
            else window.addEventListener('load', function () {
                whenIdle(boot);
            }, {
                once: true
            });
        })();


        //reddot video

        (function () {
            var wraps = document.querySelectorAll('[data-lazyload]');
            if (!wraps.length) return;

            var conn = navigator.connection || {};
            var noAuto = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                conn.saveData || /2g/.test(conn.effectiveType || '');

            Array.prototype.forEach.call(wraps, function (wrap) {
                var video = wrap.querySelector('video[data-src]');
                if (!video) return;

                var attached = false,
                    userPaused = false,
                    inView = false;

                function attach() {
                    if (attached) return;
                    attached = true;
                    if (video.getAttribute('data-poster')) video.poster = video.getAttribute('data-poster');
                    var s = document.createElement('source');
                    s.src = video.getAttribute('data-src');
                    s.type = 'video/mp4';
                    video.appendChild(s);
                    video.load();
                }

                function sync(playing) {
                    wrap.setAttribute('data-video', playing ? 'playing' : 'paused');
                    var btn = wrap.querySelector('.play-pause');
                    if (btn) {
                        btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
                        btn.setAttribute('aria-pressed', playing ? 'false' : 'true');
                    }
                    var pauseIcon = wrap.querySelector('[data-state="play"]');
                    var playIcon = wrap.querySelector('[data-state="pause"]');
                    if (pauseIcon) pauseIcon.style.display = playing ? '' : 'none';
                    if (playIcon) playIcon.style.display = playing ? 'none' : '';
                }

                video.addEventListener('play', function () {
                    sync(true);
                });
                video.addEventListener('pause', function () {
                    sync(false);
                });


                wrap.addEventListener('click', function (e) {
                    if (!e.target.closest('.play-pause')) return;
                    attach();
                    userPaused = !video.paused;
                }, true);

                function tryPlay() {
                    if (userPaused || noAuto) return;
                    attach();
                    var p = video.play();
                    if (p && p.catch) p.catch(function () {
                        video.addEventListener('canplay', function once() {
                            video.removeEventListener('canplay', once);
                            if (!userPaused && inView) {
                                var r = video.play();
                                if (r && r.catch) r.catch(function () { });
                            }
                        });
                    });
                }

                if (!('IntersectionObserver' in window)) {
                    attach();
                    tryPlay();
                    return;
                }


                new IntersectionObserver(function (entries, obs) {
                    if (!entries[0].isIntersecting) return;
                    obs.disconnect();
                    attach();
                    tryPlay();
                }, {
                    rootMargin: wrap.getAttribute('data-lazyload') || '400px 0px'
                }).observe(wrap);


                new IntersectionObserver(function (entries) {
                    inView = entries[0].isIntersecting;
                    if (!attached) return;
                    if (inView) tryPlay();
                    else video.pause();
                }, {
                    threshold: 0
                }).observe(wrap);
            });
        })();

