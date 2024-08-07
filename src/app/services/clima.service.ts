import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClimaInterface } from '../models/interfaces/Clima.interface';


@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  constructor(private http: HttpClient) {
  }

  getCityByName(cityName: string): Observable<ClimaInterface> {
    return this.http.post<ClimaInterface>(`${environment.API_URL}/clima/cidade`, {
      cidade: cityName,
    });
  }

  getCityByCoords(longitude: number, latitude: number): Observable<ClimaInterface>{
	return this.http.post<ClimaInterface>(`${environment.API_URL}/clima/coordenadas`, {
		latitude: latitude,
		longitude: longitude
	});
  }
}
