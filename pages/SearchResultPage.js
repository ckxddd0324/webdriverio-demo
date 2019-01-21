import Page from "./Page.js";

import SalesTab from "./components/SalesTab.component";

class SearchResultPage extends Page {
	get searchInput() { return $('#gh-ac') }
	get submitBtn() { return $('#gh-btn') }
	get searchResultCount() { return $('.srp-controls__count-heading') }
	get saleTypes() { return $$('.srp-format-tabs-h2').map(input => new SalesTab(input)) }
	get selectedSaleType() { return $('.fake-tabs__item.btn.fake-tabs__item--current') }

	enterSearchText(text) {
		this.searchInput.setValue(text);
	}

	
}

module.exports = SearchResultPage;
