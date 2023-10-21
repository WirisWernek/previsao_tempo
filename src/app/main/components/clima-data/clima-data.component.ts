import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private climaService: ClimaService) {
    this.cidadeForm = new FormGroup({
      cidade: new FormControl('São Paulo'),
    });
  }

  ngOnInit(): void {
    this.searchCityByName();
  }

  searchCityByName() {
    const cidade = this.cidadeForm.get('cidade')?.value;

    if (cidade == undefined || cidade == null || cidade.trim() == '') {
      alert('Informe uma cidade válida!');
    }

    this.climaService.getCityByName(cidade).subscribe((clima: ClimaInterface) => {
      this.clima = clima;
    });
  }

  searchCityByCoords() {
    if (!navigator.geolocation) {
      alert('Seu dispositivo ou seu Navegador não suporta Geolocalização');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.climaService
            .getCityByCoords(longitude, latitude)
            .subscribe((clima: ClimaInterface) => {
              this.clima = clima;
              this.cidadeForm.setValue({ cidade: clima.location.name });
            });

          console.log(`${latitude} - ${longitude}`);
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
