import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClimaInterface } from '../models/interfaces/Clima.interface';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  url: string = 'https://api.weatherapi.com/v1/';
  api_key: string | undefined;

  constructor(private http: HttpClient) {
    this.setApi_key();
  }

  getCurrent(param: string): Observable<ClimaInterface> {
    return this.http.get<ClimaInterface>(
      this.url + 'current.json' + '?key=' + this.api_key + '&q=' + param
    );
  }

  setApi_key() {
    this.api_key = environment.API_KEY;
  }
}
