import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AddComponent } from './add/add.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', children: [], pathMatch: 'full' },
      {
        path: 'add',
        component: AddComponent
      }
      // { path: '**', component: PageNotFoundComponent }
    ]),
    PaginationModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
