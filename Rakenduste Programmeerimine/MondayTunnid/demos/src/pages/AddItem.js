import AddItemForm from '../components/AddItemForm'

function AddItem() {
  function itemSubmitHandler(item) {

    fetch('http://localhost:8080/items',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <div className="container">
      <h2>Lisa uus ese</h2>
      <AddItemForm onAddItem={itemSubmitHandler}/>
    </div>
    );
}

export default AddItem;