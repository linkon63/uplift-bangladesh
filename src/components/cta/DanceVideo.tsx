"use client";

import React, { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";

const DANCES = [
  "cosmonaut-dance_Silly-Dance-2",
  "cosmonaut-dance_Silly-Dance",
  "cosmonaut-dance_Rumba",
  "cosmonaut-dance_Chicken-Dance",
] as const;

let clientDanceIndex: number | null = null;
function getClientDanceSnapshot(): number {
  if (clientDanceIndex === null) {
    clientDanceIndex = Math.floor(Math.random() * DANCES.length);
  }
  return clientDanceIndex;
}
function getServerDanceSnapshot(): number {
  return 0;
}
function subscribeDanceStore(): () => void {
  return () => {};
}

export function DanceVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const danceIndex = useSyncExternalStore(
    subscribeDanceStore,
    getClientDanceSnapshot,
    getServerDanceSnapshot
  );
  const danceName = DANCES[danceIndex];
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // IntersectionObserver for auto play/pause when in view
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [danceName]);

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

  const videoBase = `https://video.cosmos.studio/${danceName}`;

  return (
    <div
      ref={containerRef}
      data-video={isPlaying ? "playing" : "paused"}
      className="dance"
    >
      <video
        ref={videoRef}
        key={danceName}
        muted
        loop
        playsInline
        autoPlay
        aria-hidden="true"
        className="dance-vid"
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={`${videoBase}.webm`} type="video/webm" />
        <source src={`${videoBase}.mov`} type="video/quicktime" />
      </video>

      <div className="custom-play">
        <button
          className="play-pause"
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          aria-pressed={!isPlaying}
          onClick={togglePlay}
        >
          {/* Pause Icon (visible when playing) */}
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

          {/* Play Icon (visible when paused) */}
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
