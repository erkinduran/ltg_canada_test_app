import {Component, OnInit} from '@angular/core';
import {BsDropdownConfig} from 'ngx-bootstrap/dropdown';

@Component ( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [{provide: BsDropdownConfig, useValue: {isAnimated: true, autoClose: true}}]
} )
export class AppComponent implements OnInit
{
	constructor () {}
	
	counter: any[] = [1, 2, 3, 4]
	selected: any = 1
	topOf: any[] = [
		{
			name: "BMW",
			rate: 100,
			top: true
		},
		{
			name: "Toyota",
			rate: 80,
			top: false
		},
		{
			name: "Honda",
			rate: 30,
			top: false
		},
		{
			name: "Chevrolet",
			rate: 40,
			top: false
		},
		{
			name: "Volkswagen",
			rate: 60,
			top: false
		},
		{
			name: "Skoda",
			rate: 20,
			top: false
		},
		{
			name: "Nissan",
			rate: 50,
			top: false
		},
	]
	
	ngOnInit (): void {}
}
