import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {MainComponent} from "./pages/main/main.component";
import {VideoComponent} from "./pages/video/video.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "video/:id", component: VideoComponent },
  { path: "", component: MainComponent },
  { path: "**", component: NotFoundComponent },
];
