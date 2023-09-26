import React from "react";
import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import { useRouter } from "next/router";

import { NavbarComponent } from "@/components";
import Head from "next/head";
import CustomHead from "@/layout/CustomHead";

const UserProfile = () => {
  const router = useRouter();

  const [formBody, setForm] = React.useState<any>();

  function handleChange(e: any) {
    setForm({
      ...formBody,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:8060/second-business/v1/auth/login",
        formBody
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log(formBody);
  }

  return (
    <>
      <CustomHead icon="robot1" title="Profile" />
      <NavbarComponent />
      <div className="flex justify-center items-center h-screen gap-5">
        <Card>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
                required
                type="email"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                required
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" name="checkboxghpzx" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
        <Card>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
                required
                type="email"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                required
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" name="checkboxghpzx" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default UserProfile;
