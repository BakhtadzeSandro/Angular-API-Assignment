import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstTaskComponent } from "./first-task/first-task.component";
import { FormComponent } from "./form/form.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { SecondTaskComponent } from "./second-task/second-task.component";

const routes: Routes = [
    {
        path: "first-task",
        component: FirstTaskComponent
    },
    {
        path: "second-task",
        component: SecondTaskComponent
    },
    {
        path: "form",
        component: FormComponent
    },
    {
        path: "movie-list",
        component: MovieListComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {};
