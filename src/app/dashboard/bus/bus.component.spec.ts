import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusComponent } from './bus.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './../logo/logo.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FloorComponent } from './../floor/floor.component';


describe('BusComponent', () => {
  let component: BusComponent;
  let fixture: ComponentFixture<BusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusComponent, LogoComponent,FloorComponent ],
      imports: [ MatCardModule, MatProgressSpinnerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
