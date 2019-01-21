import { Then } from 'cucumber';
import { URL } from 'url';

import HomePage from '../pages/HomePage';
import SearchResulePage from '../pages/SearchResultPage';
import DailyDealPage from '../pages/DailyDealPage';

//util
Then(
    /^User expected to see "([^"]*)?" on the current url pathname$/,
    async function(pathname) {
        const currentURL = new URL(browser.getUrl());
        expect(pathname).to.be.equal(currentURL.pathname);

    }
)

//Home page
Then(
    /^User expected the search text "([^"]*)?" show on the search text field$/,
    async function(text) {
        const homePage = new HomePage(this.driver);
        expect(text).to.be.equal(homePage.searchInput.getValue());
    }
)

Then(
    /^User expected the carousel to show up on home page$/,
    async function() {
        const homePage = new HomePage(this.driver);
        expect(homePage.waitForCarouselExist()).to.be.true;
    }
)

//Result page
Then(
    /^User expected to see all 4 sale types$/,
    async function() {
        const searchResultPage = new SearchResulePage(this.driver);
        searchResultPage.saleTypes.forEach((type) => {
            expect(["All Listings", "Accepts Offers", "Auction", "Buy It Now"]).includes(type.self.getText());
        })
    }
)

Then(
    /^User expected to see "([^"]*)?" sale type is selected$/,
    async function(selectedText) {
        const searchResultPage = new SearchResulePage(this.driver);
        expect(selectedText).to.be.equal(searchResultPage.selectedSaleType.getText());
    }
)

//Daily deal page
Then(
    /^User expected to see all the types of category$/,
    async function() {
        const dailyDealPage = new DailyDealPage(this.driver);
        dailyDealPage.desktopNavBar.flyoutTab.forEach((tab) => {
            expect(["Featured", "Tech", "Fashion", "Home & Garden", "Sporting Goods", "Automotive", "Other Deals"]).includes(tab.self.getText());
        });
    }
)

Then(
    /^User expected to see the hover menu expand$/,
    async function() {
        const dailyDealPage = new DailyDealPage(this.driver);
        console.log(browser.isVisible(dailyDealPage.hoverMenu.selector))
    }
)
