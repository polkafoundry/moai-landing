import { IconProps } from "../type";

export function PlayIcon(props: IconProps) {
  return (
    <svg className={props.className} width={props.width || 16} height={props.height || 16} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_327_1879)">
        <path d="M30 0C13.4317 0 0 13.3597 0 29.8398C0 46.3199 13.4317 59.6797 30 59.6797C46.5683 59.6797 60 46.3199 60 29.8398C60 13.3597 46.5683 0 30 0ZM40.3688 31.4216L25.3687 40.7465C25.0652 40.935 24.7201 41.0298 24.375 41.0298C24.0623 41.0298 23.7492 40.9524 23.4659 40.7957C22.8698 40.467 22.5 39.8432 22.5 39.1648V20.5149C22.5 19.8365 22.8698 19.2127 23.4659 18.8839C24.0619 18.5534 24.7907 18.5734 25.3687 18.9331L40.3688 28.2581C40.9167 28.5996 41.25 29.197 41.25 29.8398C41.25 30.4827 40.9167 31.0802 40.3688 31.4216Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_327_1879">
          <rect width="60" height="59.6797" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
