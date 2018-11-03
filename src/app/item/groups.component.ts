import { Component, OnInit } from "@angular/core";

import { Group } from "./models";
import { ApiService } from "./api.service";
import { allowSanitizationBypass } from "@angular/core/src/sanitization/bypass";

@Component({
    selector: "ns-groups",
    moduleId: module.id,
    templateUrl: "./groups.component.html",
})
export class GroupsComponent implements OnInit {
    groups: Group[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private _itemService: ApiService) { }

    async ngOnInit(): Promise<void> {
        await this._itemService.loadTranslations();
        this.groups = await this._itemService.getGroups();        
    }
}