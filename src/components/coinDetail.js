import React from "react"
import { useSelector } from "react-redux"
import { Spinner } from "../common/spinner"
import { SparklineChart } from "./SparklineChart"
import { Tabs } from "./tabs"
import { TrendingCoins } from "./trendingCoins"

export const CoinDetail = React.memo(() => {
	//store
	const coin = useSelector(state => state?.coin)
	const loadingCoinDetail = useSelector(state => state?.loadingCoinDetail)

	if (loadingCoinDetail) {
		return (
			<div className='spinner-section'>
				<Spinner />
			</div>
		)
	}

	return (
		<div className='coin-detail'>
			<section className='header'>
				<img src={coin?.image?.small} alt='imgj' />
				<h1>
					{coin?.name} <span>{`  ( ${coin?.symbol} ) `}</span>
				</h1>
			</section>
			<h1 className='big-price'>${coin?.market_data?.current_price?.usd}</h1>

			<Tabs tabs={tabs} firstActiveTab={"Overview"} />

			<section className='buttons'>
				{buttonsData?.map((btn, btnIdx) => (
					<button key={btnIdx}>{btn}</button>
				))}
			</section>
			<section className='content'>
				<section className='main-content'>
					<section className='left-grid-content'>
						<h2>{`${coin?.name + " ( " + coin?.symbol + " )"}`} Price Chart</h2>
						<section className='filteration'>
							<section className='left-side'>
								<section className='tabs'>
									{buttonsLeftTabsData?.map((btn, btnIdx) => (
										<button key={btnIdx}>{btn}</button>
									))}
								</section>
							</section>
							<section className='right-side'>
								<section className='tabs'>
									{buttonsRightTabsData?.map((btn, btnIdx) => (
										<button key={btnIdx}>{btn}</button>
									))}
								</section>
							</section>
						</section>
						<section className='right-side-filter'>
							<section className='tabs'>
								{buttonsRightTabsDataDown?.map((btn, btnIdx) => (
									<button key={btnIdx}>{btn}</button>
								))}
							</section>
						</section>
						<section className='right-side-filter'>
							<p>Logrithmic</p>
						</section>
						<div className='middle-margin' />
						<section className='graph-container'>
							<SparklineChart arr={coin?.market_data?.sparkline_7d?.price} />
						</section>
					</section>
					<section className='right-grid-content'>
						<section className='detail-table'>
							<h2>
								<span>{coin?.name}</span> Price and Market Stats
							</h2>
							<section className='row'>
								<p>
									<span>{coin?.name}</span> Price
								</p>
								<p>${coin?.market_data?.current_price?.usd}</p>
							</section>
							<section className='row'>
								<p>Market Cap</p>
								<p>${coin?.market_data?.market_cap?.usd}</p>
							</section>
							<section className='row'>
								<p>Market Cap Dominance</p>
								<p>{coin?.market_data?.market_cap_change_percentage_24h}%</p>
							</section>
							<section className='row'>
								<p>Total Volume</p>
								<p>${coin?.market_data?.total_volume?.usd}</p>
							</section>
							<section className='row'>
								<p>24h Low / 24h High</p>
								<p>
									${coin?.market_data?.low_24h?.usd} / $
									{coin?.market_data?.high_24h?.usd}
								</p>
							</section>
							<section className='row'>
								<p>24h Low / 24h High</p>
								<p>
									${coin?.market_data?.low_24h?.usd} / $
									{coin?.market_data?.high_24h?.usd}
								</p>
							</section>
							<section className='row'>
								<p>7d Low / 24h High</p>
								<p>
									${coin?.market_data?.price_change_percentage_7d} / $
									{coin?.market_data?.price_change_percentage_24h}
								</p>
							</section>
							<section className='row'>
								<p>Market Cap Rank</p>
								<p>
									{"#"}
									{coin?.market_cap_rank}
								</p>
							</section>
						</section>
					</section>
				</section>
			</section>

			<TrendingCoins />
		</div>
	)
})
const tabs = [
	"Overview",
	"Markets",
	"Charts",
	"Historical Data",
	"News",
	"Bitcoin Halving Countdown",
]

const buttonsData = [
	"General",
	"Social",
	"Developer",
	"Widgets",
	"Ratings",
	"Analytics",
	"Beam Updates",
]

const buttonsLeftTabsData = ["Price", "Market Cap", "Trading View"]

const buttonsRightTabsData = [
	"24h",
	"7d",
	"14d",
	"30d",
	"90d",
	"180d",
	"1y",
	"Max",
]

const buttonsRightTabsDataDown = ["Up", "Down", "Mode"]
