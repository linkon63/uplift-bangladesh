(self.webpackChunk = self.webpackChunk || []).push([
    ["477"], {
        426: function() {
            function e() {
                let e = Webflow.require("ix3");
                e.ready().then(() => {
                    let t = e.getInstance();
                    t && (t.register([{
                        id: "i-1213e15a",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    jump: .1,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["footer_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    jump: .45,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["footer_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-72eadc37"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-1e2549e4",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-888eabb7"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-338a7199",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    jump: .1,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    jump: .45,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-55577bd6"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-38a30187",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_blog-block"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    speed: 1.2,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_blog-block"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-6d04b88e"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-4854cfb9",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    control: "togglePlayReverse",
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "odd"
                                    }
                                },
                                ["wf:class", ["faq_accordion"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-0f1cfd27"],
                        deleted: !1
                    }, {
                        id: "i-56afcb16",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top bottom",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["testimonials_numbers"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-00e2f680"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "skip-to-end",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-726d0e7f",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    control: "restart",
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["navbar_menu-open"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:click", {
                                    control: "reverse",
                                    jump: 1.2,
                                    speed: 1.2,
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["menu_close"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:click", {
                                    control: "reverse",
                                    jump: 1.2,
                                    speed: 1.2,
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["menu_bg"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-559e4f15"],
                        deleted: !1
                    }, {
                        id: "i-765280fe",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["button"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    jump: .6,
                                    speed: 1.2,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["button"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-73e73db9"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }, {
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-82042bf6",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_case-block"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    speed: 1.5,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["menu_case-block"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-119770d2"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-820a84c5",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-656129a9"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-bca592e9",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    jump: .1,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["navbar_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    jump: .45,
                                    speed: 1.2,
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["navbar_link"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-51eddf4f"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-f320e248",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-438005ae"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-a99c20cd",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-894daaa5"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-3e16427d",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-48fba155"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "skip-to-end",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-0c153c1a",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top 90%",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["features_time-rows"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-78678d9f"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-fecc55ef",
                        scope: {
                            type: "component",
                            componentId: "a9986cc0-66fa-f1dd-0c9b-f5bc33478ab0"
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["awards_row"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    delay: .3,
                                    control: "reverseFlipEase",
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["awards_row"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-c003b1c6"],
                        deleted: !1
                    }, {
                        id: "i-2a6284d8",
                        scope: {
                            type: "component",
                            componentId: "17fdac3e-575f-2bc2-d465-868a37ccf75c"
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    controlType: "standard"
                                },
                                ["wf:class", ["hover-card"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverseFlipEase",
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["hover-card"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-657433bd"],
                        deleted: !1
                    }, {
                        id: "i-1ab6a289",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-57d59606"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-2598f54f",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:hover", {
                                    control: "play",
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseenter",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["navbar_menu-open"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:hover", {
                                    control: "reverse",
                                    controlType: "standard",
                                    pluginConfig: {
                                        type: "mouseleave",
                                        hover: "each"
                                    }
                                },
                                ["wf:class", ["navbar_menu-open"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-fb99e98d"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-70266251",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top top",
                                        end: "bottom bottom",
                                        scrub: .5,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["section_showreel"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-f4c8acb3"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-802dacc0",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-542f9041"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-d7ab32ba",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-866bb9a7"],
                        conditionalPlayback: [{
                            type: "prefers-reduced-motion",
                            behavior: "dont-animate",
                            breakpoints: []
                        }],
                        deleted: !1
                    }, {
                        id: "i-09d2236e",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top top",
                                        end: "bottom bottom",
                                        scrub: 0,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["sticky-wr"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-b9bd6e48"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-2f188e07",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top top",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "reverse",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["home-header_headings"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-06c6479d"],
                        deleted: !1
                    }, {
                        id: "i-76018d66",
                        scope: {
                            type: "pages",
                            value: ["69f9c76e84333229e651e8e2"]
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top top",
                                        end: "bottom center",
                                        scrub: null,
                                        enter: "none",
                                        leave: "play",
                                        enterBack: "reverse",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:selector", "#hero", {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-0d3fb09c"],
                        deleted: !1
                    }], [{
                        id: "t-72eadc37",
                        deleted: !1,
                        actions: [{
                            id: "ta-97a36899",
                            targets: [
                                ["wf:selector", ".footer_link-text._1", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .025,
                                    ease: 0
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-aaa3365b",
                            targets: [
                                ["wf:selector", ".footer_link-text._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .025,
                                    ease: 0
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-46584f61",
                            targets: [
                                ["wf:selector", ".footer_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1]
                                }
                            }
                        }, {
                            id: "ta-c65d47d4",
                            targets: [
                                ["wf:selector", ".footer_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    display: ["none", "block"]
                                }
                            }
                        }]
                    }, {
                        id: "t-888eabb7",
                        deleted: !1,
                        actions: [{
                            id: "ta-340bb725",
                            targets: [
                                ["wf:class", ["button_glow-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["button_border-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1.5,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "100%"],
                                    y: ["0%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-80b4b011",
                            targets: [
                                ["wf:class", ["button_glow-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["button_border-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 1.5,
                                ease: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "100%"],
                                    y: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-cea415df",
                            targets: [
                                ["wf:class", ["button_glow-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["button_border-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1.5,
                                position: 2,
                                ease: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "0%"],
                                    y: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-ee3de090",
                            targets: [
                                ["wf:class", ["button_glow-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["button_border-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 3.5,
                                ease: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "0%"],
                                    y: [null, "0%"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-55577bd6",
                        deleted: !1,
                        actions: [{
                            id: "ta-c24ee7fe",
                            targets: [
                                ["wf:selector", ".menu_link-text._1", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .025,
                                    ease: 0
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-c3e6f711",
                            targets: [
                                ["wf:selector", ".menu_link-text._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .025,
                                    ease: 0
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-4be945b5",
                            targets: [
                                ["wf:selector", ".menu_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1]
                                }
                            }
                        }, {
                            id: "ta-43e60305",
                            targets: [
                                ["wf:selector", ".menu_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    display: ["none", "block"]
                                }
                            }
                        }]
                    }, {
                        id: "t-6d04b88e",
                        deleted: !1,
                        actions: [{
                            id: "ta-6c4e3100",
                            targets: [
                                ["wf:selector", ".menu_news-arrow._1", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "100%"],
                                    y: ["0%", "-100%"]
                                }
                            }
                        }, {
                            id: "ta-211e79ca",
                            targets: [
                                ["wf:selector", ".menu_news-arrow._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: .07,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "100%"],
                                    y: ["0%", "-100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-0f1cfd27",
                        deleted: !1,
                        actions: [{
                            id: "ta-5d53e3af",
                            targets: [
                                ["wf:class", ["faq_answer-wrap"], {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !0
                                }]
                            ],
                            timing: {
                                duration: .35,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    height: ["0px", "auto"],
                                    autoAlpha: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-00e2f680",
                        deleted: !1,
                        actions: [{
                            id: "ta-08b179ec",
                            targets: [
                                ["wf:attribute", '[animation="number-1"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 3
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "10%"]
                                }
                            }
                        }, {
                            id: "ta-8d21337b",
                            targets: [
                                ["wf:attribute", '[animation="number-2"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .1,
                                ease: 3
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "5%"]
                                }
                            }
                        }, {
                            id: "ta-738cfda8",
                            targets: [
                                ["wf:attribute", '[animation="number-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .2,
                                ease: 3
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "2%"]
                                }
                            }
                        }, {
                            id: "ta-a1a68ba9",
                            targets: [
                                ["wf:attribute", '[animation="number-1"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2,
                                position: .5,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-b3b3b513",
                            targets: [
                                ["wf:attribute", '[animation="number-2"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2,
                                position: .6,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-668f5b83",
                            targets: [
                                ["wf:attribute", '[animation="number-3"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2,
                                position: .7,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-8f9e77ae",
                            targets: [
                                ["wf:attribute", '[animation="number-4"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2.5,
                                position: .8,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-048eee0e",
                            targets: [
                                ["wf:attribute", '[animation="number-5"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2.5,
                                position: .9,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-e39ca769",
                            targets: [
                                ["wf:attribute", '[animation="number-6"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2.75,
                                position: 1,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-13603107",
                            targets: [
                                ["wf:attribute", '[animation="number-7"]', {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 3,
                                position: 1.1,
                                ease: 27
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-559e4f15",
                        deleted: !1,
                        actions: [{
                            id: "ta-c249968c",
                            targets: [
                                ["wf:class", ["menu"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["menu_bg"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .01,
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    display: ["none", "flex"]
                                }
                            }
                        }, {
                            id: "ta-bdf29310",
                            targets: [
                                ["wf:class", ["menu_bg"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .35,
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                },
                                "wf:style": {}
                            }
                        }, {
                            id: "ta-64076a6a",
                            targets: [
                                ["wf:class", ["menu_content"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1.5,
                                position: 0,
                                ease: 26
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["-110%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-20a89509",
                            targets: [
                                ["wf:any-element", "*", {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["menu_logo-wrap"]],
                                    firstMatchOnly: !1
                                }],
                                ["wf:any-element", "*", {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["menu_links-wrap"]],
                                    firstMatchOnly: !1
                                }],
                                ["wf:any-element", "*", {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["menu_legal"]],
                                    firstMatchOnly: !1
                                }],
                                ["wf:any-element", "*", {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["menu_cases"]],
                                    firstMatchOnly: !1
                                }],
                                ["wf:any-element", "*", {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["menu_blog"]],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .16,
                                stagger: {
                                    each: .05
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["-1rem", "0px"]
                                }
                            }
                        }, {
                            id: "ta-93638932",
                            targets: [
                                ["wf:attribute", '[aria-expanded="false"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {
                                    class: {
                                        selectors: ["open"], operation: "toggleClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-73e73db9",
                        deleted: !1,
                        actions: [{
                            id: "ta-e0f87818",
                            targets: [
                                ["wf:selector", ".button_text._1", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: 0,
                                stagger: {
                                    each: .02
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-61fb8ee9",
                            targets: [
                                ["wf:selector", ".button_text._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    display: [null, "block"]
                                }
                            }
                        }, {
                            id: "ta-cbf54708",
                            targets: [
                                ["wf:selector", ".button_text._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: .3,
                                stagger: {
                                    each: .02
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-e541902a",
                            targets: [
                                ["wf:selector", ".button_dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-a57271e6",
                            targets: [
                                ["wf:selector", ".button_dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: .3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-119770d2",
                        deleted: !1,
                        actions: [{
                            id: "ta-db3c7284",
                            targets: [
                                ["wf:selector", ".menu_case-img-wrap", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [1, .9]
                                }
                            }
                        }, {
                            id: "ta-c1789dc9",
                            targets: [
                                ["wf:selector", ".menu_case-img", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [1, 1.2]
                                }
                            }
                        }]
                    }, {
                        id: "t-656129a9",
                        deleted: !1,
                        actions: [{
                            id: "ta-888b0353",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-1"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: .8,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-0.75rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-535bc581",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-2"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 1.01,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.75rem", "0rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-d8c34a48",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-2"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 2.5,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-0.75rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-f7c27e6e",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 2.73,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.75rem", "0rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-d72260da",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 4.4,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-0.75rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-c75ec370",
                            targets: [
                                ["wf:attribute", '[animation="footer-word-1"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 4.63,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.75rem", "0rem"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-5faed155",
                            targets: [
                                ["wf:class", ["footer_label-word"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {},
                                "wf:transform": {
                                    display: [null, "block"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-51eddf4f",
                        deleted: !1,
                        actions: [{
                            id: "ta-d035dffc",
                            targets: [
                                ["wf:selector", ".navbar_link-text._1", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .018,
                                    ease: 0
                                },
                                ease: 12
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-6f090368",
                            targets: [
                                ["wf:selector", ".navbar_link-text._2", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    each: .018,
                                    ease: 0
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-2603dc75",
                            targets: [
                                ["wf:selector", ".nav_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .62,
                                position: 0,
                                ease: 12
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1]
                                }
                            }
                        }, {
                            id: "ta-c6a974a1",
                            targets: [
                                ["wf:selector", ".nav_link-dot", {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    display: ["none", "block"]
                                }
                            }
                        }]
                    }, {
                        id: "t-438005ae",
                        deleted: !1,
                        actions: [{
                            id: "ta-0e9903e9",
                            targets: [
                                ["wf:class", ["brands_card-group"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 60,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-100%"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-894daaa5",
                        deleted: !1,
                        actions: [{
                            id: "ta-9ae022dd",
                            targets: [
                                ["wf:class", ["home-grid_circle-1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 40,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    rotation: [null, "360deg"]
                                }
                            }
                        }, {
                            id: "ta-9d223a89",
                            targets: [
                                ["wf:class", ["home-grid_circle-2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 40,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    rotation: [null, "-360deg"]
                                }
                            }
                        }, {
                            id: "ta-4aa312f1",
                            targets: [
                                ["wf:class", ["home-grid_member"], {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["home-grid_circle-1"]],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 40,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    rotation: [null, "-360deg"]
                                }
                            }
                        }, {
                            id: "ta-b1206407",
                            targets: [
                                ["wf:class", ["home-grid_member-in"], {
                                    relationship: "direct-child-of",
                                    filterBy: ["wf:class", ["home-grid_circle-2"]],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 40,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    rotation: [null, "360deg"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-48fba155",
                        deleted: !1,
                        actions: [{
                            id: "ta-3cbce6bb",
                            targets: [
                                ["wf:class", ["logo-letter"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2,
                                stagger: {
                                    each: .04,
                                    from: "random"
                                },
                                ease: {
                                    type: "elastic",
                                    curve: "out",
                                    amplitude: 1,
                                    period: .75
                                }
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    scaleY: [0, null]
                                }
                            }
                        }, {
                            id: "ta-f0de535f",
                            targets: [
                                ["wf:class", ["home-header_video"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 2,
                                position: 0,
                                ease: 11
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    height: ["0%", null]
                                }
                            }
                        }, {
                            id: "ta-a1aa8f63",
                            targets: [
                                ["wf:class", ["home-header_service"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: .2,
                                stagger: {
                                    each: .1
                                },
                                ease: 5
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", null],
                                    y: ["3px", null]
                                }
                            }
                        }, {
                            id: "ta-7661a3a7",
                            targets: [
                                ["wf:class", ["navbar"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .75,
                                position: 0,
                                ease: 8
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    y: ["-101%", null]
                                }
                            }
                        }]
                    }, {
                        id: "t-78678d9f",
                        deleted: !1,
                        actions: [{
                            id: "ta-219d17e0",
                            targets: [
                                ["wf:class", ["features_time-block"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1.5,
                                stagger: {
                                    each: .15
                                },
                                ease: 5
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", null],
                                    width: ["0%", null]
                                }
                            }
                        }, {
                            id: "ta-8f4be00a",
                            targets: [
                                ["wf:class", ["timeline_text"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: .7,
                                stagger: {
                                    each: .15
                                },
                                ease: 2
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", null]
                                }
                            }
                        }]
                    }, {
                        id: "t-c003b1c6",
                        deleted: !1,
                        actions: [{
                            id: "ta-cf1a3263",
                            targets: [
                                ["wf:class", ["award-website"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .75,
                                ease: 8
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    height: ["0rem", null]
                                }
                            }
                        }]
                    }, {
                        id: "t-657433bd",
                        deleted: !1,
                        actions: [{
                            id: "ta-cb18ff6b",
                            targets: [
                                ["wf:class", ["hover-card_size"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                ease: 5
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    height: ["0px", null],
                                    opacity: ["0%", null]
                                }
                            }
                        }, {
                            id: "ta-d0793558",
                            targets: [
                                ["wf:class", ["hover-card_overlay"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 5
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-57d59606",
                        deleted: !1,
                        actions: [{
                            id: "ta-6615c92d",
                            targets: [
                                ["wf:class", ["features_touch._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 1.01
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1],
                                    opacity: ["100%", "0%"]
                                },
                                "wf:style": {
                                    display: [null, "block"]
                                }
                            }
                        }, {
                            id: "ta-f82004dc",
                            targets: [
                                ["wf:class", ["features_meeting-in._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 1.08,
                                stagger: {
                                    each: .1
                                },
                                ease: 12
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-100%"]
                                }
                            }
                        }, {
                            id: "ta-1dcee9f4",
                            targets: [
                                ["wf:class", ["features_meeting-in._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 1.08,
                                ease: 12
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-100%"]
                                }
                            }
                        }, {
                            id: "ta-40e6fd56",
                            targets: [
                                ["wf:class", ["features_touch._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 3.51
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1],
                                    opacity: ["100%", "0%"]
                                },
                                "wf:style": {
                                    display: [null, "block"]
                                }
                            }
                        }, {
                            id: "ta-37928dcd",
                            targets: [
                                ["wf:class", ["features_meeting-in._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 3.61,
                                stagger: {
                                    each: .1
                                },
                                ease: 12
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-100%"]
                                }
                            }
                        }, {
                            id: "ta-4875ea0d",
                            targets: [
                                ["wf:class", ["features_meeting-in._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 3.61,
                                stagger: {
                                    each: .1
                                },
                                ease: 12
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-200%"]
                                }
                            }
                        }, {
                            id: "ta-e0f2a037",
                            targets: [
                                ["wf:class", ["features_touch._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 6.04
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1],
                                    opacity: ["100%", "0%"]
                                },
                                "wf:style": {
                                    display: [null, "block"]
                                }
                            }
                        }, {
                            id: "ta-d648480d",
                            targets: [
                                ["wf:class", ["features_meeting-in._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 6.14,
                                stagger: {
                                    each: .1
                                },
                                ease: 12
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-7a5efc5b",
                            targets: [
                                ["wf:class", ["features_meeting-in._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                position: 6.14,
                                stagger: {
                                    each: .1
                                },
                                ease: 12
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-200%"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-fb99e98d",
                        deleted: !1,
                        actions: [{
                            id: "ta-4ad268df",
                            targets: [
                                ["wf:class", ["hamburger_line._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    width: ["2.25rem", "1.5rem"]
                                }
                            }
                        }]
                    }, {
                        id: "t-f4c8acb3",
                        deleted: !1,
                        actions: [{
                            id: "ta-d14ff33b",
                            targets: [
                                ["wf:class", ["showreel_video-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .21,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["25vh", "0vh"]
                                }
                            }
                        }, {
                            id: "ta-cedd7c46",
                            targets: [
                                ["wf:class", ["showreel_video-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .21,
                                position: .21,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    width: ["20vw", "101vw"],
                                    height: ["20vh", "101vh"]
                                }
                            }
                        }, {
                            id: "ta-ba88f81f",
                            targets: [
                                ["wf:class", ["showreel_heading._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .18,
                                position: .03,
                                ease: 3
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "-15vw"]
                                }
                            }
                        }, {
                            id: "ta-90b04277",
                            targets: [
                                ["wf:class", ["showreel_heading._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .18,
                                position: .03,
                                ease: 3
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "15vw"]
                                }
                            }
                        }, {
                            id: "ta-025c5ff6",
                            targets: [
                                ["wf:class", ["showreel_heading"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["showreel_subheading"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .09,
                                position: .24,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    color: ["hsla(0, 0.00%, 0.00%, 1.00)", "hsla(0, 0.00%, 100.00%, 1.00)"]
                                }
                            }
                        }, {
                            id: "ta-71241bc6",
                            targets: [
                                ["wf:class", ["showreel_play-icon"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .05,
                                position: .17,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-542f9041",
                        deleted: !1,
                        actions: [{
                            id: "ta-f45516d3",
                            targets: [
                                ["wf:class", ["note-marquee_text"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 12,
                                position: 0,
                                ease: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["0%", "-100%"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-866bb9a7",
                        deleted: !1,
                        actions: [{
                            id: "ta-d6cb535a",
                            targets: [
                                ["wf:class", ["features_results-card._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 2,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"],
                                    y: ["0rem", "-0.5rem"],
                                    scale: [1, 1.05]
                                }
                            }
                        }, {
                            id: "ta-edd245c0",
                            targets: [
                                ["wf:class", ["features_results-card._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 2,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["1.25rem", "0rem"],
                                    scale: [.95, 1]
                                }
                            }
                        }, {
                            id: "ta-1b87b1e8",
                            targets: [
                                ["wf:attribute", '[animation="result-text-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-text-4"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 2.2,
                                stagger: {
                                    amount: .5
                                },
                                ease: 11
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.5rem", "0rem"]
                                }
                            },
                            splitText: {
                                type: "words"
                            }
                        }, {
                            id: "ta-8255c2e8",
                            targets: [
                                ["wf:attribute", '[animation="result-icon-2"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: 2.86,
                                ease: 11
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.5rem", "0rem"]
                                }
                            }
                        }, {
                            id: "ta-52085ce2",
                            targets: [
                                ["wf:class", ["features_results-card._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 2,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["2.5rem", "1.25rem"],
                                    scale: [.9, .95]
                                }
                            }
                        }, {
                            id: "ta-542add17",
                            targets: [
                                ["wf:class", ["features_results-card._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 4.4
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"],
                                    y: ["0rem", "-0.5rem"],
                                    scale: [1, 1.05]
                                }
                            }
                        }, {
                            id: "ta-87515662",
                            targets: [
                                ["wf:class", ["features_results-card._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 4.4
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["1.25rem", "0rem"],
                                    scale: [.95, 1]
                                }
                            }
                        }, {
                            id: "ta-5645c2a4",
                            targets: [
                                ["wf:attribute", '[animation="result-text-5"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-text-6"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 4.61,
                                stagger: {
                                    amount: .5
                                },
                                ease: 11
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.5rem", "0rem"]
                                }
                            },
                            splitText: {
                                type: "words"
                            }
                        }, {
                            id: "ta-d23e93af",
                            targets: [
                                ["wf:attribute", '[animation="result-icon-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: 5.26,
                                ease: 11
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["0.5rem", "0rem"]
                                }
                            }
                        }, {
                            id: "ta-04782e49",
                            targets: [
                                ["wf:class", ["features_results-card._1"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 6.81
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    y: ["1.25rem", "0rem"],
                                    scale: [.95, 1],
                                    opacity: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-ebe8d45d",
                            targets: [
                                ["wf:class", ["features_results-card._2"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 6.81
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    y: ["1.25rem", "1.25rem"],
                                    scale: [.95, .95],
                                    opacity: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-e626505b",
                            targets: [
                                ["wf:class", ["features_results-card._3"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 6.81
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    y: ["1.25rem", "2.5rem"],
                                    scale: [.95, .9],
                                    opacity: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-cd90f898",
                            targets: [
                                ["wf:attribute", '[animation="result-text-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-text-4"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-text-5"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-text-6"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-icon-2"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[animation="result-icon-3"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 6.81,
                                ease: 11
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "0%"],
                                    y: ["0.5rem", "0.5rem"]
                                }
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-b9bd6e48",
                        deleted: !1,
                        actions: [{
                            id: "ta-037921e8",
                            targets: [
                                ["wf:class", ["padding-global.is-tiny.is-hero"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: 1,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-18vw"],
                                    height: [null, "0px"]
                                }
                            }
                        }, {
                            id: "ta-a594495f",
                            targets: [
                                ["wf:class", ["logo-letter"], {
                                    relationship: "within",
                                    filterBy: ["wf:trigger-only", ""],
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .7,
                                position: 0,
                                stagger: {
                                    each: .04,
                                    from: "random"
                                },
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-50%"]
                                }
                            }
                        }, {
                            id: "ta-d5bf0e33",
                            timing: {
                                duration: 1,
                                position: 0,
                                ease: 0
                            },
                            properties: {
                                "wf:variable": {
                                    variable: {
                                        "--border-radius--hero-padding": "var(--border-radius--hero-padding-neg)"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-06c6479d",
                        deleted: !1,
                        actions: [{
                            id: "ta-eaa14a54",
                            targets: [
                                ["wf:class", ["menu_logo-wr"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .6,
                                ease: 5
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "0%"]
                                }
                            }
                        }, {
                            id: "ta-ec26246d",
                            targets: [
                                ["wf:class", ["navbar_logo-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .6,
                                position: .1,
                                ease: 5
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-0d3fb09c",
                        deleted: !1,
                        actions: [{
                            id: "ta-9c0ab6c2",
                            targets: [
                                ["wf:class", ["scroll-top"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                ease: 8
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", null],
                                    scale: [.95, null],
                                    autoAlpha: ["0%", null]
                                }
                            }
                        }]
                    }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                })
            }
            Webflow.require("ix2").init({
                events: {
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-5",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "48090b36-5fd8-5a0a-bf37-08438b7acbf3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "48090b36-5fd8-5a0a-bf37-08438b7acbf3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-5-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 100
                        }],
                        createdOn: 0x19b94a9b670
                    },
                    "e-10": {
                        id: "e-10",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-11"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b94f3245f
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-10"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b94f3245f
                    },
                    "e-12": {
                        id: "e-12",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-13"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ec",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ec",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b9aab986e
                    },
                    "e-13": {
                        id: "e-13",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-12"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ec",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ec",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b9aab986e
                    },
                    "e-14": {
                        id: "e-14",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-5",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76f84333229e651e8ed|be5d3658-1b3d-f4d6-76e7-8fc2b9ab2c84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ed|be5d3658-1b3d-f4d6-76e7-8fc2b9ab2c84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-5-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 100
                        }],
                        createdOn: 0x19bbceaa9db
                    },
                    "e-15": {
                        id: "e-15",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ed",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ed",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbcfa4ee2
                    },
                    "e-16": {
                        id: "e-16",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-15"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ed",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ed",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbcfa4ee2
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbd007cff
                    },
                    "e-19": {
                        id: "e-19",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-18"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbd007cff
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-21"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbd209f11
                    },
                    "e-21": {
                        id: "e-21",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-20"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbd209f11
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-23"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe495cbe
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-22"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe495cbe
                    },
                    "e-24": {
                        id: "e-24",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-25"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe49895d
                    },
                    "e-25": {
                        id: "e-25",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe49895d
                    },
                    "e-26": {
                        id: "e-26",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-27"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe5efc98
                    },
                    "e-27": {
                        id: "e-27",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-26"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bbe5efc99
                    },
                    "e-28": {
                        id: "e-28",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-29"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc2dc8c69
                    },
                    "e-29": {
                        id: "e-29",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-28"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc2dc8c69
                    },
                    "e-30": {
                        id: "e-30",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc2eb1886
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-30"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc2eb1886
                    },
                    "e-32": {
                        id: "e-32",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-8",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-8-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-8-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x19bc2eb9156
                    },
                    "e-33": {
                        id: "e-33",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-34"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc35c597c
                    },
                    "e-34": {
                        id: "e-34",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-33"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc35c597c
                    },
                    "e-35": {
                        id: "e-35",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-36"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8eb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8eb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bdc039a6f
                    },
                    "e-36": {
                        id: "e-36",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-35"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8eb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8eb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bdc039a6f
                    },
                    "e-37": {
                        id: "e-37",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-38"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ea",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ea",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1736808
                    },
                    "e-38": {
                        id: "e-38",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-37"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8ea",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ea",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1736808
                    },
                    "e-39": {
                        id: "e-39",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-40"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1b67b9a
                    },
                    "e-40": {
                        id: "e-40",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-39"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1b67b9a
                    },
                    "e-41": {
                        id: "e-41",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-42"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1d8af79
                    },
                    "e-42": {
                        id: "e-42",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-41"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19be1d8af79
                    },
                    "e-43": {
                        id: "e-43",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-44"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c490552fa
                    },
                    "e-44": {
                        id: "e-44",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-43"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e4",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c490552fa
                    },
                    "e-45": {
                        id: "e-45",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-46"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8fa",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8fa",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c49057c0f
                    },
                    "e-46": {
                        id: "e-46",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-45"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8fa",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8fa",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c49057c0f
                    },
                    "e-47": {
                        id: "e-47",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-48"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e5",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e5",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c4905a88d
                    },
                    "e-48": {
                        id: "e-48",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-47"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e5",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e5",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c4905a88d
                    },
                    "e-49": {
                        id: "e-49",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-50"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c4905d271
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-49"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76f84333229e651e8e6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c4905d271
                    },
                    "e-51": {
                        id: "e-51",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-52"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: null,
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: null,
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1940597001e
                    },
                    "e-52": {
                        id: "e-52",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-10",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-51"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: null,
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: null,
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19405970020
                    },
                    "e-53": {
                        id: "e-53",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-10",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-61"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|311717c7-ee87-5ef5-87c9-eb43fdb2b547",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|311717c7-ee87-5ef5-87c9-eb43fdb2b547",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19405c9d4a8
                    },
                    "e-55": {
                        id: "e-55",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-11",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-56"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|311717c7-ee87-5ef5-87c9-eb43fdb2b598",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|311717c7-ee87-5ef5-87c9-eb43fdb2b598",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x194053e1479
                    },
                    "e-57": {
                        id: "e-57",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-58"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|410b71b7-2d87-70ed-0b4b-dcc0e38dd092",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|410b71b7-2d87-70ed-0b4b-dcc0e38dd092",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756fad378
                    },
                    "e-58": {
                        id: "e-58",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|410b71b7-2d87-70ed-0b4b-dcc0e38dd092",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|410b71b7-2d87-70ed-0b4b-dcc0e38dd092",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756fad378
                    },
                    "e-59": {
                        id: "e-59",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-443"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "4c18b827-b20c-1e1d-1997-95cc5621e944",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "4c18b827-b20c-1e1d-1997-95cc5621e944",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a76d30
                    },
                    "e-61": {
                        id: "e-61",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-62"
                            }
                        },
                        mediaQueries: ["main", "medium", "small"],
                        target: {
                            id: "bc9f34be-b268-1ee3-d18d-8fa2c3e02cb8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bc9f34be-b268-1ee3-d18d-8fa2c3e02cb8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975b83eeb6
                    },
                    "e-63": {
                        id: "e-63",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-377"
                            }
                        },
                        mediaQueries: ["main", "medium", "small"],
                        target: {
                            id: "bc9f34be-b268-1ee3-d18d-8fa2c3e02cb8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bc9f34be-b268-1ee3-d18d-8fa2c3e02cb8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a79813
                    },
                    "e-65": {
                        id: "e-65",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-66"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8aeddbc
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-68"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea47",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea47",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8af56a7
                    },
                    "e-69": {
                        id: "e-69",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea49",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|8387fa7c-2e53-5d11-29ed-14c117b6ea49",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8af7858
                    },
                    "e-71": {
                        id: "e-71",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-19",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-72"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|b136c98e-4115-e0b1-993d-7efe116e53ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|b136c98e-4115-e0b1-993d-7efe116e53ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c6d3f200
                    },
                    "e-72": {
                        id: "e-72",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-20",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-71"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|b136c98e-4115-e0b1-993d-7efe116e53ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|b136c98e-4115-e0b1-993d-7efe116e53ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c6d3f200
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-74"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19ed07e37c1
                    },
                    "e-74": {
                        id: "e-74",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19ed07e37c1
                    },
                    "e-75": {
                        id: "e-75",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-5",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76f84333229e651e8ed|6397e508-4982-6a6e-bd2c-805bf6984ff0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ed|6397e508-4982-6a6e-bd2c-805bf6984ff0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-5-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 100
                        }],
                        createdOn: 0x19fd72332e7
                    },
                    "e-76": {
                        id: "e-76",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-77"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76f84333229e651e8ec|4c4a1193-7f16-4d88-4380-383d311a41cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ec|4c4a1193-7f16-4d88-4380-383d311a41cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1a03fc85b0d
                    },
                    "e-78": {
                        id: "e-78",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-79"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76f84333229e651e8ec|c6cd5287-7122-b3b4-a009-5269806168ff",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8ec|c6cd5287-7122-b3b4-a009-5269806168ff",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1a04902548a
                    },
                    "e-80": {
                        id: "e-80",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-5",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69f9c76f84333229e651e8e9|5a6bb907-21be-a8ca-c040-2bdd6e466b72",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9|5a6bb907-21be-a8ca-c040-2bdd6e466b72",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-5-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 100
                        }],
                        createdOn: 0x1a05516f7ba
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-82"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76f84333229e651e8e9|5a6bb907-21be-a8ca-c040-2bdd6e466bb6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9|5a6bb907-21be-a8ca-c040-2bdd6e466bb6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1a05516f7ba
                    },
                    "e-83": {
                        id: "e-83",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76f84333229e651e8e9|222b5c5e-a37b-d382-0c34-f2bc9db9c7a0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9|222b5c5e-a37b-d382-0c34-f2bc9db9c7a0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1a0554569f9
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-86"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "69f9c76f84333229e651e8e9|579392a9-462e-bdb9-b056-d15061233e10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69f9c76f84333229e651e8e9|579392a9-462e-bdb9-b056-d15061233e10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1a05545cfd4
                    }
                },
                actionLists: {
                    "a-5": {
                        id: "a-5",
                        title: "Works item scale",
                        continuousParameterGroups: [{
                            id: "a-5-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-5-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".works_card-wrap",
                                            selectorGuids: ["4b1f54e2-b6e2-8cdb-99eb-5c31d2086639"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-5-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".works_image",
                                            selectorGuids: ["3de68688-33f3-3bae-aa4e-c0c332314c8b"]
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-5-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".works_card-wrap",
                                            selectorGuids: ["4b1f54e2-b6e2-8cdb-99eb-5c31d2086639"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-5-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".works_image",
                                            selectorGuids: ["3de68688-33f3-3bae-aa4e-c0c332314c8b"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19b94a9e9bf
                    },
                    "a-6": {
                        id: "a-6",
                        title: "Navbar move in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-6-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 750,
                                    target: {
                                        selector: ".navbar_content",
                                        selectorGuids: ["95cb6ab2-5b11-325a-260a-7da704503595"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".navbar_bg",
                                        selectorGuids: ["d848584d-ca00-4e62-9c45-82bbfe5703c0"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19b94f34218
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Navbar move out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-7-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".navbar_content",
                                        selectorGuids: ["95cb6ab2-5b11-325a-260a-7da704503595"]
                                    },
                                    yValue: -150,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-7-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".navbar_bg",
                                        selectorGuids: ["d848584d-ca00-4e62-9c45-82bbfe5703c0"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19b94f34218
                    },
                    "a-8": {
                        id: "a-8",
                        title: "(CONTACT 2) Images floating",
                        continuousParameterGroups: [{
                            id: "a-8-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-8-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-1",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef84"]
                                        },
                                        xValue: -1,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-2",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef91"]
                                        },
                                        xValue: -.5,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-3",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef90"]
                                        },
                                        xValue: -2,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-8-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-1",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef84"]
                                        },
                                        xValue: 1,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-2",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef91"]
                                        },
                                        xValue: .5,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-3",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef90"]
                                        },
                                        xValue: 2,
                                        xUnit: "rem",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-8-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-8-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-1",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef84"]
                                        },
                                        xValue: null,
                                        yValue: -1,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-2",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef91"]
                                        },
                                        xValue: null,
                                        yValue: -.5,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-3",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef90"]
                                        },
                                        xValue: null,
                                        yValue: -2,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-8-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-1",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef84"]
                                        },
                                        xValue: null,
                                        yValue: 1,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-2",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef91"]
                                        },
                                        xValue: null,
                                        yValue: .5,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".contact_image-3",
                                            selectorGuids: ["a7d8bda0-b029-992c-9814-10ebc232ef90"]
                                        },
                                        xValue: null,
                                        yValue: 2,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18e1ae84e78
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Template tooltip in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-9-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    yValue: -.25,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-9-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 150,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.006, .65, .355, 1],
                                    duration: 300,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19405338cc1
                    },
                    "a-10": {
                        id: "a-10",
                        title: "Template tooltip out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-10-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 150,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-10-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inCubic",
                                    duration: 300,
                                    target: {},
                                    yValue: -.5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-10-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "block"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19405338cc1
                    },
                    "a-11": {
                        id: "a-11",
                        title: "Template bar close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-11-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-11-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x194053e35cd
                    },
                    "a-12": {
                        id: "a-12",
                        title: "HOME - Contact Mark hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-12-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-12-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-12-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-12-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-12-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-12-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-12-n-7",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-12-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-12-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-12-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19756fae02d
                    },
                    "a-13": {
                        id: "a-13",
                        title: "HOME - Contact Mark hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-13-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-13-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adf5"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-13-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-13-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-13-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "69f9c76e84333229e651e8e2|a96d740f-f85f-e497-72dd-2fb75780adfa"
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19756fae02d
                    },
                    "a-14": {
                        id: "a-14",
                        title: "Fade in 0.3s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-14-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-14-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-15": {
                        id: "a-15",
                        title: "HOME - Chat animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870de"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e4"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e8"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e0"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e7"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-7",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d9", "e7910daf-3dad-38d8-fd1d-19980cd870e2"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d6", "e7910daf-3dad-38d8-fd1d-19980cd870e5"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-15-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e1"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-10",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870de"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-11",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e4"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-13",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e1"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-14",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d9", "e7910daf-3dad-38d8-fd1d-19980cd870e2"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-15",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d6", "e7910daf-3dad-38d8-fd1d-19980cd870e5"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-15-n-16",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e8"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-17",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e7"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-18",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e0"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-19",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870de"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-20",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e1"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-21",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d6", "e7910daf-3dad-38d8-fd1d-19980cd870e5"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-15-n-22",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d9", "e7910daf-3dad-38d8-fd1d-19980cd870e2"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-23",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e7"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-24",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e0"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-25",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870db", "e7910daf-3dad-38d8-fd1d-19980cd870e8"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-26",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {},
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-15-n-27",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["e7910daf-3dad-38d8-fd1d-19980cd870d4", "e7910daf-3dad-38d8-fd1d-19980cd870e4"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975b83fa8e
                    },
                    "a-16": {
                        id: "a-16",
                        title: "Fade in 0.4s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-16-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-16-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-16-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 400,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-16-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 400,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Fade in 0s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-17-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Fade in 0.1s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-18-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "69ec427173200202282e2768|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-19": {
                        id: "a-19",
                        title: "Blog item hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-19-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-19-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {},
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c6d40c55
                    },
                    "a-20": {
                        id: "a-20",
                        title: "Blog item hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-20-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 750,
                                    target: {},
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197c6d40c55
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e()
            })
        }
    }
]);