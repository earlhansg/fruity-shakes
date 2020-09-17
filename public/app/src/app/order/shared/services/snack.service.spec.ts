import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SnackService } from './snack.service';

describe('SnackService', () => {
  let injector: TestBed;
  let service: SnackService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SnackService, { provide: 'API_URL', useValue: 'http://localhost:3000' }],
    });

    injector = getTestBed();
    service = injector.inject(SnackService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const dummySnackListResponse = [
    {
        _id: '5f4f5cd02f191ed41fb69e3',
        name: 'Burger',
        price: 300,
        imageUrl: 'assets/images/snacks/burger.jpg'
    },
    {
        _id: '5f4f5cf32f191ed41fb69e39',
        name: 'Default',
        price: 700,
        imageUrl: 'assets/images/snacks/default.jpg'
    },
    {
        _id: '5f4f5d642f191ed41fb69e47',
        name: 'French fries',
        price: 500,
        imageUrl: 'assets/images/snacks/french-fries.jpg'
    },
    {
        _id: '5f4f5d6f2f191ed41fb69e4a',
        name: 'Potato chips',
        price: 100,
        imageUrl: 'assets/images/snacks/potato-chips.jpg'
    },
    {
        _id: '5f4f5d9e2f191ed41fb69e5a',
        name: 'Sandwich',
        price: 900,
        imageUrl: 'assets/images/snacks/sandwich.jpg'
    },
    {
        _id: '5f4f5dc32f191ed41fb69e6a',
        name: 'Shawarma',
        price: 900,
        imageUrl: 'assets/images/snacks/shawarma.jpg'
    }
  ]

  it('getSnacks() should return data', () => {
    service.url = '/snack';
    service.getSnacks().subscribe((res) => {
      expect(res).toEqual(dummySnackListResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/snack');
    expect(req.request.method).toBe('GET');
    req.flush(dummySnackListResponse);
  });

});