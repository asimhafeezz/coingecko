import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines"
import PropTypes from "prop-types"

export const SparklineChart = ({ arr, fixed = false }) => (
	<Sparklines
		data={arr}
		style={{ width: fixed ? "100px" : "auto", height: "auto" }}
		limit={20}>
		<SparklinesLine
			style={{
				strokeWidth: 1,
				stroke: "#668fff",
				fill: "#5683ff",
			}}
		/>
		<SparklinesSpots spotColors={["red", "green"]} size={2} />
	</Sparklines>
)

SparklineChart.prototype = {
	arr: PropTypes.array.isRequired,
	fixed: PropTypes.bool,
}
