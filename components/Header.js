import React from "react";
import Image from "next/image";
function Header() {
  return (
    <>
      <h1 className="text-4xl text-center my-6 font-bold text-sky-500">
        Ask Kitty
      </h1>
      <div className="flex justify-center py-4">
        <Image src="/assets/cat.jpg" alt="cat" width="400" height="300" />
      </div>
    </>
  );
}

export default Header;
