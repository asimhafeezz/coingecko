import { Footer, Navbar } from "../components"
import { BrowserRouter as Router } from "react-router-dom"

export const Layout = ({ children }) => {
	return (
		<Router>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</Router>
	)
}
