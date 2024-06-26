import { FC } from "react";

import { DefaultIconComponentProps } from "../../shared/type";

export const TrashIcon: FC<DefaultIconComponentProps> = ({
  width = 34,
  height = 34,
  onClick,
}) => {
  const viewBox = `0 0 16 16`;

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewBox}
      className="trash-icon"
      onClick={handleClick}
    >
      <g transform="translate(0, 0)">
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M2.5,6.5v7 c0,1.105,0.895,2,2,2h8c1.105,0,2-0.895,2-2v-7"
        ></path>
        <line
          data-color="color-2"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="1.5"
          y1="3.5"
          x2="15.5"
          y2="3.5"
        ></line>
        <polyline
          data-color="color-2"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points=" 6.5,3.5 6.5,0.5 10.5,0.5 10.5,3.5 "
        ></polyline>
        <line
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="8.5"
          y1="7.5"
          x2="8.5"
          y2="12.5"
        ></line>
        <line
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="11.5"
          y1="7.5"
          x2="11.5"
          y2="12.5"
        ></line>
        <line
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="5.5"
          y1="7.5"
          x2="5.5"
          y2="12.5"
        ></line>
      </g>
    </svg>
  );
};
