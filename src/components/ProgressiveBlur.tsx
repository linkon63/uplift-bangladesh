import React from "react";

export default function ProgressiveBlur() {
  return (
    <>
      <div
        aria-hidden="true"
        className="progressive-blur_wrap pointer-events-none fixed inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/20 to-transparent z-30"
      >
        <div className="progressive-blur_panel is-1"></div>
        <div className="progressive-blur_panel is-2"></div>
        <div className="progressive-blur_panel is-3"></div>
        <div className="progressive-blur_panel is-4"></div>
        <div className="progressive-blur_panel is-5"></div>
        <div className="progressive-blur_panel is-6"></div>
        <div className="progressive-blur_panel is-7"></div>
        <div className="progressive-blur_panel is-8"></div>
        <div className="progressive-blur_panel is-9"></div>
        <div className="progressive-blur_panel is-10"></div>
      </div>
      <a
        href="#main"
        className="scroll-top w-inline-block sr-only focus:not-sr-only focus:fixed focus:bottom-6 focus:right-6 focus:z-50 focus:bg-white focus:text-[#0f1011] focus:p-3 focus:rounded-full focus:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="arrow-icon w-5 h-5"
        >
          <path
            d="M4.61719 8.82324C4.6172 8.79976 4.62698 8.77732 4.64356 8.76074L9.9375 3.4668L9.9668 3.44727C9.97767 3.44292 9.98899 3.44043 10 3.44043C10.0111 3.44045 10.0223 3.44287 10.0332 3.44727L10.0625 3.44727L15.3564 8.76074C15.373 8.77734 15.3828 8.79975 15.3828 8.82324C15.3828 8.84674 15.373 8.86914 15.3564 8.88574C15.3399 8.90227 15.3175 8.91211 15.2939 8.91211C15.2705 8.91211 15.248 8.9023 15.2314 8.88574L10.0879 3.74219L10.0879 16.4707C10.0878 16.494 10.0789 16.5168 10.0625 16.5332C10.046 16.5497 10.0233 16.5586 10 16.5586C9.97673 16.5586 9.95403 16.5496 9.9375 16.5332C9.92105 16.5168 9.9122 16.494 9.91211 16.4707L9.91211 3.74219L9.05762 4.5957L4.76856 8.88574C4.75201 8.90228 4.72943 8.91203 4.70606 8.91211C4.68263 8.91211 4.66015 8.90227 4.64356 8.88574C4.62696 8.86915 4.61719 8.84675 4.61719 8.82324Z"
            fill="currentColor"
            stroke="currentColor"
          ></path>
        </svg>
        <span className="sr-only">Back to top</span>
      </a>
    </>
  );
}
