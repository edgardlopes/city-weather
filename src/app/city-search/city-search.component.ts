import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  template: `
          <form [formGroup]="form">
            <input type="text" class="form-control" formControlName="cityName" placeholder="Nome da cidade...">
          </form>  
`
})
export class CitySearchComponent implements OnInit {

  form: FormGroup
  cityName: FormControl = new FormControl('')

  @Output() 
  searched = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      cityName: this.cityName      
    })

    this.cityName.valueChanges.pipe(debounceTime(1000)).subscribe(city => {
      this.searched.emit(city)
    })

  }

}
