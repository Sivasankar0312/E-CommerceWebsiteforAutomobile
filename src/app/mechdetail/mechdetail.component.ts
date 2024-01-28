import { Component ,OnInit} from '@angular/core';
import { MechdetailService } from '../services/mechdetail.service';
import { FormGroup, FormControl } from '@angular/forms';
import { mechdetails } from '../shared/mechanic';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mechdetail',
  templateUrl: './mechdetail.component.html',
  styleUrls: ['./mechdetail.component.css']
})
export class MechdetailComponent implements OnInit {
  loading: boolean = false;
  errorMessage;
  repos: mechdetails[];
  de:mechdetails[];


  constructor(private mechservice:MechdetailService,private http:HttpClient) {
  }
 
  ngOnInit():void{
    this.loading = true;
    this.errorMessage = "";
    this.mechservice.getRepos()
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

