import EditForm from "@/components/EditForm";
import Navbar from "@/components/Navbar";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const Edit = ({ data }) => {
  return (
    <>
      <Navbar />
      <EditForm dataTask={data} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  try {
    // Mengambil data dari Firestore berdasarkan ID yang diberikan dalam query parameter
    const docRef = doc(db, "tasks", query.id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error", error);
    return {
      props: { data: {} },
    };
  }
}

export default Edit;
