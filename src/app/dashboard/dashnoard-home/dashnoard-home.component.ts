import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashnoard-home',
  templateUrl: './dashnoard-home.component.html',
  styleUrls: ['./dashnoard-home.component.scss']
})
export class DashnoardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.loadProgressBar();

  }

  showDropDownMenuStats = () => {
    alert("Dropdown is shown ? ");
  }

  loadProgressBar = () => {
    var val = 45;
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 100;
    }
    else{
      var r:any = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  }
}
