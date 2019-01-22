import Page from "./Page.js";

class CategoryPage extends Page {
	get title() { return $('#itemTitle') }
	get imageSection() { return $('#icImg') }
	get addToCartBtn() { return $('#atcRedesignId_btn') }
	get addedItemModal() { return $(`.atcOlay.oly.old`) }
	get goToCartBtn() { return $('a.btn.btn-scnd.vi-VR-btnWdth-XL:nth-of-type(2)') }

	waitForItemDetailPage() {
		const elementToWait = this.title;
		browser.waitUntil(() => {
			return elementToWait.isVisible() === true;
		}, 5000, 'expected text to be different after 5s')
		return true;
	}

	waitForAddedItemModal() {
		const elementToWait = this.addedItemModal;
		browser.waitUntil(() => {
			return elementToWait.isVisible() === true;
		}, 5000, 'expected text to be different after 5s')
	}
}

module.exports = CategoryPage;
