import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopComponent } from './stop.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './../logo/logo.component';
import { FloorComponent } from './../floor/floor.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('StopComponent', () => {
  let component: StopComponent;
  let fixture: ComponentFixture<StopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopComponent, LogoComponent , FloorComponent ,],
      imports: [ MatCardModule, MatProgressSpinnerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
