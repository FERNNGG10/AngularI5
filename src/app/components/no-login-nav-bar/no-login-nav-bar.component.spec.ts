import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginNavBarComponent } from './no-login-nav-bar.component';

describe('NoLoginNavBarComponent', () => {
  let component: NoLoginNavBarComponent;
  let fixture: ComponentFixture<NoLoginNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoLoginNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoLoginNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
