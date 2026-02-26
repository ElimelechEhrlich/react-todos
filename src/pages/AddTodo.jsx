import React, { useContext } from "react";
import FormNewTodo from "../comps/FormTodo";
import TodosContext from "../context/TodosContext";
import {onSaveNewTodo} from "../services/onSaveForm.js" 

export default function AddTodo() {
  return (
    <div
      dir="rtl"
      className=" rounded items-center pt-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex  flex-col justify-center border border-black w-[40%]"
    >
      <h2 className="font-bold">יצירת משימה חדשה</h2>
      <FormTodo onSave={onSaveNewTodo} />
    </div>
  );
}
