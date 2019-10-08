import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private search: SearchService) { }

  userSelected: any;
  ngOnInit() {
      this.search.userSelected.subscribe(data => {
        console.log("user component", data);
        this.userSelected = data;
      });
  }
}
