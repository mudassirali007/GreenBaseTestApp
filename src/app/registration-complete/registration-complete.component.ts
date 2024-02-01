import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-complete',
  standalone: true,
  imports: [],
  templateUrl: './registration-complete.component.html',
  styleUrl: './registration-complete.component.css'
})
export class RegistrationCompleteComponent {
  constructor() { }

  resendConfirmation() {
    // Logic to resend the email confirmation
    console.log('Resend confirmation email logic goes here.');
  }
}
