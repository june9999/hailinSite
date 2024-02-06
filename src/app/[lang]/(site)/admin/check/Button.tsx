"use client";
import { deleteData } from "@/src/lib/works";
import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => {
        deleteData(e.id as string);
      }}
    >
      Delete
    </button>
  );
};

export default Button;
