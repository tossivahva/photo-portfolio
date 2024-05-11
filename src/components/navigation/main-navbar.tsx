import { DesktopNavbar } from "./desktop/desktop-navbar";
import { MobileNavbar } from "./mobile/mobile-navbar";

const MainNavbar = () => {
	return (
		<>
			<DesktopNavbar/>
			<MobileNavbar/>
		</>
	);
};

export default MainNavbar;
