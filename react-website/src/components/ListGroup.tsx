function ListGroup() {
  const items = ["Oujda", "nador", "rabat", "casa", "saidia"];

  return (
    <>
      <h1>Listegroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
