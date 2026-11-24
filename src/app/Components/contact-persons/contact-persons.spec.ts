import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersons } from './contact-persons';

describe('ContactPersons', () => {
  let component: ContactPersons;
  let fixture: ComponentFixture<ContactPersons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPersons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPersons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
