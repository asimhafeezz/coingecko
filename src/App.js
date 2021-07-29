//css
import "./style/main.scss"

//react router dom
import { Route, Switch } from "react-router-dom"
//page
import { Layout } from "./common/layout"
import { Detailpage, Homepage } from "./pages"

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/coins/:id' component={Detailpage} />
			</Switch>
		</Layout>
	)
}

export default App
