import { useEffect, useState, useRef } from 'react';

function EditItem() {
  const [item, setItem] = useState(null);
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();

  useEffect(()=>{
    const itemId = window.location.href.split("/edit-item/")[1];
    console.log(itemId);
    fetch("http://localhost:8080/view-item/" + itemId).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      setItem(data);
    })
  },[])
  
  if (!item) {
    return "Loading...";
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const itemSubmitted = {
      id: item.id,
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }

    fetch('http://localhost:8080/edit-item',{
      method: 'POST',
      body: JSON.stringify(itemSubmitted),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <div className="container">
    <form onSubmit={formSubmitHandler}>
        <div className="row">
            <label>Eseme nimi</label>
            <input type="text" required defaultValue={item.name} ref={nameInputRef} />
        </div>
        <div className="row">
            <label>Eseme hind</label>
            <input type="number" required defaultValue={item.price} ref={priceInputRef} />
        </div>
        <div className="row">
            <label>Eseme kategooria</label>
            <input type="text" required defaultValue={item.category} ref={categoryInputRef} />
        </div>
        <button className="button2">Sisesta uus ese</button>
    </form>
    </div>
    )
}

export default EditItem;