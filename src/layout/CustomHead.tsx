import Head from "next/head";
import React from "react";

import { iconHelper } from "./helpers";
import { TCustomHeadProps } from "./types";

const CustomHead: React.FC<TCustomHeadProps> = ({ icon, title }) => {
  return (
    <Head>
      <link rel="icon" href={iconHelper(icon)} />
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;
