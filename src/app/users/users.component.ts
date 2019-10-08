import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private search: SearchService) { }

  userArray: Array<any>;

  

  ngOnInit() {

    //this.selectedUser = null;
    this.search.searchEvent.subscribe((data: any)=>{
      
      this.search.userName = data.target.value;
      console.log(" Data ", data.target.value);
      if(data.length!=0){
        //console.log("Data"+data.target.value);
        this.search.onSearchUser().subscribe((response: any)=>{
          console.log("Before User Array", response);
          this.userArray = response.items;
          this.search.userArray = response.items;
          console.log("User Array", response);
        });
      }
    });
  }

  onSelectUser(user: any){
    //this.search.selectUser(index);
    //this.selectedUser = user;
    this.search.userSelected.emit(user);
    console.log("Selected User", user);
  }

}
