import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureComponent } from './facture.component';
import {HttpClientModule} from "@angular/common/http";

describe('FactureComponent', () => {
  let component: FactureComponent;
  let fixture: ComponentFixture<FactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
