"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface VideoPlayerProps {
  id?: string;
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  containerClassName?: string;
  videoClassName?: string;
  dataVideoPrefix?: string;
  lazyLoadMargin?: string;
  children?: React.ReactNode;
}

export function VideoPlayer({
  id,
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  containerClassName = "",
  videoClassName = "",
  dataVideoPrefix = "",
  lazyLoadMargin,
  children,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(!lazyLoadMargin);

  // Ensure DOM muted property is set for reliable autoplay in all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  // Attempt playback on load / mount if autoPlay is enabled
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented (e.g., waiting for interaction or visibility)
        });
      }
    }
  }, [isLoaded, autoPlay]);

  // IntersectionObserver to auto-play when in viewport and pause when out of viewport
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const video = videoRef.current;
        if (!video) return;

        const entry = entries[0];
        if (entry?.isIntersecting) {
          if (lazyLoadMargin && !isLoaded) {
            setIsLoaded(true);
          }
          if (autoPlay) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.05, rootMargin: lazyLoadMargin || "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [autoPlay, isLoaded, lazyLoadMargin]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      data-video={dataVideoPrefix ? (isPlaying ? "hero" : "paused") : isPlaying ? "playing" : "paused"}
      className={containerClassName}
    >
      <video
        ref={videoRef}
        muted={muted}
        loop={loop}
        playsInline
        autoPlay={autoPlay}
        poster={poster}
        preload={lazyLoadMargin ? "none" : "metadata"}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className={videoClassName}
      >
        {isLoaded && <source src={src} type="video/mp4" />}
      </video>

      {children}

      <div className="custom-play">
        <button
          className="play-pause"
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          aria-pressed={!isPlaying}
          onClick={togglePlay}
        >
          <span
            data-state="play"
            className="video-button"
            style={{ display: isPlaying ? "flex" : "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="player-icon pause"
            >
              <path
                d="M5 15.3333V4.66663C5 4.39048 5.22386 4.16663 5.5 4.16663H7.83333C8.10947 4.16663 8.33333 4.39048 8.33333 4.66663V15.3333C8.33333 15.6095 8.10947 15.8333 7.83333 15.8333H5.5C5.22386 15.8333 5 15.6095 5 15.3333Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11.6667 15.3333V4.66663C11.6667 4.39048 11.8906 4.16663 12.1667 4.16663H14.5001C14.7762 4.16663 15.0001 4.39048 15.0001 4.66663V15.3333C15.0001 15.6095 14.7762 15.8333 14.5001 15.8333H12.1667C11.8906 15.8333 11.6667 15.6095 11.6667 15.3333Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>

          <span
            data-state="pause"
            className="video-button"
            style={{ display: isPlaying ? "none" : "flex" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="player-icon play"
            >
              <path
                d="M7.80982 4.10849C7.48193 3.84963 7 4.08318 7 4.50093V14.9374C7 15.3552 7.48193 15.5887 7.80982 15.3298L14.4196 10.1116C14.6732 9.91141 14.6732 9.52691 14.4196 9.32674L7.80982 4.10849Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
