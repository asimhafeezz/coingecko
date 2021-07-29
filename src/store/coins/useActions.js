import * as types from "./types"
import { useDispatch } from "react-redux"
import axios from "axios"
import { bindActionCreators } from "redux"

export const useCoinActions = () => {
	const dispatch = useDispatch()

	//actions creators
	const loadingCoinsC = payload => ({
		type: types?.LOADING_ALL_COINS,
		payload: payload,
	})

	const loadingSingleCoinsC = payload => ({
		type: types?.LOADING_COIN_DETAIL,
		payload: payload,
	})

	const fetchCoinsC = payload => ({
		type: types?.FETCH_ALL_COINS,
		payload: payload,
	})

	const fetchCoinDetailC = payload => ({
		type: types?.FETCH_COIN_DETAIL,
		payload: payload,
	})

	//actions...
	const fetchCoins = () => {
		//start loading
		dispatch(loadingCoinsC(true))
		//fetch coins
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&price_change_percentage=1h,24h,7d&sparkline=true"
			)
			.then(res => {
				dispatch(fetchCoinsC(res?.data))
				//stop loading
				dispatch(loadingCoinsC(false))
			})
			.catch(err => console.log({ err }))
			.finally(() =>
				//stop loading
				dispatch(loadingCoinsC(false))
			)
	}

	//fetch single coin detail
	const fetchSingleCoinDetail = id => {
		//loadin state
		dispatch(loadingSingleCoinsC(true))
		//fetch
		axios
			.get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`)
			.then(res => {
				dispatch(fetchCoinDetailC(res?.data))
				//loadin state
				dispatch(loadingSingleCoinsC(false))
			})
			.catch(err => console.log({ err }))
			.finally(() =>
				//loadin state
				dispatch(loadingSingleCoinsC(false))
			)
	}

	return {
		fetchCoins,
		fetchSingleCoinDetail,
	}
}
