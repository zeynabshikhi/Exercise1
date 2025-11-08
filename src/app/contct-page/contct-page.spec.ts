import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContctPage } from './contct-page';

describe('ContctPage', () => {
  let component: ContctPage;
  let fixture: ComponentFixture<ContctPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContctPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
