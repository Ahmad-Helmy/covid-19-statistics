import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskAComponent } from "./task-a/task-a.component";
import { TaskCComponent } from "./task-c/task-c.component";
import { TaskBComponent } from "./task-b/task-b.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "task-a" },
  { path: "task-a", component: TaskAComponent },
  { path: "task-c", component: TaskCComponent },
  { path: "task-b", component: TaskBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
