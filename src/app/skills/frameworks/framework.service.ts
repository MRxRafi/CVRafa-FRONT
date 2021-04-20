import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '../../shared/endPoints';
import {Framework} from './framework.model';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {
  private static FRAMEWORKS = '/frameworks';

  constructor(private httpService: HttpService) { }

  searchAll(): Observable<Framework[]>{
    return this.httpService
      .get(EndPoints.BASE + FrameworkService.FRAMEWORKS);
  }
}
