import { db } from "@/firebase";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const getData = async () => {
      const collectionRef = collection(db, "tasks");
      await onSnapshot(collectionRef, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    };
    getData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const docRef = doc(db, "tasks", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="px-24 py-8">
      <span className="text-white font-bold text-xl">Your Task :</span>
      {data.length === 0 ? (
        <p className="py-12 text-3xl font-bold">
          Nothing task here, Please add your first task.
        </p>
      ) : (
        <ul className="flex flex-col gap-8 py-4 ">
          {data.map((task) => (
            <li
              key={task.id}
              className="bg-neutral-100 p-8 flex items-center rounded-xl shadow-md justify-between"
            >
              <span className="text-neutral-900 text-xl font-semibold">
                {task.task}
              </span>
              <div className="flex gap-4">
                <Link href={`/Edit/${task.id}`} passHref>
                  <button className="bg-neutral-900 text-white py-2 w-[100px] rounded-md">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteHandler(task.id)}
                  className="bg-neutral-900 text-white py-2 w-[100px] rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
