import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { FormBuilder, FormsModule } from '@angular/forms';

describe('StudentsService', () => {
  let injector: TestBed;
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
          CartService,
          FormBuilder
      ],
    });

    injector = getTestBed();
    service = injector.inject(CartService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const items = []

  it('form should initialize to empty', () => {
    expect(service.form.get('items').value).toEqual(items);
  });

  const updatedItems = [
    {_id: '221111', name: 'Mango', quantity: 1, price: 200 }
  ]
  const newItem = {_id: '221111', name: 'Mango', quantity: 1, price: 200 }

  it('form should create items', () => {
    service.addtoCart(newItem);
    expect(service.form.get('items').value).toEqual(updatedItems);
  });

  it('form should reset items', () => {
    service.resetCartForm();
    expect(service.form.get('items').value).toEqual(items);
  });

});