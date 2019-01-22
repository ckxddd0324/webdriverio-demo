import { When } from 'cucumber';

import HomePage from '../pages/HomePage';
import SearchResulePage from '../pages/SearchResultPage';
import DailyDealPage from '../pages/DailyDealPage';
import ItemDetailPage from '../pages/ItemDetailPage';


//Home page
When(    
    /^Enter the search text "([^"]*)?" to the search input field$/,
    async function(text) {
        const homePage = new HomePage(this.driver);
        homePage.enterSearchText(text);
    }
)

When(    
    /^Click the submit search button$/,
    async function() {
        const homePage = new HomePage(this.driver);
        homePage.submitBtn.click();
    }
)

When(    
    /^Click cart button on top nav$/,
    async function() {
        const homePage = new HomePage(this.driver);
        homePage.goToCartBtn.click();
    }
)

When(    
    /^Click the daily deal link$/,
    async function() {
        const homePage = new HomePage(this.driver);
        homePage.dailyDealLink.click();
    }
)

//Search Result page

When(
    /^Update the view if the view is not list-view$/,
    async function() {
        const searchResultPage = new SearchResulePage(this.driver);
        const currentView = searchResultPage.getCurrentViewStyle();
        if(currentView !== 'list-view') {
            console.log(searchResultPage.viewToggle)
            browser.moveToObject(searchResultPage.viewToggle.selector);
            searchResultPage.SwitichViewButton.click();
        }
    }
)

When(
    /^Click the 1st item from the result page$/,
    async function() {
        const searchResultPage = new SearchResulePage(this.driver);
        searchResultPage.firstItemFromResult.click();
    }
    
)
// Daily deal page
When(    
    /^Click the home icon$/,
    async function() {
        const dailyDealPage = new DailyDealPage(this.driver);
        dailyDealPage.homeIcon.click();
    }
)

When(
    /^Mouse hovers to "([^"]*)?" category$/,
    async function(category) {
        const dailyDealPage = new DailyDealPage(this.driver);
        const selectToHover = dailyDealPage.desktopNavBar.flyoutTab.find((tab) => {
            return tab.self.getText() === category;
        });
        browser.moveToObject(`${selectToHover.element.selector}:nth-of-type(${selectToHover.element.index+1})`)
    }
)

//Item Detail page
When(
    /^Add item to the cart$/,
    async function() {
        const itemDetailPage = new ItemDetailPage(this.driver);
        itemDetailPage.addToCartBtn.click();
    }
)

When(
    /^Click go to cart button$/,
    async function() {
        const itemDetailPage = new ItemDetailPage(this.driver);
        itemDetailPage.goToCartBtn.click();
    }
)