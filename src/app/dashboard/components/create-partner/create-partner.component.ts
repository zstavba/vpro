import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss']
})
export class CreatePartnerComponent implements OnInit {

  public isEditable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
