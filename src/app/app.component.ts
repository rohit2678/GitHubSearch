import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchUserName';

  constructor(private search: SearchService){}

  onInput(event: any){
    //console.log("Event"+ event.target.value);
    this.search.searchEvent.emit(event);
  }
  }
