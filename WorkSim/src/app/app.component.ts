import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Cross Gestão';

    historicos: IHistorico[] = [];

    loading = true;

    constructor() {

    }

    ngOnInit() {

    }

}
