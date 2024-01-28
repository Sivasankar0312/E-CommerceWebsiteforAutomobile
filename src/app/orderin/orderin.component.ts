import { Component } from '@angular/core';
import {OrderService} from '../order.service'
import { orderdetails } from '../shared/order';
@Component({
  selector: 'app-orderin',
  templateUrl: './orderin.component.html',
  styleUrls: ['./orderin.component.css']
})
export class OrderinComponent {
  loading: boolean = false;
  errorMessage;
  repos: orderdetails[];
  constructor(private Os:OrderService) {
  }
 
  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.Os.getOrder()
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
