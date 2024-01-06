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
      <div className="mt-5">
        <AddItems
          newItems={newItems}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        ></AddItems>
      </div>
      <Footer
        length={items.filter((item) => item.checked !== true).length}
      ></Footer>
    </>
  );
};

export default MainContent;
