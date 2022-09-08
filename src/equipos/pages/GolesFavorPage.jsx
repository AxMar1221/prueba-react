import React from 'react';

export const GolesFavorPage = () => {

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

  const calculo = function () {
    setResult((+input.num1) - (+input.num2));
  };

  return (
    <div className='container mt-3 card'>
      <div className='card-body'>
        <div className='container mt-3'>
          <h6>Goles anotados</h6>
          <input
            placeholder='Goles anotados'
            onChange={handleInput}
            name='num1'
            value={input.num1}
            type='number'>
          </input>
          <h6>Goles recibidos</h6>
          <input
            placeholder='Goles en contra'
            onChange={handleInput}
            name='num2'
            value={input.num2}
            type='number'>
            </input>
            <br />
          <button
            id='reset' 
            className='btn btn-primary'
            type='submit'
            onClick={calculo}>
              Calcular
          </button>
        <h5 className='card-title'>Goles a favor = {result}</h5>
      </div>
    </div>
  </div>
  );
}