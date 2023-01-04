import CategoryList from "./categoryList";
import ModalTab from "./modal";
import NavbarItem from "./navbar";
import React, { useState } from "react";

function Admin() {
  return (
    <>
      <NavbarItem />
      <div gap={2} className="col-md-5 mx-auto mt-5">
        <div className="d-flex">
          <h1 className="mb-4">Ангилал</h1>
          <ModalTab />
        </div>
        <CategoryList />
      </div>
    </>
  );
}

export default Admin;
