import React, { useRef, useState } from 'react';

export default function Lesson18(): JSX.Element {
  const [gender, setGender] = useState<string>('');
  const inputName: any = useRef();

  function getGender():void {
    async function loadGender(): Promise<void> {
      const firstName = inputName.current.value;
      const response = await fetch(
        `https://api.genderize.io?name=${firstName}`
      );
      const object = await response.json();
      setGender(object.gender);
    }
    loadGender();
  }

  return (
    <div>
      <input ref={inputName} type="text" placeholder="Введи свое имя" />
      <button type="button" onClick={getGender}>
        Отправить
      </button>
      <div style={{ color: 'white' }}>{gender}</div>
    </div>
  );
}
