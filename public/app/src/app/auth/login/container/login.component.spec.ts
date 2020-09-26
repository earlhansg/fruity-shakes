import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { LoginModule } from '@app/auth/login/login.module';
import { routes } from '@app/auth/auth-routing.module';

import { AuthService } from '@app/auth/shared/services/auth.service';

import { LoginComponent } from '@app/auth/login/container/login.component';

describe('OrderComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        LoginModule
      ],
      providers: [
        AuthService,
        { provide: 'API_URL', useValue: 'http://localhost:3000' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in this url /auth/login', fakeAsync(() => {
    router.navigate(['auth']);
    tick()
    fixture.detectChanges()
    expect(location.path()).toBe('/auth/login')
  }))

  it('should called onSubmittedForm method', fakeAsync(() => {
    spyOn(component, 'onSubmittedForm').and.callThrough()
    component.onSubmittedForm('2011100690')
    tick();
    fixture.detectChanges()
    expect(component.onSubmittedForm).toHaveBeenCalled()
  }))

});