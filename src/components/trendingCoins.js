import React, { useRef } from "react"
import { LeftArrowIcon, RightArrowIcon } from "../icons/index"

export const TrendingCoins = React.memo(() => {
	//ref
	const cardsRef = useRef()

	//scroll button handler
	const moveScroll = scrollOffset => {
		cardsRef.current.scrollLeft += scrollOffset
	}

	return (
		<section className='trending-coins'>
			<section className='head'>
				<h2>Trending Coins</h2>
				<section className='buttons-section'>
					<button>
						<LeftArrowIcon onClick={() => moveScroll(-200)} />
					</button>
					<button onClick={() => moveScroll(200)}>
						<RightArrowIcon />
					</button>
				</section>
			</section>
			<section className='cards' ref={cardsRef}>
				{cardsData?.map((info, infoIdx) => (
					<Card
						key={infoIdx}
						title={info?.title}
						img={info?.img}
						price={info?.price}
					/>
				))}
			</section>
		</section>
	)
})

const Card = React.memo(({ img, title, price }) => (
	<section className='card'>
		<img src={img} alt='imgs' />
		<section className='content'>
			<h4>{title}</h4>
			<p>${price}</p>
		</section>
	</section>
))

//cards data
const cardsData = [
	{
		title: "CryptoBlades",
		price: "20.03",
		img: "/cryptoblade.webp",
	},
	{
		title: "CryptoBlades",
		price: "20.03",
		img: "/cryptoblade.webp",
	},
	{
		title: "CryptoBlades",
		price: "20.03",
		img: "/cryptoblade.webp",
	},
	{
		title: "CryptoBlades",
		price: "20.03",
		img: "/cryptoblade.webp",
	},
	{
		title: "CryptoBlades",
		price: "20.03",
		img: "/cryptoblade.webp",
	},
]
