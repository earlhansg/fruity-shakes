import { Component, OnInit } from '@angular/core';
// service
import { SnackService } from '@app/order/shared/services/snack.service';
// rxjs 
import { Observable } from 'rxjs';
// model
import { Order } from '@app/order/shared/models/order.model';
// icon
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-snacks',
    templateUrl: './snacks.component.html',
    styleUrls: [ './snacks.component.scss' ]
})
export class SnacksComponent implements OnInit {

snacks$: Observable<Order[]>;
faSpinner = faSpinner;

constructor(private snackService: SnackService) {}

ngOnInit() {
    this.snacks$ = this.snackService.getSnacks();
}

}