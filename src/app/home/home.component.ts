import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/guard/auth.guard';
import { Service } from '../models/services.model';
import { ProductserviceService } from '../services/productservice.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  JsonString;
  jsonArray;
  fileUploads: any[];
  products:any[]; 
  Service: Service[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  
  constructor(private cartService : CartService,public authService: AuthService,private pro:ProductserviceService,private uploadService: FileUploadService,private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.dataState();
    let s = this.pro.getAll(); 
    s.snapshotChanges().subscribe(data => {
      
      this.Service = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        
        a['$key'] = item.key;
        this.Service.push(a as Service);
        this.JsonString = JSON.stringify(this.Service);
      })
    })
    this.uploadService.getFiles(13).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
    
    
  }
  dataState() {     
    this.pro.getAll().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
  add(product: Service) {
    console.log(product)
    this.http.post('/api/book/detail',product).subscribe(data=>{
      
    })
    
    window.alert('Your product has been added to the cart!');

  }



}

