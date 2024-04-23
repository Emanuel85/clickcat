'use client'
import React, { useContext } from 'react'
import Buttons from '@/app/components/ui/Buttons'
import { contextValueGame } from '@/utils/Provider'

const index = () => {

  const { miauStar, setMiauStar } = useContext<any>(contextValueGame)

  const handleCount = () => {
    setMiauStar(miauStar + 1)
    generarMonedas()
  }






  return (
    <div>
      <div> {miauStar} </div>
      <Buttons onClick={handleCount} >Prueba</Buttons>
    </div>
  )
}

export default index





// function calcularProbabilidades(probabilidadSegunda, probabilidadTercera) {
//   // Probabilidad de que salga la primera moneda siempre es 100%
//   const probabilidadPrimera = 100;
  
//   // Probabilidad de que salga la segunda moneda sola
//   const probabilidadSegundaSola = (probabilidadSegunda * (1 - probabilidadTercera))*100;

//   // Probabilidad de que salga la tercera moneda sola
//   const probabilidadTerceraSola = (probabilidadTercera * (1 - probabilidadSegunda))*100;

//   // Probabilidad de que salgan ambas monedas simultáneamente
//   const probabilidadAmbas = probabilidadSegunda * probabilidadTercera * 100;

//   return {
//       primeraMoneda: probabilidadPrimera.toFixed(2) + "%",
//       segundaMoneda: probabilidadSegundaSola.toFixed(2) + "%",
//       terceraMoneda: probabilidadTerceraSola.toFixed(2) + "%",
//       ambasMonedas: probabilidadAmbas.toFixed(2) + "%"
//   };
// }

// // Ejemplo de uso:
// const probabilidades = calcularProbabilidades(0.4, 0.1);
// console.log("Probabilidad de que salga la primera moneda:", probabilidades.primeraMoneda);
// console.log("Probabilidad de que salga la segunda moneda sola:", probabilidades.segundaMoneda);
// console.log("Probabilidad de que salga la tercera moneda sola:", probabilidades.terceraMoneda);
// console.log("Probabilidad de que salgan ambas monedas simultáneamente:", probabilidades.ambasMonedas);