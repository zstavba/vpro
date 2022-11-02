import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss']
})
export class CreatePartnerComponent implements OnInit {

  public isEditable: boolean = true;

  partnerBasicInformation = new FormGroup({
    partner_name:  new FormControl(),
    parener_address: new FormControl(),
    partner_type: new FormControl(),
    partner_zip_code: new FormControl(),
    partner_location: new FormControl(),
    partner_country: new FormControl(),
    partner_language: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
