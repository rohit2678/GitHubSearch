import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  onInput(event: any){
    this.search.searchEvent.emit(event);
  }

}
