export const Footer = () => {
	return (
		<footer className='footer'>
			<section className='important-text'>
				<p>
					<span className='imp'>IMPORTANT DISCLAIMER: </span>All content
					provided herein our website, hyperlinked sites, associated
					applications, forums, blogs, social media accounts and other platforms
					(“Site”) is for your general information only, procured from third
					party sources. We make no warranties of any kind in relation to our
					content, including but not limited to accuracy and updatedness. No
					part of the content that we provide constitutes financial advice,
					legal advice or any other form of advice meant for your specific
					reliance for any purpose. Any use or reliance on our content is solely
					at your own risk and discretion. You should conduct your own research,
					review, analyse and verify our content before relying on them. Trading
					is a highly risky activity that can lead to major losses, please
					therefore consult your financial advisor before making any decision.
					No content on our Site is meant to be a solicitation or offer.
				</p>
			</section>
			<section className='main-footer'>
				<section className='first-section'>
					<img src='/white-text-logo.webp' alt='logo' />
					<p>
						CoinGecko provides a fundamental analysis of the crypto market. In
						addition to tracking price, volume and market capitalization,
						CoinGecko tracks community growth, open-source code development,
						major events and on-chain metrics.
					</p>
				</section>
				<section className='second-section'>
					<p>CoinGecko</p>
					<ul>
						{coinGeckoLinks?.map((item, itemIdx) => (
							<li key={itemIdx}>{item}</li>
						))}
					</ul>
				</section>
				<section className='third-section'>
					<p>Donations</p>
					<ul>
						{coinGeckoLinks2?.map((item, itemIdx) => (
							<li key={itemIdx}>{item}</li>
						))}
					</ul>
				</section>
				<section className='fourth-section'>
					<p>Interested to stay up-to-date with cryptocurrencies?</p>
					<p>
						Get the latest crypto news, updates, and reports by subscribing to
						our free newsletter.
					</p>
					<p>Your email address</p>
					<input type='text' placeholder='email' />
					<button>Subscribe</button>
				</section>
			</section>
			<section className='end-footer'>
				<ul>
					{coinGeckoLinks3?.map((item, itemIdx) => (
						<li key={itemIdx}>{item}</li>
					))}
				</ul>
				<p>© 2021 CoinGecko. All Rights Reserved.</p>
			</section>
		</footer>
	)
}

//data
const coinGeckoLinks = [
	"About us",
	"Methodology",
	"Careers",
	"Branding Guide",
	"Request Form",
	"Advertising",
	"Developer API",
]

const coinGeckoLinks2 = ["Bitcoin", "Ethereum"]
const coinGeckoLinks3 = ["Disclaimer", "Terms of Services", "Privacy policy"]
