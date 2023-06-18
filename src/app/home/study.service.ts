import { Injectable } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '../shared/endPoints';
import {Study} from './study.model';

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  private static STUDIES = '/studies';

  constructor(private httpService: HttpService) { }

  // TODO En vez de searchAll, hacer búsqueda por idioma
  searchAll(): Observable<Study[]>{
    return this.httpService
      .get(EndPoints.BASE + StudyService.STUDIES);
  }
}
