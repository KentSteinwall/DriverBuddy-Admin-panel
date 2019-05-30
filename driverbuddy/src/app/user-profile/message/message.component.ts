import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Message } from '../../shared/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  nicRegex=/^\d{9}[v]$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private UserProfileService: MessageService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  
  onSubmit(form: NgForm) {
  this.UserProfileService.postEmployee(form.value).subscribe((res)=>{
    this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
  });
 
 
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectEmployee = {
      _id:"",
      driverId:"",
      mobile:null
           
    }
    //form.resetForm();
    this.serverErrorMessages = '';
  }

}
