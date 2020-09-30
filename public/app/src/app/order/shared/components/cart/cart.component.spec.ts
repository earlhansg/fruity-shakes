import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { filter } from 'rxjs/operators';

import { SharedModule } from '@order/shared/shared.module';

import { CartService } from '@order/shared/services/cart.service';

import { CartComponent } from './cart.component';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let fb: FormBuilder;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [
        FormBuilder,
        CartService,
        { provide: 'API_URL', useValue: 'http://localhost:3000' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    cartService = TestBed.inject(CartService);
    component.parent = cartService.form;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const items = [
    {
      _id: '5f4f4df72f191ed41fb69b1c',
      name: 'Mango',
      quantity: 2,
      price: 300
    },
    {
      _id: '5f4f4e862f191ed41fb69b55',
      name: 'Watermelon',
      quantity: 1,
      price: 700
    }
  ]

  const subTotal = 1300;
  const tax = 130;
  const total = 1430;

  it('should initialize the mock data to cart', () => {
    cartService.form.setControl('items', fb.array(items))
    expect(cartService.form.get('items').value).toEqual(items);
  });

  it('should be equal to mock subTotol, tax and total', () => {
    items.map((val, index) => {
      const item =  fb.group(val)
      const itemControl = cartService.form.get('items') as FormArray;
      itemControl.push(item);
      component
      .subTotal
      .pipe(filter(value => value > 0))
      .subscribe(response => expect(response).toEqual(subTotal))
      if(items.length === index + 1) {
        component
        .tax$
        .subscribe(response => expect(response).toEqual(tax))
      }
      component
      .total
      .pipe(filter(value => value === total))
      .subscribe(response => expect(response).toEqual(total))
    })
  });

});