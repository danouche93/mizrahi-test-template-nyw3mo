import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { UserItemComponent } from './user-item/user-item.component';
import { MatCardModule } from '@angular/material/card';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent, UsersListComponent, UserItemComponent, FiltersComponent],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
