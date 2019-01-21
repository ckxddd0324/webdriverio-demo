import { Given } from 'cucumber';

import Page from '../pages/Page';

Given(
    /^User opens the site$/,
    async function() {
        const page = new Page(this.driver);
        page.openUrl(browser.options.baseUrl);
    }
)