import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonRequestComponent } from './json-request.component';

describe('JsonRequestComponent', () => {
  let component: JsonRequestComponent;
  let fixture: ComponentFixture<JsonRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
