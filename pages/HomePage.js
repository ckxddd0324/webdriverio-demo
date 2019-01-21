import Page from "./Page.js";

class Homepage extends Page {
	get searchInput() { return $('#gh-ac') }
	get submitBtn() { return $('#gh-btn') }
	get dailyDealLink() { return $('#gh-p-1') }
	get carouselContent() { return $('.hl-color-block-banner__content') }

	enterSearchText(text) {
		this.searchInput.setValue(text);
	}

	waitForCarouselExist() {
		const carouselContent = this.carouselContent;
		browser.waitUntil(() => {
			return carouselContent.isVisible() === true;
		}, 5000, 'expected text to be different after 5s')
		return true;
	}
}

module.exports = Homepage;
