import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";
import client from "api/gql";
import { ORDER_QUERY } from "~/screens/Orders/Show/queries";

export default class OrdersShowStore {
  order: SingleOrder = {
    id: 0,
    number: "",
    status: "",
    delivery: {
      code: "",
    },
    items: [],
    customFields: {
      assemblyStatus: false,
      packingStatus: false,
      ini: "",
    },
  };
  id: string | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(order: SingleOrder): void {
    console.log(order);
    console.log(this.order);
    this.order = order;
    console.log(this.order);
  }

  async loadOrder(num: string) {
    this.loading = true;

    client
      .query(ORDER_QUERY, { number: num })
      .toPromise()
      .then((result) => {
        const order = result.data.order;
        console.log(order);
        this.setOrder(order);
      });

    this.loading = false;
  }

  initialize(num: string) {
    this.loadOrder(num);
  }
}
