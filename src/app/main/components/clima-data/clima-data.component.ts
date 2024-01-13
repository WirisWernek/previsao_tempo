import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { ClimaInterface } from '../../models/interfaces/Clima.interface';
import { ClimaService } from '../../services/clima.service';

@Component({
	selector: 'app-clima-data',
	templateUrl: './clima-data.component.html',
	styleUrls: ['./clima-data.component.scss'],
})
export class ClimaDataComponent implements OnInit {
	clima!: ClimaInterface;
	cidadeForm!: FormGroup;
	loadingData: boolean;

	constructor(private climaService: ClimaService) {
		this.cidadeForm = new FormGroup({
			cidade: new FormControl('São Paulo'),
		});

		this.loadingData = false;
	}

	ngOnInit(): void {
		this.searchCityByName();
	}

	searchCityByName() {
		const cidade = this.cidadeForm.get('cidade')?.value;

		if (cidade == undefined || cidade == null || cidade.trim() == '') {
			alert('Informe uma cidade válida!');
		}

		this.loadingData = true;
		this.climaService.getCityByName(cidade).pipe(take(1)).subscribe((clima: ClimaInterface) => {
			this.clima = clima;
			this.cidadeForm.setValue({ cidade: `${clima.location.name} - ${clima.location.region}` });
			this.loadingData = false;
		});
	}

	searchCityByCoords() {
		this.loadingData = true;
		this.cidadeForm.setValue({cidade: ''});

		if (!navigator.geolocation) {
			alert('Seu dispositivo ou seu Navegador não suporta Geolocalização');
			this.loadingData = false;
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					this.climaService
						.getCityByCoords(longitude, latitude).pipe(take(1))
						.subscribe((clima: ClimaInterface) => {
							this.clima = clima;
							this.cidadeForm.setValue({ cidade: `${clima.location.name} - ${clima.location.region}` });
							this.loadingData = false;
						});
				},
				(error) => {
					alert(
						`Você não permitiu acesso à localizaçãodo dispositivo \n ${error.message}`
					);
				}
			);
		}
	}
}
