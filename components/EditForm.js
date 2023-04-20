import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditForm = ({ dataTask }) => {
  const [task, setTask] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setTask(dataTask);
  }, [dataTask]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const submitEditData = async () => {
    const docRef = doc(db, "tasks", id);
    try {
      await updateDoc(docRef, task);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await submitEditData();
    setTask("");
    router.push("/");
  };

  return (
    <>
      <div className="h-screen bg-neutral-500 px-24 py-28">
        <span className="font-bold text-3xl">Form Input</span>
        <form
          className="flex flex-col justify-center py-8 gap-8"
          onSubmit={submitHandler}
        >
          <div className="flex items-center">
            <input
              type="text"
              autoComplete="off"
              placeholder="Your Task"
              className="px-4 py-4 w-full rounded-md focus:outline-none"
              onChange={inputChangeHandler}
              value={task.task}
              name="task"
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

export default EditForm;
