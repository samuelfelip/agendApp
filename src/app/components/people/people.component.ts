import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers : [ PersonService ]
})
export class PeopleComponent implements OnInit {

  constructor(
    private personServ : PersonService
  
  ) { }

  ngOnInit() {
  }

}
