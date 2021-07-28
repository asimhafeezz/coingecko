import { NavbarFooter, NavbarTop } from "../components"

export const Layout = ({ children }) => {
	return (
		<>
			<NavbarTop />
			<main>{children}</main>
			<NavbarFooter />
		</>
	)
}
