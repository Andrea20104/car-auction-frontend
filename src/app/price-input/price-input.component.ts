// price-input.component.ts
import { CalculateTotalRequest } from '../models/calculate-total-request.model';
import { ApiService } from '../api.service';
import { CalculateTotalResponse } from '../models/calculate-total-response.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.css']
})

export class PriceInputComponent implements OnInit {
  
  public form: FormGroup;

  requestModel: CalculateTotalRequest = {
    basePrice: 0,
    vehicleType: ''
  };

  responseModel: CalculateTotalResponse = {
    BasicUserFee: 0,
    SellersSpecialFee: 0,
    AssociationFee: 0,
    StorageFee: 0,
    TotalCost: 0,
  };

  constructor(private priceCalculationService: ApiService, private formbuilder: FormBuilder) 
  { 
    this.form = this.formbuilder.group(
      {
        basePrice: ['',{validators:[Validators.required]}],
        vehicleType: ['',{validators:[Validators.required]}]
      })
  }

  ngOnInit(): void {
    this.form.reset({basePrice: 0});
  }

  calculateTotal() {
    const request: CalculateTotalRequest = {
      basePrice: this.form.value.basePrice,
      vehicleType: this.form.value.vehicleType
    };

    console.log(request);

    this.priceCalculationService.calculateTotal(request).subscribe(
      (result : CalculateTotalResponse) => {
        console.log(result)
        this.responseModel.BasicUserFee = result.BasicUserFee;
        this.responseModel.TotalCost = result.TotalCost;
        this.responseModel.SellersSpecialFee = result.SellersSpecialFee;
        this.responseModel.AssociationFee = result.AssociationFee;
        this.responseModel.StorageFee = result.StorageFee;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }
}
