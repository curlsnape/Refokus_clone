import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-lg flex justify-center gap-2 py-32 mx-auto">
        <Card width={'basis-1/3'} start={false} para={true} firsth={'Up Next : Projects'} mainh={'Projects and Case Studies'}/>
        <Card width={'basis-1/2'} start={true} para={false} firsth={'Get in Touch'} mainh={"let's get to it,together."} hover='true'/>
      </div>
    </div>
  );
}

export default Cards;
