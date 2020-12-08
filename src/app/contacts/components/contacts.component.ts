import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;


  constructor(private contactService: ContactService) { // 1. connect to the service using dep injection
    console.log('Inside Constructor');
   }

  ngOnInit(): void { // Lifecycle hook
    // ideal place to send ajax calls
    console.log('Inside ngOnInit');

    // 2. send the req to the service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe((res: Contact[]) => { // 3. get the resp from the service
        console.log(res);
        this.contactList = res;
      });
  }

    // will be called when our comp goes out of the view
    ngOnDestroy(): void {
      console.log('Into destroy');
      // ideal place for you to unsubscribe, clear the data, remove intervals
      this.contactsSubscription.unsubscribe();
      if (this.contactList && this.contactList.length > 0) {
        this.contactList.length = 0;
      }
    }

}
