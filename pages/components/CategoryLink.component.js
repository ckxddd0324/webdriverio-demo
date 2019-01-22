class CategoryLink {
    constructor(element) {
        this.element = element;
    }

    get title() { return this.element.$('a') }

}

module.exports = CategoryLink;