import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";

function Reference() {
  return (
    <>
      <Header />
      <Contents>
        <ReferCont />
      </Contents>
      <Footer />
    </>
  );
}
export default Reference;
