import * as types from "./types"

const initialState = {
	coins: [],
	coin: {},
}

export const coinReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ALL_COINS:
			return {
				...state,
			}
		default:
			return state
	}
}
