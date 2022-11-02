import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
import { FlisService } from 'src/app/services/flis.service';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  public dataArray: any = [1,2,3,4,5,6,7,8];
  public thicknessAVG:any = 0.0;
  public gramature: any = 0;
  public permeability: any = 0;


  basicInformation = new FormGroup({
    article_id: new FormControl(),
    article_name: new FormControl(),
    article_number: new FormControl(),
    article_number_dn: new FormControl(),
    article_serial_number: new FormControl(),
    article_quantity: new FormControl(),
    article_length: new FormControl(),
    article_width: new FormControl(),
  });

  grmatureThicnkess = new FormGroup({
    article_meters_square: new FormControl(),
    article_kg: new FormControl(),
    article_gramature:  new FormArray(this.dataArray.map((data: any) =>  new FormControl())),
    article_thicnkess:  new FormArray(this.dataArray.map((data: any) =>  new FormControl())),
    article_gramature_avg: new FormControl(),
    article_thicnkess_avg: new FormControl(),
    article_permeability: new FormArray(this.dataArray.map((data: any) =>  new FormControl())),
    article_permeability_avg: new FormControl()

  });


  isEditable = true;

  public Fabric: any = {
    ident: "9945820",
    name: "TK. PES 55/45 240CM BT Konus S"
  };

  public FabricList: any;

  constructor(private _formBuilder: FormBuilder, private Flis: FlisService) {}

  ngOnInit(): void {
    this.getFlisList();
    this.getFabricList();
  }

  showDropDown = () => {
    $('.fabric_list').fadeToggle();
  }

  getFlisList = () => {
    this.Flis.getFlisList().subscribe((response: any) => {
        console.log(response);
    });
  }

  getFabricList = () => {
    this.Flis.getFabricList().subscribe((response: any) => {
        this.FabricList = response.seznam;
    });
  }

  getFabricIem = (ident:string) => {
    this.Flis.getFabricByIdent(ident).subscribe(
      (response) => {
        const tkanina = response.tkanina;
        this.Fabric = {
          ident: tkanina.ident,
          name: tkanina.fabric_name
        };
      }

    );
  }


  calculateAverage = (className: string, valueType: string) => {
    let array:any = new Array();
    $(className).each((key,value) => {
       array.push($(value).val());
    });
    let count: number;
    let total: number;
    
    const average = array.reduce((a:number,b:number) => Number(a) + Number(b), 0) ;
    const avg = (average / array.length);
    switch(valueType){
      case 'thicnkess':
        this.thicknessAVG = avg.toFixed(2);
        this.grmatureThicnkess.patchValue({
          article_thicnkess_avg: this.thicknessAVG
        });
        break;
        case "gramature":
          this.gramature = avg.toFixed(2);
          var calculateKG = Number($('.article_meters_square').val()) * this.gramature / 1000;
          this.grmatureThicnkess.patchValue({
            article_gramature_avg: this.gramature
          });
          $("#article_kg").val(calculateKG.toFixed(2));
          this.grmatureThicnkess.patchValue({
            article_kg: calculateKG.toFixed(2)
          });
        break;
        case "permeability":
            this.permeability = avg.toFixed(2);
            this.grmatureThicnkess.patchValue({
              article_permeability_avg: this.permeability
            });
        break;
    }
  }

  getFirstFormData = () => {
    var dolzina: any = this.basicInformation.get("article_length")?.value;
    var sirina: any = this.basicInformation.get("article_width")?.value;

    var calculate = Number(dolzina) * Number(sirina) / 100;

    this.grmatureThicnkess.patchValue({
      article_meters_square: calculate
    });

    $('.article_meters_square').val(calculate);
    
    console.log(this.basicInformation.value);

  }
  getSecondValue = () => {
    console.log(this.grmatureThicnkess.value);
  }

}
