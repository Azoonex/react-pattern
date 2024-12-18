import React, { createContext, useContext, useState } from "react";

const createContextAccordtion = createContext();

const useAccordtionContext = () => {
  const ctx = useContext(createContextAccordtion);

  if (!ctx) throw new Error("you:Accodtion not aviabloe !");

  return ctx;
};

function Root({ className, children }) {
  const [openItemId, setOpenItemId] = useState(null);

  function toggleItem(id) {
    setOpenItemId((prev) => (prev === id ? null : id));
  }

  const valueContextAccordtion = {
    openItemId,
    toggleItem,
  };

  return (
    <createContextAccordtion.Provider value={valueContextAccordtion}>
      <ul className={className}>{children}</ul>
    </createContextAccordtion.Provider>
  );
}


function Item({ id, title, children }) {
  const { toggleItem, openItemId } = useAccordtionContext();

  const isOpen = id === openItemId;

  return (
    <li style={{ cursor: "pointer" }} onClick={() => toggleItem(id)}>
      <h2>{title}</h2>
      <div>{isOpen ? children : undefined}</div>
    </li>
  );
}

Root.displayName = "AccodtionRoot";
Item.displayName = "AccodtionItem";
Root.Item = Item

export default Root;
