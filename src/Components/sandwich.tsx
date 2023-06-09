import React, { useRef, useState } from 'react';
import './sandwich.css';
import SandvichImg from './SandvichImg';
import bground from '../img/bg.jpg';

export default function Sandwich(): JSX.Element {
  const [text, setText] = useState('Твой бутерброд: |');
  const [sandwichImg, setSandwichImg] = useState<string[]>([]);
  const inputRef:any = useRef(null);

  function addIngredient(ingredient: string): void {
    if (ingredient.trim()) {
      const txt = ` ${ingredient.trim()} |`;
      setText(text + txt);
      sandwichImg.push(ingredient.trim());
    }
  }

  function clear():void {
    setText('Твой бутерброд: |');
    setSandwichImg([]);
  }

  return (
    <div>
      <img src={bground} alt="bgroud" className="mainImg" />
      <h1>Создай свой уникальный бутерброд</h1>
      <div className="buttons">
      <button type="button" onClick={() => addIngredient('Хлеб')}>Хлеб</button>
      <button type="button" onClick={() => addIngredient('Зелень')}>Зелень</button>
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
      <button type="button" id="clear" onClick={clear}>Очистить</button>
      <SandvichImg ingredient={sandwichImg} />
    </div>
  );
}
