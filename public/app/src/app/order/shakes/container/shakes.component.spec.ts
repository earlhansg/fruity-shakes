import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { SharedModule } from '@order/shared/shared.module';

import { CartService } from '@order/shared/services/cart.service';
import { ShakeService } from '@order/shared/services/shake.service';

import { ShakesComponent } from './shakes.component';


describe('ShakeComponent', () => {
  let component: ShakesComponent;
  let fixture: ComponentFixture<ShakesComponent>;
  let fb: FormBuilder;
  let cartService: CartService;
  let shakeService: ShakeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShakesComponent
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
        {
          provide: ShakeService,
          useValue: {
            getShakes: () => of(
              [
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
                }
              ]
            )
          }
        },
        { provide: 'API_URL', useValue: 'http://localhost:3000' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    cartService = TestBed.inject(CartService);
    shakeService = TestBed.inject(ShakeService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shakes$ should be equal to the mock data',() => {
    spyOn(shakeService, 'getShakes')
    .and
    .callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(shakeService.getShakes).toHaveBeenCalledWith();
    component.shakes$.subscribe((res) => {
      expect(res).toEqual(
        [
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
          }
        ]
      );
    })
  });

  const item = {
    _id: '5f4f4df72f191ed41fb69b1c',
    name: 'Mango',
    quantity: 2,
    price: 300
  }

  it('should add to cart', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.onAddItem(item)
    expect(cartService.form.get('items').value).toEqual([item]);
  });

  it('should not add to cart', () => {
    component.ngOnInit();
    fixture.detectChanges();
    cartService.form.setControl('items', fb.array([item]))
    fixture.detectChanges();
    expect(cartService.form.get('items').value).toEqual([item]);
  });

});