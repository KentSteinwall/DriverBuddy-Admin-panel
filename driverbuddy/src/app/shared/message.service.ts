import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   selectEmployee: Message;
   employees: Message[];
   readonly baseURL='http://localhost:3000/message';

  constructor(private http: HttpClient) { }
  postEmployee(ins: Message){
    return this.http.post(this.baseURL,ins);
}
}
