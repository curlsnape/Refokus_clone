import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-lg sm:flex sm:flex-row flex-col sm:justify-center sm:gap-2 px-5 sm:px-0 py-32 mx-auto">
        <Card width={'basis-1/3'} start={false} para={true} firsth={'Up Next : Projects'} mainh={'Projects and Case Studies'}/>
        <Card width={'basis-1/2'} start={true} para={false} firsth={'Get in Touch'} mainh={"let's get to it,together."} hover='true'/>
      </div>
    </div>
  );
}

export default Cards;
