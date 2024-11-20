import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image"

const DetailPage = () => {
  return (
    <div>
    <Header />
    <Image src="/photo1.jpg" width={300} height={300} alt="옷사진"/>
    <Footer />
  </div>
  )
};

export default DetailPage;
