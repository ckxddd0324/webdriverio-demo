import Page from "./Page.js";

class MyCartPage extends Page {
    get mainTitle() { return $(`.main-title`) }
    get addedItem() { return $(`.grid__group.details`) }
    get emptyMessage() { return $(`.font-title-3`) }
    get signInBtn() { return $(`.sign-in`) }
    get startShoppingBtn() { return $(`.start-shop`) }


	waitForTitleExist() {
		const elementToWait = this.mainTitle;
		browser.waitUntil(() => {
			return elementToWait.isVisible() === true;
		}, 5000, 'expected text to be different after 5s')
		return true;
	}
}

module.exports = MyCartPage;