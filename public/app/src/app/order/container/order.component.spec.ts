import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from '@order/shared/shared.module';

import { CartService } from '@order/shared/services/cart.service';
import { ReceiptService } from '@order/shared/services/receipt.service';

import { OrderComponent } from './order.component';
import { PaymentModalComponent } from '@order/shared/components/payment-modal/payment-modal.component';


describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let service: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderComponent,
        PaymentModalComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ModalModule.forRoot(),
        SharedModule
      ],
      providers: [
        BsModalService,
        BsModalRef,
        CartService,
        ReceiptService,
        { provide: 'API_URL', useValue: 'http://localhost:3000' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CartService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be empty array', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.form.get('items').value).toEqual([]);
  });

  const newItem = {_id: '221111', name: 'Mango', quantity: 1, price: 200 }

  it('Cart should service initialize with default value and remove', () => {
    component.ngOnInit();
    fixture.detectChanges();
    service.addtoCart(newItem);
    fixture.detectChanges();
    expect(component.form.get('items').value).toEqual([newItem]);
    const group = { index: 0 }
    component.onRemoveItem(group)
    fixture.detectChanges();
    expect(component.form.get('items').value).toEqual([]);
  });

  it('should open PaymentModalComponent', () => {
    const cartSubTotal = 200;
    const cartTax = 20;
    const cartTotal = 220;
    component.onPay([cartSubTotal, cartTax, cartTotal]);
    fixture.detectChanges();
    expect(component.bsModalRef.content.isClose.value).toEqual(false);
    component.bsModalRef.content.isClose.next(true);
  });

});