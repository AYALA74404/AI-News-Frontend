import { Component } from '@angular/core';
import { ContactPerson } from './contact-person.model';

@Component({
  selector: 'app-contact-persons',
  imports: [],
  templateUrl: './contact-persons.html',
  styleUrl: './contact-persons.scss',
})
export class ContactPersons {
  contacts: ContactPerson[] = [
    new ContactPerson('דנה כהן', 'dana@example.com', '050-000-0001'),
    new ContactPerson('יואב לוי', 'yoav@example.com', '050-000-0002', false),
    new ContactPerson('נועה ישראלי', 'noa@example.com', '050-000-0003'),
  ];
}
