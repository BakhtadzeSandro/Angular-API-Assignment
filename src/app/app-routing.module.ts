import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstTaskComponent } from "./first-task/first-task.component";
import { SecondTaskComponent } from "./second-task/second-task.component";

const routes: Routes = [
    {
        path: "first-task",
        component: FirstTaskComponent
    },
    {
        path: "second-task",
        component: SecondTaskComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {};
