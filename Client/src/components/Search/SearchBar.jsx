import "./search.css"
import { useState } from "react";

function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   let ramdom = Math.floor(Math.random() * 826)

   const handleChange = (e) => {
      setId(e.target.value)
   }

   return (
      <div className="container_search">
         <input
            type='search'
            value={id}
            onChange={handleChange}
            placeholder="1, 2, 3...826"
         />
         <button style={{ cursor: "pointer" }} onClick={() => onSearch(id)}>Agregar</button>
         <button style={{ cursor: "pointer" }} onClick={() => onSearch(ramdom)}>Personaje Ramdom</button>
      </div>
   );
}

export default SearchBar
