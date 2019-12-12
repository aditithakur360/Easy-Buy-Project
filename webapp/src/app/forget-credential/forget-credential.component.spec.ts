import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetCredentialComponent } from './forget-credential.component';

describe('ForgetCredentialComponent', () => {
  let component: ForgetCredentialComponent;
  let fixture: ComponentFixture<ForgetCredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetCredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
