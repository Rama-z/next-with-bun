// Layout Helpers

import { TIconUnions } from "./types";

export const iconHelper = (input: TIconUnions) => {
  switch (input) {
    case "robot1":
      return "/robot1.ico";
    case "robot2":
      return "/robot2.ico";
    default:
      return "/favicon.ico";
  }
};
