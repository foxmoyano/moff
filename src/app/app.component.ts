import { Component, OnInit }  from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  series: SelectItem[];    

  constructor(private http: HttpClient) {
  }

}
