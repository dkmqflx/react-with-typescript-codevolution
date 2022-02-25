type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// restriction on Generic
const List = <T extends { id: number } | number | string>({ items, onClick }: ListProps<T>) => {
  console.log('itmes', items);
  return (
    <div>
      <h2>Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};

export default List;
