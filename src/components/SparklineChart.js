import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines"
import PropTypes from "prop-types"

export const SparklineChart = ({ arr }) => (
	<Sparklines data={arr} style={{ width: "auto", height: "auto" }} limit={20}>
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
}
