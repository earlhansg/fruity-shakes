import { Component } from '@angular/core';

@Component({
    selector: 'app-snacks',
    templateUrl: './snacks.component.html',
    styleUrls: [ './snacks.component.scss' ]
})
export class SnacksComponent {

    snacks = [
        {
            name: 'Burger',
            src: 'assets/images/snacks/burger.jpg',
            price: 300
        },
        {
            name: 'Default',
            src: 'assets/images/snacks/default.jpg',
            price: 700
        },
        {
            name: 'French fries',
            src: 'assets/images/snacks/french-fries.jpg',
            price: 500
        },
        {
            name: 'Potato chips',
            src: 'assets/images/snacks/potato-chips.jpg',
            price: 100
        },
        {
            name: 'Sandwich',
            src: 'assets/images/snacks/sandwich.jpg',
            price: 900
        },
        {
            name: 'Shawarma',
            src: 'assets/images/snacks/shawarma.jpg',
            price: 900
        }
    ]
    constructor() {}

}