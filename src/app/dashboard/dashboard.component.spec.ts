import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DashboardComponent } from './dashboard.component';
import { SplashComponent } from './splash/splash.component';
import { UpdateSplashComponent } from './update-splash/update-splash.component';
import { FatalComponent } from './fatal/fatal.component';
import { StopComponent } from './stop/stop.component';
import { LogoComponent } from './logo/logo.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        SplashComponent,
        UpdateSplashComponent,
        FatalComponent,
        StopComponent,
        LogoComponent
      ],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
