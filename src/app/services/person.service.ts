import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Person } from '../models/person';


@Injectable()
export class PersonService {

  peopleList : AngularFireList <any>;
  selectedPerson: Person = new Person();

  constructor(
    private firedb : AngularFireDatabase
  ) { }

  getPeople(){
    return this.peopleList = this.firedb.list('people');
  }

  addPerson(person : Person){
    this.peopleList.push({
      id : person.id,
      name : person.name,
      lastn : person.lastn,
      city : person.city,
      country : person.country,
      phone : person.phone,
      email : person.email
    });

  }

  updatePerson(person : Person){
    this.peopleList.update(person.$key,{
      id : person.id,
      name : person.name,
      lastn : person.lastn,
      city : person.city,
      country : person.country,
      phone : person.phone,
      email : person.email  
    });
  }
  
  deletePerson($key : string){
    this.peopleList.remove($key);
  }

}
