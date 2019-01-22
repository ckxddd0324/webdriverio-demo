import Page from "./Page.js";

import SalesTab from "./components/SalesTab.component";

class SearchResultPage extends Page {
	get searchInput() { return $('#gh-ac') }
	get submitBtn() { return $('#gh-btn') }
	get searchResultCount() { return $('.srp-controls__count-heading') }
	get saleTypes() { return $$('.srp-format-tabs-h2').map(input => new SalesTab(input)) }
	get selectedSaleType() { return $('.fake-tabs__item.btn.fake-tabs__item--current') }
	get viewToggle() { return $('.x-flyout.srp-view-options__flyout > button') }
	get currentViewStyle() { return $('.srp-river-results.clearfix > ul')}
	get SwitichViewButton() { return $(`div[class="btn srp-view-options__option "]`) }
	get firstItemFromResult() { return $(`.srp-results.srp-list.clearfix > .s-item:nth-of-type(1) > div  > div > .s-item__link `) }

	enterSearchText(text) {
		this.searchInput.setValue(text);
	}

	getCurrentViewStyle() {
		console.log(this.currentViewStyle.getAttribute('class'));
		const currentStyleView = this.currentViewStyle.getAttribute('class')
		if(currentStyleView === 'srp-results srp-list clearfix') {
			return 'list-view';
		} else if (currentStyleView === 'srp-results srp-grid clearfix') {
			return 'grid-view';
		}
	}
	
}

module.exports = SearchResultPage;
