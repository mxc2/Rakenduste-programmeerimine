import AddCategoryForm from "../components/AddCategoryForm";


function AddCategory(){
  function categorySubmitHandler(category){
    fetch('http://localhost:8080/category', {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <div className="container">
      <h2>Lisa uus kategooria</h2>
      <AddCategoryForm onAddCategory={categorySubmitHandler}/>
    </div>
  )
}

export default AddCategory;