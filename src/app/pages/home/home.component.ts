import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$!: Observable<Profile | null>;

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.data$ = this._profileService.findById(1);
  }

}
