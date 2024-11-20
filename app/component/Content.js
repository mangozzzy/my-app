import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="flex gap-5 p-10">
        <Link href="/detail">
            <Image src="/photo1.jpg" width={300} height={300} alt="옷사진"/>
        </Link>
        <Link href="/detail">
            <Image src="/photo2.jpg" width={300} height={300} alt="옷사진"/>
        </Link>
        <Link href="/detail">
            <Image src="/photo3.jpg" width={300} height={300} alt="옷사진"/>
        </Link>
        <Link href="/detail">
            <Image src="/photo4.jpg" width={300} height={300} alt="옷사진"/>
        </Link>
    </div>
  )
};

export default Content;