import { Component, OnInit } from '@angular/core';
import {
	initAccordions,
	initCarousels,
	initCollapses,
	initDials,
	initDismisses,
	initDrawers,
	initDropdowns,
	initModals,
	initPopovers,
	initTabs,
	initTooltips,
} from 'flowbite';
import { ClimaDataComponent } from './views/clima-data/clima-data.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [ClimaDataComponent],
})
export class AppComponent implements OnInit {
	title = 'previsao_tempo';

	ngOnInit(): void {
		this._initOptions();
	}
	private _initOptions() {
		initAccordions();
		initCarousels();
		initCollapses();
		initDials();
		initDismisses();
		initDrawers();
		initDropdowns();
		initModals();
		initPopovers();
		initTabs();
		initTooltips();
	}
}
