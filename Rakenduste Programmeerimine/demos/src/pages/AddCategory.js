import AddCategoryForm from "../components/AddCategoryForm";

function Addcategory(){   
    function categorySubmitHandler(category){
        fetch("http://localhost:80/categories", {
            method: "POST",
            body: JSON.stringify(category),
            headers: {"Content-Type" : "application/json"}
        });
        console.log(category);
    }

    return(
        <div>
            <h1>Lisa uus kategooria</h1>
            <AddCategoryForm onAddCategory={categorySubmitHandler}></AddCategoryForm>
       </div>
    )
}

export default Addcategory;