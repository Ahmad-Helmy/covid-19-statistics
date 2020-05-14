import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BubbleComponent } from "./task-a/bubble/bubble.component";
import { TaskAComponent } from "./task-a/task-a.component";
import { TaskCComponent } from './task-c/task-c.component';
import { BarComponent } from './task-c/bar/bar.component';
import { TaskBComponent } from './task-b/task-b.component';
import { BoundryBubbleComponent } from './task-b/boundry-bubble/boundry-bubble.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, BubbleComponent, TaskAComponent, TaskCComponent, BarComponent, TaskBComponent, BoundryBubbleComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
