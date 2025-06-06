import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    GreetingComponent,
    CounterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pageTitle = signal('Home Page');
  greetingMessage = signal('Home Page is Weasome!');
}
