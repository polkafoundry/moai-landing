import { IconProps } from "../type";

export function TelegramIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2218 3.09784L2.44681 8.79534C1.43847 9.20034 1.44431 9.76284 2.26181 10.0137L6.05514 11.197L14.8318 5.6595C15.2468 5.407 15.626 5.54284 15.3143 5.8195L8.20347 12.237H8.20181L8.20347 12.2378L7.94181 16.1478C8.32514 16.1478 8.49431 15.972 8.70931 15.7645L10.5518 13.9728L14.3843 16.8037C15.091 17.1928 15.5985 16.9928 15.7743 16.1495L18.2901 4.29284C18.5476 3.26034 17.896 2.79284 17.2218 3.09784Z"
        fill="white"
      />
    </svg>
  );
}
