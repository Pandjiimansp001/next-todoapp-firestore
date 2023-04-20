import Navbar from "@/components/Navbar";
import { addTodo } from "@/redux/todosSlice";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";

const New = () => {
  const dispatch = useDispatch();
  const [task, setNewTask] = useState([]);
  const router = useRouter();

  const addHandler = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "tasks"), { task });

    if (task) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          task,
        })
      );

      setNewTask("");
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-neutral-500 px-24 py-28">
        <span className="font-bold text-3xl">Form Input</span>
        <form
          className="flex flex-col justify-center py-8 gap-8"
          onSubmit={addHandler}
        >
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Task"
              className="px-4 py-4 w-full rounded-md focus:outline-none"
              onChange={(e) => setNewTask(e.target.value)}
              value={task}
            />
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <button className="bg-neutral-900 text-white py-2 w-[100px] rounded-md">
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-neutral-900 text-white py-2 w-[100px] rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default New;
