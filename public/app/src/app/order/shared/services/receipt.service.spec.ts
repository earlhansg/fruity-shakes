import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReceiptService } from './receipt.service';

describe('ReceiptService', () => {
  let injector: TestBed;
  let service: ReceiptService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReceiptService, { provide: 'API_URL', useValue: 'http://localhost:3000' }],
    });

    injector = getTestBed();
    service = injector.inject(ReceiptService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const newReceipt = {
    items: [
        {
            _id: '5f4f4df72f191ed41fb69b1c',
            quantity: 3,
            name: 'Mango',
            price: 300
        }
    ],
    subTotal: 300,
    tax: 30,
    total: 330,
    cashReceived: 500,
    change: 170
  }

  it('addReceipt() should add data', () => {
    service.url = '/receipt';
    service.addReceipt(newReceipt).then((res) => {
      expect(res).toEqual(newReceipt);
    });

    const req = httpMock.expectOne('http://localhost:3000/receipt');
    expect(req.request.method).toBe('POST');
    req.flush(newReceipt);
  });

});