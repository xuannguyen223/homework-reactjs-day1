import React from "react";
import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <>
      <div className="body px-32 py-5 text-center">
        <Banner />
        <div className="body__item flex justify-between gap-10">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};

export default Body;
