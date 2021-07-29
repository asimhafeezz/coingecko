import { useHistory } from "react-router-dom"
import { MenuIcon, ProfileIcon } from "../icons"

export const Navbar = () => {
	//use History
	const { push } = useHistory()
	return (
		<nav className='navbar'>
			<section className='top-level'>
				<section>
					{topNavOptions?.map((item, itemIdx) => (
						<p key={itemIdx}>{item}</p>
					))}
					<button>Subscribe</button>
				</section>
				<hr />
			</section>
			<section className='mid-level'>
				<section>
					<MenuIcon className='menu-icon' />
					<img src='/logo.webp' alt='logo' onClick={() => push("/")} />
					<ul>
						{midLevelData?.map((item, itemIdx) => (
							<li key={itemIdx}>{item}</li>
						))}
					</ul>
					<ProfileIcon className='profile-icon' />
				</section>
				<>
					<input type='text' placeholder='Search' />
				</>
			</section>
			<section className='end-level'>
				<ul>
					{endLevelData?.map((item, itemIdx) => (
						<li key={itemIdx}>
							{item?.heading}
							{": "}
							<span className='value'>{item?.value}</span>
						</li>
					))}
				</ul>
			</section>
		</nav>
	)
}

//data
const midLevelData = [
	"Home",
	"Coins",
	"Exchanges",
	"DeFi",
	"NFT",
	"Portfolio",
	"Publications",
	"Resources",
	"Products",
	"Community",
]

const endLevelData = [
	{
		heading: "Coins",
		value: "8902",
	},
	{
		heading: "Exchanges",
		value: "8902",
	},
	{
		heading: "Market Cap",
		value: "$8728902",
	},
	{
		heading: "24h Vol",
		value: "$2438902",
	},
	{
		heading: "Dominance",
		value: "BTC 47.1% ETH 16.8%",
	},
	{
		heading: "ETH Gas",
		value: "33 gwei",
	},
]

const topNavOptions = ["EN", "USD", "Help", "Login", "Sign Up"]
