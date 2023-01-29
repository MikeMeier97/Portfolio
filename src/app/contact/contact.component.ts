import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
    sendButton.disabled = true; // todo style


    // todo load animation 
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
      // todo text anzeigen "gesendet"
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
