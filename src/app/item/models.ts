export interface Translations {
    [key: string]: string;
}

export interface Group {
  id: string;
  name: string;
  teamId: string;
  code: string;
  deleted?: boolean;
  priority: number;
  enabledToOrder: boolean;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  pictureUri: string;
  availableStock: number;
  teamId: string;
  code: string;
  deleted?: boolean;
  priority: number;
}

export interface PagedResult<T> {
    pageIndex: number,
    pageSize: number,
    count: number,
    data: Array<T>
}
