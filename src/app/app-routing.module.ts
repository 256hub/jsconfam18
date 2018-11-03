import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { GroupsComponent } from "./item/groups.component";
import { DishesComponent } from "./item/dishes.component";

const routes: Routes = [
    { path: "", redirectTo: "/groups", pathMatch: "full" },
    { path: "groups", component: GroupsComponent },
    { path: "group/:id", component: DishesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }