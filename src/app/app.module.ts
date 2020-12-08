import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import {HttpClientJsonpModule} from '@angular/common/http';
import {HoverDirective} from './hover.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {RouterModule} from '@angular/router';
import { CheckHookComponent } from './check-hook/check-hook.component';
import { HookSecondComponent } from './hook-second/hook-second.component';
import {HotelService} from './hotel.service';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth/auth.guard';


const routes = [
  {path: '' , component: HomePageComponent},
  {path: 'setup' , component: SetupPageComponent},
  {path: 'about' , component: AboutPageComponent},
  {path: 'admin' , component: AdminComponent, canActivate : [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
    AboutPageComponent,
    CheckHookComponent,
    HookSecondComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
