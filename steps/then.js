import { Then } from 'cucumber';
import { URL } from 'url';

import HomePage from '../pages/HomePage';
import SearchResulePage from '../pages/SearchResultPage';
import DailyDealPage from '../pages/DailyDealPage';
import ItemDetailPage from '../pages/ItemDetailPage';
import MyCartPage from '../pages/MyCartPage';


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

//Item detail page
Then(
    /^User expected item detail page$/,
    async function() {
        const itemDetailPage = new ItemDetailPage(this.driver);
        itemDetailPage.waitForItemDetailPage();
    }
)

Then(
    /^User expected success added item modal$/,
    async function() {
        const itemDetailPage = new ItemDetailPage(this.driver);
        itemDetailPage.waitForAddedItemModal();
        itemDetailPage.addedItemModal.isVisible();
    }
)

// Then(
//     /^User expected success added item modal$/,
//     async function() {
//         const itemDetailPage = new ItemDetailPage(this.driver);
//         itemDetailPage.waitForAddedItemModal();
//         itemDetailPage.addedItemModal.isVisible();
//     }
// )

//My Cart page
Then(
    /^User expected to be on shopping cart page$/,
    async function() {
        const myCartPage = new MyCartPage(this.driver);
        myCartPage.waitForTitleExist();
        expect(myCartPage.mainTitle.getText().search("Shopping cart")).to.be.at.least(0);
    }
)

Then(
    /^User expected there is an item added to the cart$/,
    async function() {
        const myCartPage = new MyCartPage(this.driver);
        expect(myCartPage.addedItem.isVisible()).to.be.true;
    }
)

Then(
    /^User expected the empty state message on cart page$/,
    async function() {
        const myCartPage = new MyCartPage(this.driver);
        expect(`You don't have any items in your cart.`).to.be.equal(myCartPage.emptyMessage.getText());
    }
)

Then(
    /^User expected to see two CTA button$/,
    async function() {
        const myCartPage = new MyCartPage(this.driver);
        expect(myCartPage.signInBtn.isVisible()).to.be.true;
        expect(myCartPage.startShoppingBtn.isVisible()).to.be.true;

    }
)