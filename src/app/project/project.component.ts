import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api-service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  user_name: any;
  repoList: any;
  totalRepo = 0;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.user_name = (params['user']));
    this.getRepository();
  }
  getRepository() {
    this.spinner.show();
    this.apiService.getRepository(this.user_name)
      .subscribe((result: any) => {
        this.spinner.hide();
        if (result) {
          this.repoList = result;
          this.totalRepo = this.repoList.length;
        } else {
          this.notifier.notify('error', 'No any user found');
        }
      })
  }
}
