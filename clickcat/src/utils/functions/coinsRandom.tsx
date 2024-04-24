import { Random } from "random-js";
import { CoinsObject, ProbabilityObject } from '@/utils/type'

export function coinsRandom(
  { michiCoin, moonCat, miauStar }: CoinsObject,
  { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject
): CoinsObject {
  
  console.log('probabilidad michi',michiProbabilityValeu)
  console.log('probabilidad moonCat',moonCatProbabilityValue)
  
  const michiCoinProbability = michiProbabilityValeu
  const moonCatProbability = moonCatProbabilityValue
  const random = new Random();
  const michiCoinRandom = random.real(0, 100, true);
  const moonCatRandom = random.real(0, 100, true);

console.log('Random michi',michiCoinRandom)
console.log('Random moonCat',moonCatRandom)

  if (michiCoinRandom <= michiCoinProbability) ++michiCoin;
  if (moonCatRandom <= moonCatProbability) ++moonCat;
  ++miauStar;

  return { michiCoin, moonCat, miauStar }
}