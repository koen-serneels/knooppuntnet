import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule} from "@angular/material";
import {SharedModule} from "../components/shared/shared.module";
import {SpinnerModule} from "../spinner/spinner.module";
import {BaseRoutingModule} from "./base-routing.module";
import {BaseSidebarComponent} from "./base-sidebar.component";
import {AuthenticatePageComponent} from "./pages/authenticate/authenticate-page.component";
import {HomePageComponent} from "./pages/home/home-page.component";
import {LoginPageComponent} from "./pages/login/login-page.component";
import {LogoutPageComponent} from "./pages/logout/logout-page.component";
import {NotFoundPageComponent} from "./pages/not-found/not-found-page.component";

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    BaseRoutingModule,
    SpinnerModule
  ],
  declarations: [
    BaseSidebarComponent,
    AuthenticatePageComponent,
    HomePageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    NotFoundPageComponent
  ],
  entryComponents: []
})
export class BaseModule {
}
