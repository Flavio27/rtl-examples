import React, { useState } from "react";
import "./styles.scss";
/*
1º Dropdown começe fechado;
2º Mostrar as opções quando for clicado, se clicado novamente ele fecha;
3º Quando selecionar o item do menu, fechar e manter o qual foi selecionado;
*/

function Dropdown({ title, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="c-dropdown">
      <button onClick={() => setIsOpen((open) => !open)}>{title}</button>
      {isOpen && (
        <ul role="menu" className="menu">
          {options.map((option) => (
            <li
              className="menu-item"
              key={option}
              role="menuitem"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
