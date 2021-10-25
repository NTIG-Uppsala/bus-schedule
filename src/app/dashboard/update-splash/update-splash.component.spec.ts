import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSplashComponent } from './update-splash.component';
import { LogoComponent } from './../logo/logo.component';
import { FloorComponent } from './../floor/floor.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('UpdateSplashComponent', () => {
  let component: UpdateSplashComponent;
  let fixture: ComponentFixture<UpdateSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSplashComponent, LogoComponent, FloorComponent, ],
      imports: [ MatCardModule, MatProgressSpinnerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
