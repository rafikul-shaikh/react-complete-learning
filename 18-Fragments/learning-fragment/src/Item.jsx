const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item my-item">
      <span className="my-span">{foodItem}</span>
    </li>
  );
};
export default Item;
