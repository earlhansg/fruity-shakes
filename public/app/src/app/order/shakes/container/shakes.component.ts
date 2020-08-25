import { Component } from '@angular/core';

@Component({
    selector: 'app-shakes',
    templateUrl: './shakes.component.html',
    styleUrls: [ './shakes.component.scss' ]
})
export class ShakesComponent {

    shakes = [
        {
            name: 'Mango',
            src: 'assets/images/shakes/mango.jpg',
            price: 300
        },
        {
            name: 'Watermelon',
            src: 'assets/images/shakes/watermelon.jpg',
            price: 700
        },
        {
            name: 'Strawberry',
            src: 'assets/images/shakes/strawberry.jpg',
            price: 500
        },
        {
            name: 'Banana',
            src: 'assets/images/shakes/banana.jpg',
            price: 100
        },
        {
            name: 'Vanilla',
            src: 'assets/images/shakes/vanilla.jpg',
            price: 900
        }
    ]
    constructor() {}

}