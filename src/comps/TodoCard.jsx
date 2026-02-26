import React, { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "./Dialog";
import TodosContext from "../context/TodosContext";
import { useNavigate } from "react-router";

export default function TodoCard({ todo }) {
  if (!todo) return;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { setTodos } = useContext(TodosContext);
  const navigate = useNavigate();
  const editPath = `/EditTodo/${todo.id}`

  return (
    <>
      <div
        className="m-2 hover:shadow-2xl hover:scale-105  h-[300px] border rounded shadow-xl p-3 w-[30%] justify-around flex flex-col items-center"
        key={todo.id}
      >
        <h3 className="text-center font-bold">{todo.title}</h3>
        <span className="text-center">{todo.description}</span>
        <span className="text-center">{todo.createdAt}</span>
        <div>
          <EditIcon
            className=" cursor-pointer hover:scale-105"
            titleAccess="Edit todo"
            onClick={() => {
                navigate(editPath)
            }}
          />
          <DeleteIcon
            onClick={() => setIsOpenDialog(true)}
            className=" cursor-pointer hover:scale-105"
            titleAccess="Edit todo"
            color="error"
          />
        </div>
      </div>
      {isOpenDialog && (
        <Dialog
          dir="rtl"
          desc={`האם אתה בטוח שברצונך למחוק את משימה ${todo.id}?`}
          title={"מחיקת משימה"}
          textConfirm="אישור"
          textCancel="ביטול"
          onCancel={() => setIsOpenDialog(false)}
          onConfirm={() => {
            setTodos((prev) => {
              return prev.filter((t) => t.id !== todo.id);
            });
            setIsOpenDialog(false);
          }}
        />
      )}
    </>
  );
}
