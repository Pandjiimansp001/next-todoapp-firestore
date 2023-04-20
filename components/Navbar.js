import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-24 py-8 bg-neutral-900 flex items-center gap-8 fixed">
      <span className="text-white font-bold">TODO LIST APP</span>
      <Link href="/New/New">
        <span className="text-white cursor-pointer">Add New</span>
      </Link>
    </div>
  );
};

export default Navbar;
