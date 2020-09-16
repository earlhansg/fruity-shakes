import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderComponent } from './order.component';
import { SharedModule } from '@order/shared/shared.module';

import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

describe('OrderComponent', () => {
    let component: OrderComponent;
    let fixture: ComponentFixture<OrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderComponent],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                ModalModule.forRoot(),
                SharedModule,
                RouterTestingModule
            ],
            providers: [
                BsModalService,
                BsModalRef
            ]
        })
        .compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(OrderComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});