import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  appTitle:string ='Techno Limited';
  imagePath='/assets/images/logo.jfif';
  constructor() { }

  ngOnInit(): void {
  }

}
