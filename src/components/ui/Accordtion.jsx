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

function Content({ children, className }) {
  return <article className={className}>{children}</article>
}

function Title({ children, className, ...props }) {
  return (
    <h4 className={className} {...props}>
      {children}
    </h4>
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
Content.displayName = "AccodtionContent";
Title.displayName = "AccodtionTitle";

Root.Item = Item;
Root.Title = Title;
Root.Content= Content;

export default Root.Root = Root;
