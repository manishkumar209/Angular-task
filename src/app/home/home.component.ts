import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api-service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: any;
  searchFilter: any = { login: '' };
  total_user = 0;
  constructor(
    private apiService: ApiService,
    private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.apiService.getUsers()
      .subscribe((result: any) => {
        if (result) {
          this.userList = result;
          var arrList = [];
          result.forEach(data => {
            if (data.type == 'User') {
              arrList.push(data)
            }
          });
          this.userList = arrList;
          this.total_user = this.userList.length;
        } else {
          this.notifier.notify('error', 'No any user found');
        }
      })
  }

}
