import { Component, OnInit } from '@angular/core';
import { FlisService } from 'src/app/services/flis.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-dn',
  templateUrl: './create-dn.component.html',
  styleUrls: ['./create-dn.component.scss']
})
export class CreateDnComponent implements OnInit {

  public Fabric: any = {
    ident: "9945820",
    name: "FLIS/F T15 (2424) 24 450/225"
  };

  public FabricList: any;
  public searchFlis = '';

  public enabledFleece:boolean = true;
  public enabledFabric:boolean = false;

  constructor(private Flis: FlisService) {}
  
  
   isEditable = true;

  ngOnInit(): void {
    this.getFlisLis();
  }
  selectFlisItem = (itemID: any) => {
    let item = this.FabricList.find((element:any) => element.id == itemID);
    
    this.Fabric = {
      ident: item.ident,
      name: item.name
    }

    $('.flisDNMenu').fadeToggle();
    
  }
  showDNMenu = () => {
    $('.flisDNMenu').fadeToggle();
  }

  enableFleece = () => {
    this.enabledFleece = !this.enabledFleece;
    switch(this.enabledFleece){
      case true:
        $('.enableFleece').removeClass('bg-gray-200');
        $('.enableFleece').addClass("bg-indigo-600");
    
        $('.enableFleece span').removeClass('translate-x-0');
        $('.enableFleece span').addClass('translate-x-5');
        $('.showDN').addClass("hidden");
        $('.showDN').fadeOut();
        this.enabledFleece = true;

        break;
      default:
        $('.enableFleece').removeClass("bg-indigo-600");
        $('.enableFleece').addClass('bg-gray-200');
    
        $('.enableFleece span').removeClass('translate-x-5');
        $('.enableFleece span').addClass('translate-x-0');

        $('.showDN').removeClass("hidden");
        $('.showDN').fadeIn();
      break;
    }
  }

  enableFabric = () => {
    this.enabledFabric = !this.enabledFabric;
    switch(this.enabledFabric){
      case true:
        $('.enableFabric').removeClass('bg-gray-200');
        $('.enableFabric').addClass("bg-indigo-600");
    
        $('.enableFabric span').removeClass('translate-x-0');
        $('.enableFabric span').addClass('translate-x-5');
        $('.show-fabric').removeClass("hidden");
        $('.show-fabric').fadeIn();
        this.enabledFabric = true;

        break;
      default:
        $('.enableFabric').removeClass("bg-indigo-600");
        $('.enableFabric').addClass('bg-gray-200');
        $('.enableFabric span').removeClass('translate-x-5');
        $('.enableFabric span').addClass('translate-x-0');
        $('.show-fabric').addClass("hidden");
        $('.show-fabric').fadeOut();
        this.enabledFabric = false;

      break;
    }
  }

  getFlisLis = () => {
   this.Flis.getFlisList().subscribe(
      (response: any) => {
        let seznam = response?.seznam;
        this.FabricList = seznam;
      } 
   );
  }


}
