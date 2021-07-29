import Proptypes from "prop-types"
import React, { useState } from "react"

export const Tabs = React.memo(({ tabs, firstActiveTab }) => {
	const [active, setActive] = useState(firstActiveTab && firstActiveTab)
	return (
		<ul className='tabs'>
			{tabs &&
				tabs?.map((item, itemIdx) => (
					<li
						key={itemIdx}
						onClick={() => setActive(item)}
						className={active === item ? "active-tab" : ""}>
						{item}
					</li>
				))}
		</ul>
	)
})

Tabs.prototype = {
	tabs: Proptypes.array.isRequired,
	firstActiveTab: Proptypes.string.isRequired,
}
