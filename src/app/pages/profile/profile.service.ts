import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';
import { profiles } from 'src/data/profiles.data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data: Profile[] = profiles;

  constructor() { }

  findAll(): Observable<Profile[]> {
    return observableOf(this.data);
  }

  findById(id: number): Observable<Profile | null> {
    return observableOf(this.data.find(profile => profile.id === id) || null);
  }
}
