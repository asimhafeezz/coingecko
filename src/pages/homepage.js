import { useEffect } from "react"
import { CoinsGrid } from "../components"
import { useCoinActions } from "../store/coins/useActions"

export const Homepage = () => {
	//use coins actions
	const { fetchCoins } = useCoinActions()

	//fetch data on load
	useEffect(() => {
		fetchCoins()
	}, [])

	return (
		<section className='homepage'>
			<CoinsGrid />
		</section>
	)
}
