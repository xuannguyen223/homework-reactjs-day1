import React from "react";

const Item = () => {
  return (
    <div className="banner bg-white mt-5  border border-gray-300 ">
      <div className="item__header">500 x 325</div>
      <h1 className="text-3xl font-bold ">Card title</h1>
      <p className="my-3 px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem
        laborum dignissimos omnis rem ipsam corrupti consequatur commodi
        officiis enim?
      </p>
      <div className="item__footer ">
        <button className="btn">Find Out More!</button>
      </div>
    </div>
  );
};

export default Item;
