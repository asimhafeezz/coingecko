import * as types from "./types"

const initialState = {
	coins: [],
	coin: {},
	loadingAllCoins: true,
	loadingCoinDetail: true,
}

export const coinReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ALL_COINS:
			return {
				...state,
				coins: action?.payload,
			}
		case types.FETCH_COIN_DETAIL:
			return {
				...state,
				coin: action?.payload,
			}
		case types.LOADING_ALL_COINS:
			return {
				...state,
				loadingAllCoins: action?.payload,
			}
		case types.LOADING_COIN_DETAIL:
			return {
				...state,
				loadingCoinDetail: action?.payload,
			}
		default:
			return state
	}
}
