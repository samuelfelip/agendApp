import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { PersonService } from'../../../services/person.service';
import { Person } from'../../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(
  private personService : PersonService

  ) { }

  ngOnInit() {
    this.personService.getPeople();
    this.resetForm();
  }
  onSubmit(personForm:NgForm){
    this.personService.addPerson(personForm.value);
    this.resetForm(personForm);
  }

  resetForm(personForm?:NgForm){
    if(personForm != null){
      personForm.reset();
      this.personService.selectedPerson=new Person();
    }
  }

}
