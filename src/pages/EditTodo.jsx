import React from "react";
import { Form, useParams } from "react-router";
import FormNewTodo from "../comps/FormTodo";

export default function EditTodo() {
  const { id } = useParams();
  console.log(id);

  return (
    <div
      dir="rtl"
      className=" rounded items-center pt-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex  flex-col justify-center border border-black w-[40%]"
    >
      <h2 className="font-bold">עריכת משימה</h2>
      <FormNewTodo id={id} />
    </div>
  );
}
