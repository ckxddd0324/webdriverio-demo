import { When } from 'cucumber';

import HomePage from '../pages/HomePage';
import DailyDealPage from '../pages/DailyDealPage';

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
    /^Click the daily deal link$/,
    async function() {
        const homePage = new HomePage(this.driver);
        homePage.dailyDealLink.click();
    }
)

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