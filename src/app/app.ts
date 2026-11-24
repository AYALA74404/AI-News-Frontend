import { Component, signal } from '@angular/core';
import { ContactPersons } from './Components/contact-persons/contact-persons';
import { Home } from './Components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home, ContactPersons],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AI-news');
}
