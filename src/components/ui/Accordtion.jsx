import React, { createContext, useContext, useState } from "react";

const createContextAccordtion = createContext();

const useAccordtionContext = () => {
  const ctx = useContext(createContextAccordtion);

  if (!ctx) throw new Error("you:Accodtion not aviabloe !");

  return ctx;
};

function Root({ className, children }) {
  const [openItemId, setOpenItemId] = useState(null);

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const valueContextAccordtion = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <createContextAccordtion.Provider value={valueContextAccordtion}>
      <ul className={className}>{children}</ul>
    </createContextAccordtion.Provider>
  );
}

Root.displayName = "AccodtionRoot";

function Item({ id, title, children }) {
  const { openItemId, openItem, closeItem } = useAccordtionContext();

  const isOpen = id === openItemId;

  function handleCLick() {
    console.log(openItemId)
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li style={{cursor : "pointer"}} onClick={handleCLick}>
      <h2>{title}</h2>
      <div>{isOpen ? children : undefined}</div>
    </li>
  );
}

Item.displayName = "AccodtionItem";

export default {
  Root,
  Item,
};
