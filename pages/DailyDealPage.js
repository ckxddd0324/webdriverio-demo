import Page from "./Page.js";
import DesktopNavBar from "./components/DesktopNavigation.component";

class DailyDealPage extends Page {
	get searchInput() { return $('#gh-ac') }
	get submitBtn() { return $('#gh-btn') }
	get dailyDealLink() { return $('#gh-p-1') }
	get desktopNavBar() { return new DesktopNavBar($('.navigation-desktop')) }
	get hoverMenu() { return $('.navigation-desktop-with-flyout.active >.navigation-desktop-flyout.navigation-desktop-flyout-col2') }
	get homeIcon() { return $('#gh-la')}

	
}

module.exports = DailyDealPage;
