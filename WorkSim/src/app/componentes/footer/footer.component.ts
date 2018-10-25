import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data;

  constructor() { }

  ngOnInit() {
    this.date();
  }

  date() {
    this.data = new Date().getFullYear();
  }



}
