import { useState } from "react"

const ItemCount = () => {

  const resultado = useState(0)
  let contador = resultado[0]
  const setContador = resultado[1]

  console.log(resultado);

  const incrementador = () => {
    console.log("incremento");
    setContador(contador + 1);
  }

  const decrementador = () => {
    console.log("decremento");
    setContador(contador - 1);
  }

  return (
    <>
      <div>
        <button onClick={decrementador}>-</button>
        <p>{contador}</p>
        <button onClick={incrementador}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;