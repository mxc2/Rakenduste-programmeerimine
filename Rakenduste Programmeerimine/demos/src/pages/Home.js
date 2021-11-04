import "./Home.css"
import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div>
      
      <ItemList items={loadedItems} />
      
      <div className="footer">
            <div className="line">
                <hr/>
            </div>
            <p>Uue eseme lisamine:</p>
            <Link to="add-item">
                <button>Lisa uus ese</button>
            </Link>
            <p>Uue kategooria lisamine:</p>
            <Link to="add-category">
                <button>Lisa uus kategooria</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;