import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialToolsComponent } from '@src/app/components/products/financial-tools/financial-tools.component';

describe('FinancialToolsComponent', () => {
  let component: FinancialToolsComponent;
  let fixture: ComponentFixture<FinancialToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
