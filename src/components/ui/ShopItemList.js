import ShopItem from "./ShopItem";

function ShopItemList(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          {props.items.map(
            (item) =>
              // item.id == 1 && (
                item.state && 
                <div className="col-3">
                  <ShopItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    value={item.value}
                    state={item.state}
                  />
                </div>
              // )
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopItemList;
