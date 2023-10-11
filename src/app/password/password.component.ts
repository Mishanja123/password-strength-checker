import { Component } from '@angular/core';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent {
  password: string = '';
  sections: string[] = ['grey', 'grey', 'grey'];

  checkPassword() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    const medium = (hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols);
    const strong = hasLetters && hasNumbers && hasSymbols

    const length = this.password.length;

      if (length === 0) {
        this.sections = ['grey', 'grey', 'grey'];
    } else if (length < 8) {
        this.sections = ['red', 'red', 'red'];
    } else if (strong) {
        this.sections = ['green', 'green', 'green'];
    } else if (medium) {
        this.sections = ['yellow', 'yellow', 'grey'];
    } else {
        this.sections = ['red', 'grey', 'grey'];
      }
  }
}