import "./main.css";
import { useState } from "react";
import { NavbarMain } from "./navbar";
import { AddPost } from "./post";
export function ClientApp() {
  return (
    <>
      <NavbarMain />
      <AddPost />
    </>
  );
}
