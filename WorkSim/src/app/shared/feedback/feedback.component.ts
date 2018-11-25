import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pdg-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  @Input() condicao: boolean;

  constructor() { }

  ngOnInit() {
  }

}
