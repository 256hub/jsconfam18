import { Injectable } from "@angular/core";

import { Group, Dish, PagedResult, Translations } from "./models";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class ApiService {
    private _translations: Translations;
    private _groups: Array<Group>;

    constructor(private _http: HttpClient) {
        
    }
    
    public async loadTranslations(): Promise<void> {
        if (this._translations)
            return;

        const options={
            headers: {"Referer":"https://256.bonee.net/"}
        };
        const url="https://bonee-translate.azurewebsites.net/api/v1/Translation/host/en";
        this._translations = await this._http.get<Translations>(url, options).toPromise();
        return;
    }

    public getTranslation(translationId: string): string {
        return this._translations[translationId];
    }

    async getGroups(): Promise<Array<Group>> {
        if (this._groups)
            return this._groups;

        const options={
            headers: {"Referer":"https://256.bonee.net/"}
        };
        const url="https://bonee-ocelotapigw.azurewebsites.net/api/v1/c/catalog/cataloggroups";
        this._groups = await this._http.get<Array<Group>>(url, options).toPromise();
        return this._groups;
    }

    async getCatalogDishes(catalogId: string) : Promise<Array<Dish>> {
        const url ="https://bonee-ocelotapigw.azurewebsites.net/api/v1/c/catalog/items/type/null/brand/null/group/${catalogId}?pageIndex=0&pageSize=10";

        const options={
            headers: {"Referer":"https://256.bonee.net/"}
        };
        const res = await this._http.get<PagedResult<Dish>>(url, options).toPromise();
        return res.data;
    }

    // getItem(id: number): Group {
    //     return this.items.filter(item => item.id === id)[0];
    // }
}
