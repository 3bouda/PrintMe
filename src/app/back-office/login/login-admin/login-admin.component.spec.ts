import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminComponent } from './login-admin.component';
import {HttpClientModule} from "@angular/common/http";

describe('LoginAdminComponent', () => {
  let component: LoginAdminComponent;
  let fixture: ComponentFixture<LoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdminComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
