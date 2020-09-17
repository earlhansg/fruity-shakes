import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShakeService } from './shake.service';

describe('ShakeService', () => {
  let injector: TestBed;
  let service: ShakeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShakeService, { provide: 'API_URL', useValue: 'http://localhost:3000' }],
    });

    injector = getTestBed();
    service = injector.inject(ShakeService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const dummyShakeListResponse = [
    {
        _id: '5f4f4df72f191ed41fb69b1c',
        name: 'Mango',
        price: 300,
        imageUrl: 'assets/images/shakes/mango.jpg'
    },
    {
        _id: '5f4f4e862f191ed41fb69b55',
        name: 'Watermelon',
        price: 700,
        imageUrl: 'assets/images/shakes/watermelon.jpg'
    },
    {
        _id: '5f4f59052f191ed41fb69dc1',
        name: 'Strawberry',
        price: 500,
        imageUrl: 'assets/images/shakes/strawberry.jpg'
    },
    {
        _id: '5f4f59262f191ed41fb69dd0',
        name: 'Banana',
        price: 100,
        imageUrl: 'assets/images/shakes/banana.jpg'
    },
    {
        _id: '5f4f59652f191ed41fb69de0',
        name: 'Vanilla',
        price: 900,
        imageUrl: 'assets/images/shakes/vanilla.jpg'
    }
  ]

  it('getShakes() should return data', () => {
    service.url = '/shake';
    service.getShakes().subscribe((res) => {
      expect(res).toEqual(dummyShakeListResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/shake');
    expect(req.request.method).toBe('GET');
    req.flush(dummyShakeListResponse);
  });

});