import * as React from "react";

export const CallIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2010/svg"
    width="2em"
    height="2em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#67C15E"
      fillRule="evenodd"
      d="M14.996 0C6.726 0 0 6.728 0 15a14.89 14.89 0 0 0 2.856 8.792L.987 29.365l5.766-1.843A14.88 14.88 0 0 0 15.004 30C23.274 30 30 23.271 30 15S23.274 0 15.004 0h-.008Zm-4.188 7.62c-.29-.697-.511-.724-.952-.742a8.47 8.47 0 0 0-.502-.017c-.574 0-1.173.167-1.535.538-.44.45-1.533 1.499-1.533 3.65 0 2.152 1.569 4.233 1.78 4.524.22.291 3.06 4.77 7.467 6.597 3.447 1.428 4.47 1.296 5.255 1.128 1.145-.247 2.583-1.093 2.944-2.116.362-1.023.362-1.896.256-2.081-.106-.186-.397-.291-.838-.512-.44-.22-2.583-1.279-2.988-1.42-.397-.15-.776-.096-1.076.327-.423.59-.837 1.19-1.172 1.552-.265.282-.697.317-1.058.167-.485-.202-1.843-.679-3.518-2.17-1.296-1.154-2.177-2.591-2.433-3.024-.256-.44-.026-.696.176-.934.22-.274.432-.468.653-.723.22-.256.343-.388.485-.688.15-.291.043-.591-.062-.812-.106-.22-.988-2.372-1.349-3.245Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Gmail = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2010/svg"
    width="2.2em"
    height="2em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#4285F4"
      d="M6.833 26.667V12.62L0 6.388v17.311c0 1.978.833 2.968 2.5 2.968"
    />
    <path
      fill="#EA4335"
      d="m6.5 12.521 8.5 7.617 8.5-7.617V2.827L15 10.444 6.5 2.827"
    />
    <path
      fill="#34A853"
      d="M23.166 26.667V12.62L30 6.388v17.311c0 1.978-.834 2.968-2.5 2.968"
    />
    <path
      fill="#C5221F"
      d="m0 6.586 6.833 6.232V3.124L4.333.848C2.083-1.229 0 .848 0 3.42"
    />
    <path
      fill="#FBBC04"
      d="m30 6.586-6.834 6.232V3.124l2.5-2.276C27.916-1.229 30 .848 30 3.42"
    />
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#000"

      d="M15 0c8.285 0 15 6.885 15 15.38 0 6.793-4.293 12.556-10.25 14.591-.76.152-1.03-.328-1.03-.738 0-.507.018-2.163.018-4.22 0-1.435-.48-2.37-1.018-2.848 3.34-.38 6.85-1.681 6.85-7.588 0-1.68-.582-3.051-1.545-4.128.156-.389.67-1.953-.147-4.071 0 0-1.257-.412-4.12 1.577A14.094 14.094 0 0 0 15 7.437a14.063 14.063 0 0 0-3.755.518C8.38 5.965 7.12 6.378 7.12 6.378c-.814 2.118-.3 3.682-.146 4.07-.958 1.078-1.545 2.449-1.545 4.129 0 5.892 3.503 7.212 6.834 7.6-.428.385-.817 1.062-.952 2.057-.855.393-3.027 1.073-4.365-1.278 0 0-.793-1.477-2.3-1.585 0 0-1.462-.02-.101.934 0 0 .982.473 1.665 2.25 0 0 .88 2.745 5.053 1.815.008 1.286.021 2.497.021 2.863 0 .407-.276.882-1.024.74C4.296 27.94 0 22.174 0 15.379 0 6.885 6.717 0 15 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#0A66C2"
      d="M25.563 25.563h-4.445V18.6c0-1.66-.03-3.798-2.313-3.798-2.315 0-2.67 1.81-2.67 3.675v7.085H11.69V11.245h4.268v1.958h.06a4.687 4.687 0 0 1 4.21-2.313c4.505 0 5.337 2.962 5.337 6.82l-.003 7.85v.003ZM6.674 9.288a2.593 2.593 0 0 1-2.58-2.578 2.593 2.593 0 0 1 2.58-2.58 2.594 2.594 0 0 1 2.58 2.58 2.59 2.59 0 0 1-2.58 2.578Zm2.223 16.274h-4.45V11.245h4.45v14.318ZM27.774 0H2.212A2.2 2.2 0 0 0 0 2.165v25.67A2.2 2.2 0 0 0 2.212 30h25.566A2.205 2.205 0 0 0 30 27.835V2.163a2.2 2.2 0 0 0-2.223-2.16L27.776 0Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);
