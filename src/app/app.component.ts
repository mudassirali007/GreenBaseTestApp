import { Component } from '@angular/core';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationCompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GreenBaseTestApp';
}
