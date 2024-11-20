import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="flex gap-5 p-10">
        <Image src="/photo1.jpg" width={300} height={300} alt="옷사진"/>
        <Image src="/photo2.jpg" width={300} height={300} alt="옷사진"/>
        <Image src="/photo3.jpg" width={300} height={300} alt="옷사진"/>
        <Image src="/photo4.jpg" width={300} height={300} alt="옷사진"/>
    </div>
  )
};

export default Content;