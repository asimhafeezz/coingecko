import { SparklineChart } from "./SparklineChart"

export const CoinRow = ({
	srNo,
	coinName,
	symbol,
	img,
	price,
	hr1,
	h24,
	d7,
	h24Volume,
	mktCap,
	last7Days,
	onClickHandler,
}) => {
	return (
		<section className='values' onClick={onClickHandler}>
			<section className='value'>
				<p>{srNo}</p>
			</section>
			<section className='badge-value'>
				<img src={img} alt={symbol} />
				<h4>{coinName}</h4>
				<section className='badge'>
					<p>{symbol}</p>
					<p>
						<small>Buy</small>
					</p>
				</section>
			</section>
			<section className='value'>
				<p>${price}</p>
			</section>
			<section className='value'>
				<p>{hr1}%</p>
			</section>
			<section className='value'>
				<p>{h24}%</p>
			</section>
			<section className='value'>
				<p>{d7}%</p>
			</section>
			<section className='value'>
				<p>${h24Volume}</p>
			</section>
			<section className='value'>
				<p>${mktCap}</p>
			</section>
			<section className='chart-value'>
				<SparklineChart arr={last7Days} />
			</section>
		</section>
	)
}
