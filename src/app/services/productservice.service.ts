import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';  
import { Service } from '../models/services.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private dbPath = '/services';

  tutorialsRef: AngularFireList<Service>;
  
  tutorialsRef2: AngularFirestoreCollection<Service>;

  constructor(private db: AngularFireDatabase,private db2: AngularFirestore) {
    this.tutorialsRef = db.list(this.dbPath);
    this.tutorialsRef2 = db2.collection(this.dbPath);
  }

  getAll(): AngularFireList<Service> {
    return this.tutorialsRef;
  }

  create(tutorial: Service): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
  getAlls(): AngularFirestoreCollection<Service> {
    return this.tutorialsRef2;
  }

  creates(tutorial: Service): any {
    return this.tutorialsRef2.add({ ...tutorial });
  }

  updates(id: string, data: any): Promise<void> {
    return this.tutorialsRef2.doc(id).update(data);
  }

  deletes(id: string): Promise<void> {
    return this.tutorialsRef2.doc(id).delete();
  }
  

}