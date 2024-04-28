import { Random } from "random-js";
import { CoinsObject, ProbabilityObject, ValueCoinsObject } from '@/utils/type'


//Funcion generadora de monedas en base a probabilidad usando numeros random
//michiProbabilityValeu y moonCatProbabilityValue son valores ajustables para alterar la probabilidad


export default function coinsRandom(
  { michiCoin, moonCat, miauStar }: CoinsObject,
  { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
  { miauStarValue, moonCatValue, michiCoinValue }: ValueCoinsObject
): CoinsObject {

  const michiCoinProbability = michiProbabilityValeu
  const moonCatProbability = moonCatProbabilityValue
  const random = new Random();
  const michiCoinRandom = random.real(0, 100, true);
  const moonCatRandom = random.real(0, 100, true);


  if (michiCoinRandom <= michiCoinProbability) michiCoin = michiCoin + michiCoinValue;
  if (moonCatRandom <= moonCatProbability) moonCat = moonCat + moonCatValue;
  miauStar = miauStar + miauStarValue;

  return { michiCoin, moonCat, miauStar }
}