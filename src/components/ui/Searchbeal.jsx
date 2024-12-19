import React, { useCallback, useState } from "react";

export default function Searchbeal({ items ,children}) {
  const [valueSearChInput, setValueSearchInput] = useState("");

  const sortItem = useCallback(()=>{
    return items.filter(i => JSON.stringify(i).toLowerCase().includes(valueSearChInput.toLowerCase()))
  },[valueSearChInput])

  return (
    <ul>
      <input type="search"  value={valueSearChInput} onChange={(event)=>{
        setValueSearchInput(event.target.value)
      }} />
      {sortItem().map((item) => (
        <li key={item}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
