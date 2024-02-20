import React, { useState } from 'react';
import './MiComponente.css';

const MiComponente = () => {
  const [mensaje, setMensaje] = useState('');

  const actualizarMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const limpiarMensaje = () => {
    setMensaje('');
  };

  return (
    <div>
      <label htmlFor="mensajeInput">Mensaje:</label>
      <input
        type="text"
        id="mensajeInput"
        value={mensaje}
        onChange={actualizarMensaje}
      />
      <p>{mensaje}</p>
      <button onClick={limpiarMensaje}>Limpiar Mensaje</button>
    </div>
  );
};

export default MiComponente;
