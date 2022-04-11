import React, { useEffect } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
//import Item from "./components/Item";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());
    const params = useParams();

    //console.log(state);
    //console.log(params);

    //useEffect(() => {
    //  console.log(state);
    //}, [state]);

    return (
      <div id="show" className={styles.screenWrapper}>
        <div className={styles.screen}>
          <div>{52}</div>
          <div className={styles.items}>{/*<Item item={} />*/}</div>
        </div>
      </div>
    );
  }
);

export default OrdersShow;
