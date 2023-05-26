import "./card.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
   const { image, onClose, name, status, species, gender, origin, id, addFav, removeFav, myFavorites } = props
   const [isFav, setIsFav] = useState(false)


   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className="card">
         <div className="butons_card">
            {
               isFav ? (
                  <button style={{ cursor: "pointer" }} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button style={{ cursor: "pointer" }} onClick={handleFavorite}>🤍</button>
               )
            }
            <button style={{ cursor: "pointer" }} onClick={() => onClose(id)}>X</button>
         </div>
         <div className="card_info">
            <div className="info">
               <h4>Nombre: {name}</h4>
               <p>Estado: {status}</p>
               <p>Especie: {species}</p>
               <p>Genero: {gender}</p>
               <p>Origen: {origin}</p>
            </div>
            <img src={image} alt='Imagen de personaje' />
            <Link className="masInfo" to={`/detail/${id}`} >Mas información</Link>
         </div>
      </div>
   );
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)