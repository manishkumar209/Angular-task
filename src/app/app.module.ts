import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { NotifierService, NotifierOptions, NotifierModule } from 'angular-notifier';
import { ApiService } from './_services/api-service';
import { NgxSpinnerModule } from "ngx-spinner";
import { FilterPipeModule } from 'ngx-filter-pipe';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';



const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 30,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgxSpinnerModule,
    FilterPipeModule
  ],
  providers: [
    NotifierService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
