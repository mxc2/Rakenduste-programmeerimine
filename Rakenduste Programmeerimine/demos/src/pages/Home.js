import { Link } from "react-router-dom"
import ItemList from "../components/ItemList"
import { useEffect, useState } from 'react';

function Home(){   
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(()=>{
            fetch("http://localhost:80/items").then(res => {
            res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            //setLoadedItems(data);
          });
        },[])

    if (isLoading){
        return (<div>Laeb...</div>)
    }

    return(
        <div>
            Koduleht
            <Link to="add-item">
                <button> Lisa Uus Ese</button>
            </Link>
            <Link to="add-category">
                <button> Lisa Uus Kategooria</button>
            </Link>
            <ItemList items={loadedItems}/>
       </div>
    )
}

export default Home;