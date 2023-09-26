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
    this.searchCity();
  }

  searchCity() {
    let cidade = this.cidadeForm.get('cidade')?.value;

    if (cidade == undefined || cidade == null || cidade.trim() == '') {
      alert('Informe uma cidade válida!');
    }

    this.climaService.getCurrent(cidade).subscribe((clima) => {
      this.clima = clima;
    });
  }
}
