
import { Random } from "random-js";
import { CoinsObject } from '@/utils/type'

export function coinsRandom(coins: CoinsObject) {


	const IcoinsRandom: CoinsObject = {
		miauStar: coins.miauStar,
		moonCat: coins.moonCat,
		michiCoin: coins.michiCoin,
	}

	const result: CoinsObject[] = [IcoinsRandom]

	const michiCoinProbability = 10
	const moonCatProbability = 30
	const random = new Random();
	const michiCoinRandom = random.real(0, 100, true);
	const moonCatRandom = random.real(0, 100, true);


	result.map(coins => {
		coins.miauStar = coins.miauStar !== undefined ? coins.miauStar + 1 : 0,
			coins.michiCoin = coins.michiCoin !== undefined && (michiCoinProbability >= michiCoinRandom) ? coins.michiCoin + 1 : 0,

			coins.moonCat = coins.moonCat !== undefined && (moonCatProbability >= moonCatRandom) ? coins.moonCat + 1 : 0
	})

	return result
}