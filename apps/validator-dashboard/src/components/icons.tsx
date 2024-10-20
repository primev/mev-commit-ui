import { Command, Moon, SunMedium } from "lucide-react"

import { cn } from "@/lib/utils"

export type IconKeys =
  | "logo"
  | "sun"
  | "moon"
  | "primev"
  | "eth"
  | "obol"
  | "eigenlayer"
  | "symbiotic"
  | "mellow"

type IconsType = {
  [key in IconKeys]: React.ElementType
}

type IconProps = React.HTMLAttributes<SVGElement>

// @ts-ignore
const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  primev: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 559 96"
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        d="M66.7851 8.91693C60.9351 3.21693 52.8751 0.366943 42.5951 0.366943H0.875122V94.7569H23.3651V63.5269H42.5951C52.8751 63.5269 60.9351 60.707 66.7851 55.067C72.6251 49.417 75.5551 41.7369 75.5551 32.0269C75.5551 22.3169 72.6251 14.6069 66.7851 8.91693ZM40.1951 43.9569H23.3651V19.9469H40.1951C48.3951 19.9469 52.5051 23.9669 52.5051 32.0169C52.5051 40.0669 48.3951 43.9569 40.1951 43.9569Z"
        fill="white"
      />
      <path
        d="M155.195 59.0869C161.215 57.0569 165.745 53.5869 168.765 48.6769C171.785 43.7769 173.295 38.0369 173.295 31.4669C173.295 21.847 170.375 14.2569 164.525 8.70694C158.685 3.15694 150.625 0.366943 140.345 0.366943H98.6251V94.7569H121.115V62.6969H131.715L150.525 94.7569H176.695L155.195 59.0869ZM137.655 43.127H121.105V19.9469H137.935C146.135 19.9469 150.225 23.7769 150.225 31.4669C150.225 39.1569 146.035 43.127 137.645 43.127H137.655Z"
        fill="white"
      />
      <path
        d="M198.465 0.366943V94.7569H220.955V0.366943H198.465Z"
        fill="white"
      />
      <path
        d="M316.985 0.366943L297.755 58.1069H297.475L276.685 0.366943H246.835V94.7569H268.765V39.7869H269.045L288.145 94.7569H304.415L324.205 39.7869H324.485V94.7569H346.985V0.366943H316.995H316.985Z"
        fill="white"
      />
      <path
        d="M437.355 0.0668945H371.055V20.8469H437.355V0.0668945Z"
        fill="white"
      />
      <path
        d="M437.355 37.1768H371.055V57.9568H437.355V37.1768Z"
        fill="white"
      />
      <path
        d="M437.355 74.2769H371.055V95.0569H437.355V74.2769Z"
        fill="white"
      />
      <path
        d="M461.095 0.366943L497.465 94.7569H520.715L486.825 0.366943H461.095Z"
        fill="#FBFDFC"
      />
      <path
        d="M533.575 0.366943L513.295 56.7169H537.045L558.565 0.366943H533.575Z"
        fill="#E97D25"
      />
    </svg>
  ),
  primevIcon: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 98 95"
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        d="M0.344727 0.226562L36.7147 94.6165H59.9647L26.0747 0.226562H0.344727Z"
        fill="black"
      />
      <path
        d="M72.8246 0.226562L52.5447 56.5766H76.2947L97.8146 0.226562H72.8246Z"
        fill="#E97D25"
      />
    </svg>
  ),
  eth: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      {...props}
    >
      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
    </svg>
  ),
  obol: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 310 74"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M177.046 63.9525C171.712 63.9525 167.053 62.8017 163.068 60.5002C159.106 58.2268 155.862 54.9148 153.697 50.9331C151.438 46.8552 150.309 42.1395 150.309 36.7861C150.309 31.4326 151.438 26.7176 153.697 22.641C155.861 18.6598 159.102 15.3475 163.062 13.0719C167.048 10.7717 171.708 9.62092 177.04 9.61963C182.321 9.61963 186.968 10.7704 190.981 13.0719C194.953 15.3335 198.199 18.6493 200.35 22.641C202.584 26.7189 203.702 31.4339 203.703 36.7861C203.704 42.1383 202.586 46.8539 200.35 50.9331C198.199 54.9246 194.953 58.2399 190.981 60.5002C186.974 62.8017 182.329 63.9525 177.046 63.9525ZM177.046 55.3218C182.123 55.3218 186.174 53.6709 189.198 50.3693C192.221 47.0676 193.732 42.5399 193.731 36.7861C193.731 31.0336 192.22 26.5058 189.198 23.2029C186.175 19.8999 182.125 18.2491 177.046 18.2504C171.968 18.2504 167.906 19.9012 164.857 23.2029C161.809 26.5045 160.285 31.0323 160.287 36.7861C160.287 42.5399 161.81 47.0676 164.857 50.3693C167.904 53.6709 171.967 55.3218 177.046 55.3218Z" />
      <path d="M232.326 63.9524C229.483 63.9524 226.994 63.4272 224.86 62.3768C222.775 61.3666 220.99 59.8413 219.68 57.9495L218.614 63.0526H209.93V9.01904H219.68V31.1577C220.998 29.418 222.64 27.9411 224.517 26.8056C226.524 25.5545 229.127 24.9289 232.326 24.9289C235.881 24.9289 239.056 25.7797 241.849 27.4814C244.646 29.1882 246.933 31.5963 248.476 34.4594C250.1 37.4109 250.912 40.7628 250.914 44.515C250.915 48.2672 250.102 51.6068 248.476 54.5339C246.932 57.3761 244.645 59.76 241.851 61.4385C239.055 63.1144 235.88 63.9524 232.326 63.9524ZM230.27 55.5476C233.367 55.5476 235.931 54.5217 237.965 52.4699C239.998 50.4181 241.013 47.7665 241.01 44.515C241.01 41.2635 239.995 38.5874 237.965 36.4867C235.934 34.386 233.369 33.335 230.27 33.3337C227.12 33.3337 224.542 34.3718 222.538 36.4481C220.534 38.5243 219.531 41.1888 219.529 44.4416C219.529 47.6931 220.532 50.357 222.538 52.4332C224.544 54.5095 227.121 55.5476 230.27 55.5476Z" />
      <path d="M274.947 63.9525C271.288 63.9525 268 63.1267 265.083 61.4752C262.184 59.8464 259.788 57.4735 258.15 54.6093C256.452 51.6822 255.603 48.293 255.603 44.4417C255.603 40.5904 256.466 37.2005 258.192 34.2721C259.852 31.4114 262.259 29.0407 265.163 27.4062C268.083 25.7547 271.371 24.929 275.027 24.929C278.634 24.929 281.9 25.7547 284.827 27.4062C287.725 29.0363 290.12 31.4089 291.759 34.2721C293.458 37.1992 294.307 40.5891 294.307 44.4417C294.307 48.2943 293.458 51.6835 291.759 54.6093C290.11 57.4823 287.694 59.8564 284.774 61.4752C281.829 63.128 278.553 63.9538 274.947 63.9525ZM274.947 55.623C277.487 55.623 279.697 54.6846 281.576 52.8079C283.454 50.9311 284.394 48.1424 284.394 44.4417C284.394 40.7384 283.454 37.949 281.576 36.0736C279.697 34.1981 277.513 33.2598 275.023 33.2585C272.434 33.2585 270.212 34.1968 268.36 36.0736C266.507 37.9503 265.581 40.7397 265.581 44.4417C265.581 48.1437 266.507 50.9324 268.36 52.8079C270.212 54.6833 272.408 55.6217 274.947 55.623Z" />
      <path d="M300.257 63.0526V9.01904H310.008V63.0526H300.257Z" />
      <path
        d="M93.5044 74.0008C84.1732 74.0008 74.6479 70.5138 65.0854 63.5745C57.9081 58.3768 52.093 53.6965 46.96 49.5665L46.4837 49.1803L43.7555 51.7097C35.6276 59.2398 29.0266 63.9066 21.2339 63.9066C9.92117 63.9104 0 54.8009 0 44.4093C0 33.4038 10.6718 24.8503 19.8541 24.8503C29.4578 24.8503 36.8193 29.2332 45.9761 36.2961C58.8097 24.439 71.5649 12.9508 81.2254 6.62541C93.6259 -1.49361 112.69 -3.50165 125.128 8.36314C139.239 21.8228 134.04 47.7342 124.416 58.9657C120.824 63.1574 113.082 70.5717 101.585 73.1069C98.9333 73.6975 96.2232 73.9973 93.5044 74.0008ZM53.7394 42.4669C58.649 46.4174 64.2034 50.8679 70.9338 55.7451C79.5713 62.0028 87.1758 64.2541 93.6416 64.2541C105.233 64.2541 113.164 57.0233 116.873 52.6963C127.272 40.5612 124.883 21.6799 118.26 15.3604C108.547 6.09251 94.061 9.90585 86.6936 14.729C77.9053 20.4828 65.9243 31.2219 53.7394 42.4669ZM19.8541 34.5815C15.456 34.5815 9.87609 39.2155 9.87609 44.4113C9.87609 49.4314 15.3953 54.1869 21.23 54.1869C25.1498 54.1869 29.5636 51.507 36.9839 44.6314L38.6949 43.0462C31.5784 37.6631 26.1141 34.5815 19.8541 34.5815Z"
        // fill="#2FE4AB"
      />
      <path
        opacity="0.92"
        d="M36.9836 44.6309C29.5633 51.5065 25.1456 54.1865 21.2296 54.1865C20.266 54.1834 19.3068 54.0575 18.376 53.8119V63.7169C19.3216 63.8455 20.2751 63.91 21.2296 63.91C29.0223 63.91 35.6234 59.2432 43.7512 51.7131L46.4794 49.1838L38.6946 43.04L36.9836 44.6309Z"
        // fill="url(#paint0_linear_2193_5)"
      />
      <g opacity="0.92">
        <path
          opacity="0.92"
          d="M45.9766 36.2995L53.7398 42.4684C59.2629 37.3692 64.7449 32.3781 69.9073 27.9044L62.9143 21.0095C57.4618 25.7438 51.729 30.9821 45.9766 36.2995Z"
          // fill="url(#paint1_linear_2193_5)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2193_5"
          x1="40.0783"
          y1="43.9648"
          x2="24.6876"
          y2="59.5857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0F7C76" />
          <stop offset="1" stop-color="#2FE4AB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2193_5"
          x1="50.2767"
          y1="39.6533"
          x2="65.4626"
          y2="24.2363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0F7C76" />
          <stop offset="1" stop-color="#2FE4AB" />
        </linearGradient>
      </defs>
    </svg>
  ),
  eigenlayer: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      fill="#1A0C6D"
      viewBox="0 0 490 207"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2193_17)">
        <path d="M50.955 103.887L50.955 3.88696L0.955017 3.88696L0.955017 103.887H50.955Z" />
        <path d="M50.955 203.887L50.955 103.887H0.955017L0.955017 203.887H50.955Z" />
        <path d="M150.955 103.887V53.887H125.955V103.887H150.955Z" />
        <path d="M75.955 203.887V153.887H50.955V203.887H75.955Z" />
        <path d="M125.955 203.887V153.887H100.955V203.887H125.955Z" />
        <path d="M150.955 203.887V153.887H125.955V203.887H150.955Z" />
        <path d="M175.955 128.887V78.887H150.955V128.887H175.955Z" />
        <path d="M101.955 28.887V3.88696L76.955 3.88696V28.887H101.955Z" />
        <path d="M125.955 103.887V3.88696L100.955 3.88696V103.887H125.955Z" />
        <path d="M100.955 203.887V103.887H75.955V203.887H100.955Z" />
        <path d="M226.36 100.13L225.955 96.7399C231.384 94.5749 232.336 91.5899 232.741 85.6189C233.146 81.1469 233.146 75.1769 233.146 70.4309V34.3789C233.146 29.6339 233.146 23.6629 232.741 19.1909C232.336 13.2209 231.384 10.2459 225.955 8.06992L226.36 4.68091C231.657 5.08491 235.313 5.08492 238.706 5.08492H263.671C269.23 5.08492 273.444 5.08491 278.73 4.68091C279.683 11.5909 280.219 16.6099 280.635 24.0679L276.695 24.7459C274.933 19.7269 273.433 16.8839 271.397 14.7079C269.362 12.5319 266.243 11.4489 263.66 11.0449C260.267 10.4979 257.279 10.3669 251.993 10.3669C245.612 10.3669 244.802 11.4489 244.397 16.8729C243.992 21.0719 243.992 25.9599 243.992 30.8359V48.1899C248.611 48.1899 258.111 47.9159 262.445 47.5119C268.552 46.8339 270.456 44.6689 272.492 38.4249L275.753 39.1029C275.348 44.3949 275.348 47.3699 275.348 50.7589C275.348 54.1489 275.348 57.2659 275.753 62.5579L272.492 63.2359C270.456 57.0029 268.552 54.9689 262.445 54.1489C258.1 53.6019 248.468 53.4709 243.992 53.4709V71.7759C243.992 76.5219 244.266 83.8479 244.397 86.5599C244.671 93.2079 246.98 94.4219 253.087 94.4219C259.194 94.4219 263.813 94.2899 267.468 93.7439C272.218 93.0659 274.385 91.1629 276.421 88.3199C278.052 85.7399 279.409 82.8969 281.171 77.8769L284.838 78.5549C284.159 86.6909 283.075 93.3389 281.576 100.381C271.671 99.8339 259.325 99.7029 241.945 99.7029C235.291 99.7029 231.635 99.7029 226.338 100.108L226.36 100.13Z" />
        <path d="M300.723 57.693C302.627 52.542 303.032 49.962 303.032 48.606C303.032 47.797 302.627 47.381 301.948 47.381C300.591 47.381 297.877 49.546 291.638 56.872L289.056 54.565C296.793 43.313 302.353 38.163 306.83 38.163C309.675 38.163 312.258 40.744 312.258 44.811C312.258 49.153 310.091 55.112 308.056 60.678L299.234 85.62C297.746 89.687 297.472 90.77 297.472 91.317C297.472 91.995 298.019 92.673 298.829 92.673C300.318 92.673 303.032 91.186 309.686 81.694L312.401 83.597C305.21 97.56 298.96 101.355 294.21 101.355C291.091 101.355 288.377 98.643 288.377 95.122C288.377 92.006 289.329 89.02 292.58 80.207L300.723 57.704V57.693ZM311.175 0.886963C315.246 0.886963 318.365 4.00297 318.365 8.07097C318.365 12.139 315.246 15.255 311.175 15.255C307.103 15.255 303.984 12.139 303.984 8.07097C303.984 4.00297 307.103 0.886963 311.175 0.886963Z" />
        <path d="M363.016 14.0921C366.278 17.7551 367.493 22.3591 367.493 27.3781C367.493 40.6631 357.719 50.1551 345.779 50.1551C339.671 50.1551 335.195 48.3941 331.255 45.1361C327.052 48.3941 326.1 51.5111 326.1 54.6271C326.1 58.5631 329.219 61.1331 335.326 61.4061L351.743 61.9531C364.91 62.3581 371.28 70.2201 371.28 80.3891C371.28 92.5921 359.197 103.297 340.339 103.297C325.005 103.297 317.268 96.5181 317.268 87.3001C317.268 80.9251 320.387 75.9061 328.125 70.6241C322.291 68.5911 318.351 64.1181 318.351 57.7431C318.351 52.4511 320.792 47.0271 327.72 41.7461C324.601 37.5471 323.101 33.2061 323.101 27.3781C323.101 14.6281 333.28 4.60107 345.22 4.60107C353.09 4.60107 355.125 7.31308 362.863 7.31308C366.256 7.31308 371.006 7.18108 375.756 6.76608L376.84 9.07307L375.756 14.0921H362.995H363.016ZM349.314 72.2541C343.207 72.2541 338.325 72.2541 332.754 71.8491C328.004 76.3211 326.1 80.7941 326.1 85.0031C326.1 90.8321 331.124 95.7191 342.517 95.7191C358.124 95.7191 363.826 89.0711 363.826 82.7071C363.826 76.3431 359.481 72.2651 349.303 72.2651L349.314 72.2541ZM333.575 26.5581C333.575 38.4871 338.194 44.7311 345.789 44.7311C352.849 44.7311 357.194 39.9851 357.194 28.0561C357.194 16.8041 352.444 10.0241 344.98 10.0241C338.325 10.0241 333.575 15.1751 333.575 26.5681V26.5581Z" />
        <path d="M403.03 39.363C416.054 39.363 425.97 48.986 425.97 62.009C425.97 63.092 425.97 64.043 425.697 65.126H383.899C383.625 66.755 383.625 68.242 383.625 70.276C383.625 84.239 392.042 93.731 402.899 93.731C411.589 93.731 416.875 90.746 422.435 82.752L425.697 84.786C421.625 94.955 413.614 103.364 401.542 103.364C384.578 103.364 373.315 88.996 373.315 72.452C373.315 53.6 386.208 39.374 403.03 39.374V39.363ZM414.019 59.702C413.887 50.484 407.638 45.465 400.042 45.465C391.768 45.465 386.471 51.698 384.84 59.702H414.019Z" />
        <path d="M482.283 101.041C482.283 105.24 482.283 109.985 482.556 114.195C482.961 119.75 483.782 121.926 488.795 123.96L488.39 127.076C483.64 126.672 480.652 126.672 477.533 126.672C474.413 126.672 471.426 126.672 466.676 127.076L466.271 123.96C471.294 121.926 471.973 119.761 472.378 114.195C472.783 109.996 472.783 105.251 472.783 101.041V86.6729C472.783 79.0839 468.164 73.9229 460.973 73.9229C451.605 73.9229 445.771 80.2979 445.771 88.9689V101.041C445.771 105.24 445.771 109.985 446.045 114.195C446.45 119.75 447.271 121.926 452.283 123.96L451.878 127.076C447.128 126.672 444.14 126.672 441.021 126.672C437.902 126.672 434.914 126.672 430.164 127.076L429.759 123.96C434.783 121.926 435.461 119.761 435.866 114.195C436.271 109.996 436.271 105.251 436.271 101.041V97.6509C436.271 93.4519 436.271 89.1109 435.866 84.9009C435.461 79.3459 434.104 78.1219 429.212 77.1699V74.3269C435.45 71.3419 438.843 69.1769 443.593 64.8359L446.439 65.9189C446.034 70.2599 445.76 73.9229 445.629 77.3129L445.76 77.4439C449.427 70.5329 455.808 65.1089 463.95 65.1089C470.605 65.1089 476.165 68.2259 479.426 73.5179C481.188 76.6349 482.272 80.0239 482.272 85.4479V101.041H482.283Z" />
        <path d="M243.992 175.736C243.992 180.482 244.123 187.808 244.397 190.52C245.075 197.168 246.98 198.382 253.087 198.382C259.194 198.382 262.992 198.382 266.932 197.704C271.813 196.753 274.396 194.588 276.432 191.471C278.194 188.891 279.694 185.774 281.456 180.493L285.396 181.171C284.717 189.853 283.491 196.764 282.003 204.352C271.277 203.806 259.336 203.675 241.967 203.675C235.313 203.675 231.657 203.675 226.36 204.079L225.955 200.689C231.384 198.524 232.336 195.539 232.741 189.569C233.146 185.096 233.146 179.126 233.146 174.38V138.318C233.146 133.572 233.146 127.602 232.741 123.13C232.336 117.159 231.384 114.185 225.955 112.009L226.36 108.619C231.657 109.024 235.313 109.024 238.443 109.024C241.836 109.024 245.502 109.024 250.789 108.619L251.194 112.009C245.765 114.174 244.813 117.159 244.408 123.13C244.003 127.602 244.003 133.572 244.003 138.318V175.736H243.992Z" />
        <path d="M292.091 152.14C294.674 147.394 301.46 142.375 309.46 142.375C316.115 142.375 321.27 144.682 324.52 149.428C326.687 152.544 328.592 157.968 328.592 164.07V177.082C328.592 181.281 328.592 185.217 328.865 189.416C329.139 193.888 331.306 197.278 335.651 199.312L333.889 204.736C324.52 204.331 320.996 200.263 319.77 194.162H319.497C315.83 202.428 309.865 205.818 303.758 205.818C295.068 205.818 289.64 200.121 289.64 192.937C289.64 186.562 292.901 182.768 298.187 179.378C303.211 176.12 312.164 172.872 319.081 171.111V164.463C319.081 160.264 317.997 157.006 316.235 154.699C314.2 151.987 310.675 150.904 307.687 150.904C303.069 150.904 299.271 152.807 294.663 156.459L292.08 152.118L292.091 152.14ZM319.092 175.868C316.246 176.819 313.795 177.902 311.223 178.984C301.996 182.921 299.282 186.989 299.282 190.641C299.282 194.293 301.318 197.552 306.068 197.552C311.628 197.552 319.092 192.675 319.092 183.315V175.857V175.868Z" />
        <path d="M374.104 155.236L383.057 134.219C386.724 125.679 387.26 122.563 387.26 119.982C387.26 117.139 386.581 114.963 382.51 112.798L383.057 109.682C386.997 110.086 389.296 110.086 392.284 110.086C395.272 110.086 397.165 110.086 401.105 109.682L401.51 112.798C399.069 114.963 397.57 117.413 394.998 122.563C392.962 126.631 391.331 130.698 389.701 134.361L365.677 188.597C363.094 194.426 360.522 198.635 357.808 201.478C355.499 203.786 351.832 205.82 347.498 205.82C343.831 205.82 341.117 203.381 341.117 200.123C341.117 197.137 343.153 194.568 346.272 194.568C348.855 194.568 349.796 195.246 352.248 195.246C355.094 195.246 357.129 193.081 359.165 188.74L368.939 167.592L355.499 134.372C354.01 130.578 352.237 125.559 350.07 120.682C348.034 116.21 347.082 114.985 343.831 112.82L344.379 109.704C348.319 109.977 352.39 110.108 355.367 110.108C358.344 110.108 360.796 109.977 364.736 109.704L365.141 112.82C362.153 114.176 361.069 116.079 361.069 118.244C361.069 121.36 361.617 123.941 365.688 134.11L374.104 155.258V155.236Z" />
        <path d="M414.891 142.112C427.915 142.112 437.82 151.735 437.82 164.758C437.82 165.841 437.82 166.792 437.546 167.875H395.749C395.475 169.504 395.475 170.991 395.475 173.025C395.475 186.988 403.891 196.48 414.749 196.48C423.439 196.48 428.725 193.495 434.285 185.501L437.546 187.535C433.475 197.704 425.463 206.113 413.391 206.113C396.427 206.113 385.165 191.745 385.165 175.201C385.165 156.349 398.058 142.123 414.88 142.123L414.891 142.112ZM425.879 162.451C425.748 153.233 419.499 148.214 411.903 148.214C403.629 148.214 398.332 154.447 396.701 162.451H425.879Z" />
        <path d="M475.748 151.413C469.367 151.413 464.081 158.87 464.081 171.883V178.258C464.081 182.457 464.081 187.202 464.354 191.412C464.759 196.967 465.985 199.416 471.95 201.177L471.545 204.293C466.795 203.889 462.45 203.889 459.331 203.889C456.212 203.889 453.224 203.889 448.474 204.293L448.069 201.177C453.092 199.143 453.771 196.978 454.176 191.412C454.581 187.213 454.581 182.467 454.581 178.258V174.868C454.581 170.669 454.581 166.328 454.176 162.118C453.771 156.563 452.414 155.339 447.521 154.387V151.544C453.76 148.559 457.153 146.394 461.903 142.053L464.748 143.135C464.343 147.476 464.07 152.9 463.939 156.29L464.07 156.421C467.736 147.476 473.975 142.315 480.356 142.315C485.915 142.315 489.046 145.432 489.046 149.095C489.046 152.758 487.01 153.84 484.164 153.84C480.64 153.84 479.009 151.402 475.748 151.402V151.413Z" />
      </g>
      <defs>
        <clipPath id="clip0_2193_17">
          <rect width="490" height="207" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  symbiotic: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1081 139"
      fill="#B5FF3D"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.382812 0.242188C39.9828 0.242188 79.5828 0.242188 120.383 0.242188C120.383 6.84219 120.383 13.4422 120.383 20.2422C87.3828 20.2422 54.3828 20.2422 20.3828 20.2422C20.3828 27.8322 20.3828 35.4222 20.3828 43.2422C53.0528 43.2422 85.7228 43.2422 119.383 43.2422C119.383 74.5922 119.383 105.942 119.383 138.242C80.1128 138.242 40.8428 138.242 0.382812 138.242C0.382812 131.642 0.382812 125.042 0.382812 118.242C33.0528 118.242 65.7228 118.242 99.3828 118.242C99.3828 111.312 99.3828 104.382 99.3828 97.2422C66.7128 97.2422 34.0428 97.2422 0.382812 97.2422C0.382812 65.2322 0.382812 33.2222 0.382812 0.242188ZM20.3828 63.2422C20.3828 67.8622 20.3828 72.4822 20.3828 77.2422C46.4528 77.2422 72.5228 77.2422 99.3828 77.2422C99.3828 72.6222 99.3828 68.0022 99.3828 63.2422C73.3128 63.2422 47.2428 63.2422 20.3828 63.2422Z" />
      <path d="M449.383 0.242188C489.973 0.242188 530.563 0.242188 572.383 0.242188C572.383 45.7822 572.383 91.3222 572.383 138.242C531.793 138.242 491.203 138.242 449.383 138.242C449.383 92.7022 449.383 47.1622 449.383 0.242188ZM469.383 20.2422C469.383 33.4422 469.383 46.6422 469.383 60.2422C496.773 60.2422 524.163 60.2422 552.383 60.2422C552.383 47.0422 552.383 33.8422 552.383 20.2422C524.993 20.2422 497.603 20.2422 469.383 20.2422ZM469.383 80.2422C469.383 92.7822 469.383 105.322 469.383 118.242C496.773 118.242 524.163 118.242 552.383 118.242C552.383 105.702 552.383 93.1622 552.383 80.2422C524.993 80.2422 497.603 80.2422 469.383 80.2422Z" />
      <path d="M652.383 0.242188C692.973 0.242188 733.563 0.242188 775.383 0.242188C775.383 45.7822 775.383 91.3222 775.383 138.242C734.793 138.242 694.203 138.242 652.383 138.242C652.383 92.7022 652.383 47.1622 652.383 0.242188ZM672.383 20.2422C672.383 52.5822 672.383 84.9222 672.383 118.242C699.773 118.242 727.163 118.242 755.383 118.242C755.383 85.9022 755.383 53.5622 755.383 20.2422C727.993 20.2422 700.603 20.2422 672.383 20.2422Z" />
      <path d="M297.383 0.242188C339.293 0.242188 381.203 0.242188 424.383 0.242188C424.383 45.7822 424.383 91.3222 424.383 138.242C417.783 138.242 411.183 138.242 404.383 138.242C404.383 99.3022 404.383 60.3622 404.383 20.2422C393.493 20.2422 382.603 20.2422 371.383 20.2422C371.383 40.7022 371.383 61.1622 371.383 82.2422C364.783 82.2422 358.183 82.2422 351.383 82.2422C351.383 61.7822 351.383 41.3222 351.383 20.2422C340.163 20.2422 328.943 20.2422 317.383 20.2422C317.383 59.1822 317.383 98.1222 317.383 138.242C310.783 138.242 304.183 138.242 297.383 138.242C297.383 92.7022 297.383 47.1622 297.383 0.242188Z" />
      <path d="M967.383 0.242188C1004.67 0.242188 1041.96 0.242188 1080.38 0.242188C1080.38 6.84219 1080.38 13.4422 1080.38 20.2422C1049.69 20.2422 1019 20.2422 987.383 20.2422C987.383 52.5822 987.383 84.9222 987.383 118.242C1018.07 118.242 1048.76 118.242 1080.38 118.242C1080.38 124.842 1080.38 131.442 1080.38 138.242C1043.09 138.242 1005.8 138.242 967.383 138.242C967.383 92.7022 967.383 47.1622 967.383 0.242188Z" />
      <path d="M144.383 0.242188C150.983 0.242188 157.583 0.242188 164.383 0.242188C164.383 21.6922 164.383 43.1422 164.383 65.2422C193.093 65.2422 221.803 65.2422 251.383 65.2422C251.383 43.7922 251.383 22.3422 251.383 0.242188C257.983 0.242188 264.583 0.242188 271.383 0.242188C271.383 28.2922 271.383 56.3422 271.383 85.2422C253.893 85.2422 236.403 85.2422 218.383 85.2422C218.383 102.732 218.383 120.222 218.383 138.242C211.783 138.242 205.183 138.242 198.383 138.242C198.383 120.752 198.383 103.262 198.383 85.2422C180.563 85.2422 162.743 85.2422 144.383 85.2422C144.383 57.1922 144.383 29.1422 144.383 0.242188Z" />
      <path d="M793.383 0.242188C829.023 0.242188 864.663 0.242188 901.383 0.242188C901.383 6.84219 901.383 13.4422 901.383 20.2422C887.193 20.2422 873.003 20.2422 858.383 20.2422C858.383 59.1822 858.383 98.1222 858.383 138.242C851.783 138.242 845.183 138.242 838.383 138.242C838.383 99.3022 838.383 60.3622 838.383 20.2422C823.533 20.2422 808.683 20.2422 793.383 20.2422C793.383 13.6422 793.383 7.04219 793.383 0.242188Z" />
      <path d="M924.383 0.242188C930.983 0.242188 937.583 0.242188 944.383 0.242188C944.383 45.7822 944.383 91.3222 944.383 138.242C937.783 138.242 931.183 138.242 924.383 138.242C924.383 92.7022 924.383 47.1622 924.383 0.242188Z" />
      <path d="M602.383 0.242188C608.983 0.242188 615.583 0.242188 622.383 0.242188C622.383 45.7822 622.383 91.3222 622.383 138.242C615.783 138.242 609.183 138.242 602.383 138.242C602.383 92.7022 602.383 47.1622 602.383 0.242188Z" />
    </svg>
  ),
  mellow: (props: IconProps) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2823_21)">
        <path d="M177.002 53.8577L171.233 33.9672H174.814L179.189 50.6752L183.764 33.9672H187.345L191.919 50.6752L196.295 33.9672H199.876L194.107 53.8577H189.93L185.554 38.0646L181.179 53.8577H177.002Z" />
        <path d="M161.899 54.4544C155.335 54.4544 152.152 49.6807 152.152 43.9124C152.152 38.1442 155.335 33.3705 161.899 33.3705C168.463 33.3705 171.645 38.1442 171.645 43.9124C171.645 49.6807 168.463 54.4544 161.899 54.4544ZM155.733 43.9124C155.733 49.6807 158.517 52.0675 161.899 52.0675C165.28 52.0675 168.065 49.6807 168.065 43.9124C168.065 38.1442 165.28 35.7573 161.899 35.7573C158.517 35.7573 155.733 38.1442 155.733 43.9124Z" />
        <path d="M150.55 53.8577H147.169V28H150.55V53.8577Z" />
        <path d="M145.169 53.8577H141.788V28H145.169V53.8577Z" />
        <path d="M131.264 54.4544C124.7 54.4544 121.518 49.6807 121.518 43.9124C121.518 38.1442 124.7 33.3705 131.065 33.3705C137.629 33.3705 140.215 38.3431 140.215 43.1168V44.7081H125.098C125.337 49.9194 128.042 52.0675 131.264 52.0675C133.85 52.0675 136.038 50.6752 136.635 47.8905H140.016C139.22 51.6697 136.237 54.4544 131.264 54.4544ZM131.065 35.7573C128.002 35.7573 125.615 37.7066 125.178 42.3212H136.635C136.635 37.7464 134.089 35.7573 131.065 35.7573Z" />
        <path d="M92.8755 53.8577V28H98.047L106.401 49.8796L114.755 28H119.927V53.8577H116.545V31.5803L107.992 53.8577H104.81L96.2569 31.5803V53.8577H92.8755Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41 79.95C62.5115 79.95 79.95 62.5115 79.95 41C79.95 19.4885 62.5115 2.05 41 2.05C19.4885 2.05 2.05 19.4885 2.05 41C2.05 62.5115 19.4885 79.95 41 79.95ZM41 82C63.6437 82 82 63.6437 82 41C82 18.3563 63.6437 0 41 0C18.3563 0 0 18.3563 0 41C0 63.6437 18.3563 82 41 82Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.1498 68.675C62.4343 68.675 74.8248 56.2845 74.8248 41C74.8248 25.7155 62.4343 13.325 47.1498 13.325C31.8653 13.325 19.4748 25.7155 19.4748 41C19.4748 56.2845 31.8653 68.675 47.1498 68.675ZM47.1498 70.725C63.5665 70.725 76.8748 57.4167 76.8748 41C76.8748 24.5833 63.5665 11.275 47.1498 11.275C30.7331 11.275 17.4248 24.5833 17.4248 41C17.4248 57.4167 30.7331 70.725 47.1498 70.725Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.9748 56.375C48.4662 56.375 55.3498 49.4914 55.3498 41C55.3498 32.5086 48.4662 25.625 39.9748 25.625C31.4834 25.625 24.5998 32.5086 24.5998 41C24.5998 49.4914 31.4834 56.375 39.9748 56.375ZM39.9748 58.425C49.5983 58.425 57.3998 50.6236 57.3998 41C57.3998 31.3764 49.5983 23.575 39.9748 23.575C30.3512 23.575 22.5498 31.3764 22.5498 41C22.5498 50.6236 30.3512 58.425 39.9748 58.425Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2823_21">
          <rect width="200" height="82" />
        </clipPath>
      </defs>
    </svg>
  ),
}
interface IconSelectorProps {
  icon: IconKeys
  className?: string
}
export const IconSelector: React.FC<IconSelectorProps> = ({
  icon,
  className,
}) => {
  const IconComponent = Icons[icon]

  return <IconComponent className={cn("h-6 w-6", className)} />
}

export const Icons: IconsType = icons
