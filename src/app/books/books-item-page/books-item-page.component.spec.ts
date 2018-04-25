import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemPageComponent } from './books-item-page.component';

describe('BooksItemPageComponent', () => {
  let component: BooksItemPageComponent;
  let fixture: ComponentFixture<BooksItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
