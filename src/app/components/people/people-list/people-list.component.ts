import { Component, OnInit } from '@angular/core';
import { PersonService } from'../../../services/person.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor(
    private personServ : PersonService
  ) { }

  ngOnInit() {
  }

}
