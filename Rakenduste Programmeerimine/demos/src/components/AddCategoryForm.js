import "./AddCategoryForm.css"
import {useRef} from "react"


function AddCategoryForm(props){
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        
        e.preventDefault();
        console.log(categoryInputRef.current.value);
        console.log("Vormi sisestus õnnestus.");
        const categoryValue = categoryInputRef.current.value;

        const category={
            category: categoryValue
        }

        props.onAddCategory(category);
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <select required ref={categoryInputRef} >
                <option>BASIC</option>
                <option>PREMIUM</option>
                <option>DELUXE</option>
            </select>
            <button>Sisesta uus kategooria</button>
        </form>
    );
}

export default AddCategoryForm;