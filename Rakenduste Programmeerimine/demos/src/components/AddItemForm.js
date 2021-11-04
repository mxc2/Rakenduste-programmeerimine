import './AddItemForm.css';
import { useRef } from 'react';
// võtan kasutusele useRef hooki

function AddItemForm(props) {


  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const item = {
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }
    props.onAddItem(item);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="row">
        <label>Eseme nimi</label>
        <input type="text" placeholder="Nimi" required ref={nameInputRef} />
      </div>
      <div className="row">
        <label>Eseme hind</label>
        <input type="number" required ref={priceInputRef} />
      </div>
      <div className="row">
        <label>Eseme kategooria</label>
        <input type="text" required ref={categoryInputRef} />
      </div>
      <button className="button2">Sisesta uus ese</button>
    </form>
  );
}

export default AddItemForm;