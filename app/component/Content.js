import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="flex gap-5 p-10">
        <Link href={{ pathname: "/detail", query: { image: "photo1.jpg" } }}>
            <Image src="/photo1.jpg" width={300} height={300} alt="옷사진" />
        </Link>
        <Link href={{ pathname: "/detail", query: { image: "photo2.jpg" } }}>
            <Image src="/photo2.jpg" width={300} height={300} alt="옷사진" />
        </Link>
        <Link href={{ pathname: "/detail", query: { image: "photo3.jpg" } }}>
            <Image src="/photo3.jpg" width={300} height={300} alt="옷사진" />
        </Link>
        <Link href={{ pathname: "/detail", query: { image: "photo4.jpg" } }}>
            <Image src="/photo4.jpg" width={300} height={300} alt="옷사진" />
        </Link>
    </div>
  );
};

export default Content;
