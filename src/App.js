//css
import "./style/main.scss"

//react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//page
import { Layout } from "./common/layout"
import { Detailpage, Homepage } from "./pages"

const App = () => {
	return (
		<Layout>
			<Router>
				<Switch>
					<Route path='/' component={Homepage} />
					<Route path='/coins/:id' component={Detailpage} />
				</Switch>
			</Router>
		</Layout>
	)
}

export default App
