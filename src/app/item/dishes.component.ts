import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "./api.service";
import { Dish } from "./models";

@Component({
    selector: "ns-dishes",
    moduleId: module.id,
    templateUrl: "./dishes.component.html",
})
export class DishesComponent implements OnInit {
    dishes: Array<Dish>;

    constructor(
        private itemService: ApiService,
        private route: ActivatedRoute
    ) { }

    async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.params["id"];
        this.dishes = await this.itemService.getCatalogDishes(id);
    }
}
