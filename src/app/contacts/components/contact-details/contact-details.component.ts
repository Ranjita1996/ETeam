import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;
  isDeleted: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // todo: Read URL Parameter in Angular
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(contactId)
      .subscribe((res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalOpenHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateHandler(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
    .subscribe((res: any) => {
      console.log(res);
      if (res && res.id) {
        this.isUpdated = true;
        this.contactData = res;
      }
    });
  }

  deleteContactHandler(): void {
    this.contactService.deleteContact(this.duplicateContactData)
    .subscribe((res: Contact) => {
      console.log(res.id);
      if (res.id === undefined) {
        this.isDeleted = true;
      }
      else {
        this.isDeleted = false;
      }
    });
  }
}