export interface FilterItems {
    value: any,
    propertyToFilter: string,
    inputName: string,
    apply: (object: {}) => boolean
}

export class EqualFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string, inputName: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
        this.inputName = inputName;
    }


    apply = (object: {}) => object[this.propertyToFilter] === this.value;
}

export class IncludesFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string, inputName: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
        this.inputName = inputName;
    }

    apply = (object: {}) => object[this.propertyToFilter].toUpperCase().includes(this.value.toUpperCase());
}

export class GreaterThanFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
    }

    apply = (object: {}) => object[this.propertyToFilter] > this.value;
}

export class GreaterThanEqualsFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string, inputName: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
        this.inputName = inputName;
    }

    apply = (object: {}) => object[this.propertyToFilter] >= this.value;
}

export class LessThanFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string, inputName: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
        this.inputName = inputName;
    }

    apply = (object: {}) => object[this.propertyToFilter] < this.value;
}

export class LessThanEqualsFilter implements FilterItems {
    value: any;
    propertyToFilter: string;
    inputName: string;

    constructor(value: any, propertyToFilter: string, inputName: string) {
        this.value = value;
        this.propertyToFilter = propertyToFilter;
        this.inputName = inputName;
    }

    apply = (object: {}) => object[this.propertyToFilter] <= this.value;
}