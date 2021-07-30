import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { Spinner } from "../common/spinner"
import { LeftArrowIcon, RightArrowIcon } from "../icons"
import { CoinRow } from "./coinRow"
import { Tabs } from "./tabs"

export const CoinsGrid = React.memo(() => {
	//srore
	const coins = useSelector(state => state?.coins)
	const loadingAllCoins = useSelector(state => state?.loadingAllCoins)

	//useHistory
	const { push } = useHistory()

	const goToCoinDetail = id => push(`/coins/${id}`)

	const minimizeValue = value => {
		return value.toString().length >= 10 ? value.toString().slice(0, 10) : value
	}

	return (
		<section className='coins-grid'>
			<Tabs tabs={tabs} firstActiveTab={"Coins"} />
			<section className='header'>
				<h2>Cryptocurrency Prices by Market Cap</h2>
				<p>
					<>
						The global crypto market cap is $1.61 Trillion, a 4.7% change over
						the last day
					</>
				</p>
			</section>
			<section className='util-stuff'>
				<section className='buttons'>
					<button>USB</button>
					<button>All Categories</button>
					<button>Filter</button>
				</section>
				<section className='pagination'>
					<button>
						<LeftArrowIcon />
					</button>
					<button>
						<RightArrowIcon />
					</button>
				</section>
			</section>

			<section className='coins-grid-section'>
				<hr />
				<section className='headers'>
					{headers?.map((item, itemIdx) => (
						<h4 key={itemIdx}>{item}</h4>
					))}
				</section>
				<hr />
				{loadingAllCoins && (
					<div className='spinner-section'>
						<Spinner />
					</div>
				)}
				<section className='body'>
					{coins &&
						coins?.map((coin, coinIdx) => (
							<CoinRow
								key={coin?.id}
								onClickHandler={() => goToCoinDetail(coin?.id)}
								srNo={coinIdx + 1}
								coinName={coin?.name}
								symbol={coin?.symbol}
								price={coin?.current_price}
								hr1={minimizeValue(
									coin?.price_change_percentage_1h_in_currency
								)}
								img={coin?.image}
								h24={minimizeValue(coin?.price_change_percentage_24h)}
								d7={minimizeValue(coin?.price_change_percentage_7d_in_currency)}
								h24Volume={minimizeValue(coin?.total_volume)}
								mktCap={minimizeValue(coin?.market_cap)}
								last7Days={coin?.sparkline_in_7d?.price}
							/>
						))}
				</section>
			</section>
		</section>
	)
})

const tabs = [
	"Portfolio",
	"Coins",
	"Recently Added",
	"Large Mover",
	"Categories",
	"Custom Tabs",
]

const headers = [
	"#",
	"Coin",
	"Price",
	"1h",
	"24h",
	"7d",
	"24h Volume",
	"Mkt Cap",
	"Last 7 Days",
]
