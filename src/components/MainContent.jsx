import React from "react";
import Subscribe from "./subscribe";
import AddItems from "./AddItems";
import { Footer } from "./footer";
import "../App.css";
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
      <div className="mainContent">
        <Subscribe
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          changeState={changeState}
          Name={Name}
          setName={setName}
          // useFirebase={useFirebase}
        ></Subscribe>
      </div>
      <div className="footer">
        <div className="mt-0">
          <AddItems
            newItems={newItems}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
          ></AddItems>
        </div>

        <Footer
          length={items.filter((item) => item.checked !== true).length}
        ></Footer>
      </div>
    </>
  );
};

export default MainContent;
