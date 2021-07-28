import { MenuIcon, ProfileIcon } from "../icons"

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<section className='top-level'>
				<section>
					<p>EN</p>
					<p>USD</p>
					<p>Help</p>
					<p>Login</p>
					<p>Sign Up</p>
					<button>Subscribe</button>
				</section>
				<hr />
			</section>
			<section className='mid-level'>
				<section>
					<MenuIcon className='menu-icon' />
					<img src='/logo.webp' alt='logo' />
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
