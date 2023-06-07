import React, { useRef, useState } from 'react';
import './sandwich.css';

export default function Sandwich(): JSX.Element {
  const [text, setText] = useState('Твой бутерброд: |');
  const inputRef:any = useRef(null);

  function addIngredient(ingredient: string): void {
    if (ingredient.trim()) {
      const txt = ` ${ingredient.trim()} |`;
      setText(text + txt);
    }
  }

  return (
    <div>
      <h1>Создай свой уникальный бутерброд</h1>
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
        <p className="textCon">{text}</p>
      </div>
      <button type="button" id="clear" onClick={() => setText('Твой бутерброд: |')}>Очистить</button>
    </div>
  );
}
