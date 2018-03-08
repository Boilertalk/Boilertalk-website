import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMissingComponent } from './page-missing.component';

describe('PageMissingComponent', () => {
  let component: PageMissingComponent;
  let fixture: ComponentFixture<PageMissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
