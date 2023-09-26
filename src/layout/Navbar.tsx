"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";

export default function NavbarWithDropdown() {
  const avatar: boolean = false;
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <DarkThemeToggle />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-black ">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Dropdown
          style={{ cursor: "pointer" }}
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={
                avatar
                  ? "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  : undefined
              }
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item href="/profile/asdqwe123">Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
