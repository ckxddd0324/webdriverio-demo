import Flyout from '../components/Flyout.component';

class DesktopNavigation {
    constructor(element) {
        this.element = element;
    }

    get self() { return this.element }
}

module.exports = DesktopNavigation;