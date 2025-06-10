import './app.css';
import {useState} from 'react';

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [mensagem, setMensagem] = useState();

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso`);
    }
    else if (imc >= 18.5 && imc < 25) {
      setMensagem(`Seu IMC é ${imc.toFixed(2)}, você está com o peso ideal`);
    }
    else if (imc >= 25 && imc < 30) {
      setMensagem(`Seu IMC é ${imc.toFixed(2)}, você está acima do peso`);
    }
    else {
      setMensagem(`Seu IMC é ${imc.toFixed(2)}, você está obeso`);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) EX: 90"
          value={peso}
          onChange={(e) => setPeso (e.target.value)}
         />

        <input 
        type="text" 
        placeholder="Altura em (cm) EX: 180"
        value={altura}
        onChange={(e) => setAltura(e.target.value) }
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}