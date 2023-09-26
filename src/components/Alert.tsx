"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle, HiAdjustments } from "react-icons/hi";

type MyType = ReturnType<() => typeof HiInformationCircle>;

declare function f1(): { a: number; b: string };

function f2(): { a: number; b: string } {
  return {
    a: 19,
    b: "",
  };
}

type yourType = ReturnType<typeof f1>;
type yourType2 = ReturnType<typeof f2>;

export default function AlertWithIcon() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span>
        <p>
          <span className="font-medium">Info alert!</span>
          <br />
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  );
}
