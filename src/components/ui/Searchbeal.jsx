import React, { useCallback, useRef, useState } from "react";

export default function Searchbeal({ items, itemKeyFun, children }) {
  const lastChange = useRef();
  const [valueSearChInput, setValueSearchInput] = useState("");

  const sortItem = () => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
      lastChange.current = null;
      return items.filter((i) =>
        JSON.stringify(i).toLowerCase().includes(valueSearChInput.toLowerCase())
      );
  };

  


  return (
    <ul>
      <input
        type="search"
        value={valueSearChInput}
        onChange={(event) => {
          setValueSearchInput(event.target.value);
        }}
      />
      {sortItem.length > 0 &&
        sortItem().map((item) => (
          <li key={itemKeyFun(item)}>{children(item)}</li>
        ))}
    </ul>
  );
}
