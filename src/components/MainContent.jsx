import React from "react";
import Subscribe from "./subscribe";
import AddItems from "./AddItems";
import { Footer } from "./footer";

const MainContent = ({
  items,
  handleCheck,
  handleDelete,
  handleSubmit,
  changeState,
  Name,
  setName,
  setNewItem,
  newItems,
}) => {
  return (
    <>
      <Subscribe
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        changeState={changeState}
        Name={Name}
        setName={setName}
        // useFirebase={useFirebase}
      ></Subscribe>
      <AddItems
        newItems={newItems}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></AddItems>
      <Footer length={items.length}></Footer>
    </>
  );
};

export default MainContent;
