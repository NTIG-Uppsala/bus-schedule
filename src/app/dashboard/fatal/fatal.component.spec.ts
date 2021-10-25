import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FatalComponent } from './fatal.component';
import { LogoComponent } from './../logo/logo.component';
import { FloorComponent } from './../floor/floor.component';

describe('FatalComponent', () => {
  let component: FatalComponent;
  let fixture: ComponentFixture<FatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatalComponent, LogoComponent, FloorComponent, ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
