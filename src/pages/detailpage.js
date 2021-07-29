import { useEffect } from "react"
import { CoinDetail } from "../components/coinDetail"
import { useCoinActions } from "../store/coins/useActions"

export const Detailpage = ({ match }) => {
	//use coins actions
	const { fetchSingleCoinDetail } = useCoinActions()

	//fetch data on load
	useEffect(() => {
		fetchSingleCoinDetail(match?.params?.id)
	}, [])

	return (
		<section className='detailpage'>
			<CoinDetail />
		</section>
	)
}
