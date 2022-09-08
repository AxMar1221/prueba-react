import React from 'react';

export const PuntosPage = () => {

  const [input, setInput] = React.useState({
    num1: '',
    num2: '',
  });
  const [result, setResult] = React.useState();

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const suma = function () {
    setResult((+input.num1) + (+input.num2));
  };

  return (
    <div className='container mt-3 card'>
      <div className='card-body'>
        <div className='container mt-3'>
          <input
            placeholder='Ingrese un numero'
            onChange={handleInput}
            name='num1'
            value={input.num1}
            type='number'>
          </input>
          <input
            placeholder='Ingrese un numero'
            onChange={handleInput}
            name='num2'
            value={input.num2}
            type='number'>
            </input>
          <button 
            className='btn btn-primary'
            onClick={suma}>Sumar</button>
        <h5 className='card-title'>Resultado = {result}</h5>
      </div>
    </div>
  </div>
  );
}