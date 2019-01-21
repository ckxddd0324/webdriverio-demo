import Flyout from '../components/Flyout.component';

class DesktopNavigation {
    constructor(element) {
        this.element = element;
    }

    get self() { return this.element }
    get title() { return this.element.$('h1') }
    get flyoutTab() { return this.element.$$('.navigation-desktop-with-flyout').map(input => new Flyout(input)) }
}

module.exports = DesktopNavigation;