import * as React from "react";
import type { SVGProps } from "react";
const SvgSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    <circle cx={25} cy={25} r={25} fill="#25ae88" />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M38 15 22 33l-10-8"
    />
  </svg>
);
export default SvgSuccess;
