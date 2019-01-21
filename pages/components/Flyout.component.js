class Flyout {
    constructor(element) {
        this.element = element;
    }

    get self() { return this.element }
    get hoverMenu() { return this.element.$('.navigation-desktop-with-flyout .active .navigation-desktop-flyout .navigation-desktop-flyout-col2') }
    get hoveredMenuListItem() { return this.element.$$('.navigation-desktop-with-flyout.active .navigation-desktop-flyout-link') }

    hoverToCategory() {
        console.log("Gg")
    }
    
}

module.exports = Flyout;