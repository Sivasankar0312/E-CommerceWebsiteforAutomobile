import { Component } from '@angular/core';
 
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-feedbackdetail',
  templateUrl: './feedbackdetail.component.html',
  styleUrls: ['./feedbackdetail.component.css']
})
export class FeedbackdetailComponent {
  loading: boolean = false;
  errorMessage;
  repos: Feedback[];
  constructor(private feedbackservice:FeedbackService) {
  }
 
  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.feedbackservice.getRepos()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}
