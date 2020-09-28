import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { AuthFormComponent } from './auth-form.component';


describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthFormComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be empty array', () => {
    fixture.detectChanges();
    expect(component.userForm.get('entryId').value).toBeNull();
  });

  const entryId = '200011111000';

  it('form should be equal mock entryId', () => {
    component.userForm.setValue({entryId});
    fixture.detectChanges();
    expect(component.userForm.get('entryId').value).toEqual(entryId);
  });

  it('form should be reset when onFormSubmit method is called', () => {
    component.userForm.setValue({entryId});
    fixture.detectChanges();
    expect(component.userForm.get('entryId').value).toEqual(entryId);
    component.onFormSubmit();
    fixture.detectChanges();
    expect(component.userForm.get('entryId').value).toBeNull();
  });

  it('button should be disabled', () => {
    expect(element.nativeElement.querySelector('button').disabled).toBe(true);
  });

  it('error message should be hidden', () => {
    expect(element.nativeElement.querySelector('.text-danger')).toBeNull();
  });

});