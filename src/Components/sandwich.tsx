import React, { useRef, useState } from 'react';

export default function Sandwich(): JSX.Element {
  const [text, setText] = useState('Твой бутерброд: |');
  const inputRef:any = useRef();

  function addIngredient(ingredient: string): void {
    if (ingredient.trim()) {
      const txt = ` ${ingredient.trim()} |`;
      setText(text + txt);
    }
  }

  return (
    <div>
      <div className="buttons">
      <button type="button" onClick={() => addIngredient('Хлеб')}>Хлеб</button>
      <button type="button" onClick={() => addIngredient('Масло')}>Масло</button>
      <button type="button" onClick={() => addIngredient('Сыр')}>Сыр</button>
      <button type="button" onClick={() => addIngredient('Колбаса')}>Колбаса</button>
      </div>
      <div className="inputContainer">
        <input ref={inputRef} type="text" placeholder="Добавь все что пожелаешь" />
        <button type="button" onClick={() => addIngredient(inputRef.current.value)}>Добавить</button>
      </div>
      <div className="textContainer">
        <p>{text}</p>
      </div>
      <button type="button" id="clear" onClick={() => setText('Твой бутерброд: |')}>Очистить</button>
    </div>
  );
}
