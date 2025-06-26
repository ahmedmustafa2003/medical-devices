export const Waves = () => (
  <>
    <div className="hero relative w-full z-10 pointer-events-none">
      {/* Waves section */}
      <svg
        className="hero-waves w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18
               58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="-5" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="-8" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="0" />
        </g>
      </svg>

      {/* Content section */}
    </div>

    <style>
      {`
        .hero {
          height: auto;
        }
        
        .hero-waves {
          display: block;
          width: 100%;
          height: 50px;
        }

        .hero .wave1 use {
          animation: move-forever1 10s linear infinite;
          animation-delay: -2s;
          fill: rgb(214, 214, 214);
          opacity: 0.6;
        }

        .hero .wave2 use {
          animation: move-forever2 8s linear infinite;
          animation-delay: -2s;
          fill: rgb(104, 107, 107);
          opacity: 0.4;
        }

        .hero .wave3 use {
          animation: move-forever3 6s linear infinite;
          animation-delay: -2s;
          fill: rgb(255, 255, 255);
        }

        @keyframes move-forever1 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }

        @keyframes move-forever2 {
          0% {
            transform: translate(-90px, 0%);
          }
          100% {
            transform: translate(85px, 0%);
          }
        }

        @keyframes move-forever3 {
          0% {
            transform: translate(-90px, 0%);
          }
          100% {
            transform: translate(85px, 0%);
          }
        }
      `}
    </style>
  </>
);
