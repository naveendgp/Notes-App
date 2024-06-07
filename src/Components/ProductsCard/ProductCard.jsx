import notes from '../../assets/notes.png'
import { useNavigate } from 'react-router-dom'
import './card.css'


const ProductCard = () => {

  const navigate = useNavigate();

  

    return (
      <section className="cardContainer">
        <div className="cardImage">
          <img src={notes} className="cardImage" />
        </div>
        <div className="cardBody">
          <div className="prodCardDesc">
            <h3 className="prodCardTitle">Products</h3>
            <h3 className="prodCardPrice">$54.33</h3>
            <div className="buyContainer">
              <button
                onClick={() => navigate("/notes")}
                className="Signup"
              >
                View Note
              </button>
              
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductCard;