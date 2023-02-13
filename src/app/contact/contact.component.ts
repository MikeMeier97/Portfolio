import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  defaultValue1: string = '';
  defaultValue2: string = '';
  defaultValue3: string = '';
  textDisabled = false; 
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  async sendMail() {
    let nameField = this.name.nativeElement;
    let emailField = this.email.nativeElement;
    let messageField = this.message.nativeElement; 
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true; 
    nameField.classList.remove('ng-invalid', 'ng-valid', 'ng-touched', 'ng-dirty');
    emailField.classList.remove('ng-invalid', 'ng-valid', 'ng-touched', 'ng-dirty');
    messageField.classList.remove('ng-invalid', 'ng-valid', 'ng-touched', 'ng-dirty');
    sendButton.classList.remove('ng-invalid', 'ng-valid', 'ng-touched', 'ng-dirty'); 
    this.textDisabled = true;

    this.defaultValue1 = '';
    this.defaultValue2 = '';
    this.defaultValue3 = '';


    let formDATA = new FormData();
    formDATA.append('name', nameField.value);
    formDATA.append('message', messageField.value);
    formDATA.append('email', emailField.value);
    await fetch('https://mike-meier.info/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formDATA
      }
    )
    document.getElementById('success')?.classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success')?.classList.add('d-none');
    }, 5000);
  }
  public loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ], []),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ], []),
    message: new FormControl('', [
      Validators.required, 
      Validators.minLength(10)
    ], [])
  });
  constructor() {
    this.loginForm.valueChanges.subscribe();
  }
}
