import AddItemForm from "../components/AddItemForm";

function Additem(){   
    function itemSubmitHandler(item){
        fetch("http://localhost:80/items", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {"Content-Type" : "application/json"}
        });
        console.log(item);
    }

    return(
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}></AddItemForm>
       </div>
    )
}

export default Additem;