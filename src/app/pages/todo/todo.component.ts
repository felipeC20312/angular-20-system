import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { GreetingComponent } from '../../components/greeting/greeting.component';

@Component({
  selector: 'app-todo',
  imports: [
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    GreetingComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  pageTitle = signal('Todo Page');
  greetingMessage = signal('Todo Page is Weasome!');
}
