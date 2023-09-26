import { AlertComponent, NavbarComponent } from "@/components";
import CustomHead from "@/layout/CustomHead";
import { Button, Datepicker } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Error404() {
  return (
    <>
      <CustomHead icon="robot1" title="Error Pages" />
      <NavbarComponent />
      <div className="flex flex-col h-screen justify-center items-center">
        <div>Page not found</div>
        <Button>
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </>
  );
}

export default Error404;
