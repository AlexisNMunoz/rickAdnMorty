import "./deatil.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Deatil() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <section className="card_contenedor">
            {
                character
                    ?
                    <div className="card_detail">
                        <img className="detalle__imagen" src={character.image} alt={`Imagen de ${character.name}`} />
                        <div className="info_deatil">
                            <p>Nombre: <span className="info_deatil-span">{character.name}</span></p>
                            <p>Estado: <span className="info_deatil-span">{character.status}</span></p>
                            <p>Especie: <span className="info_deatil-span">{character.species}</span></p>
                            <p>Genero: <span className="info_deatil-span">{character.gender}</span></p>
                            <p>Origen: <span className="info_deatil-span">{character.origin?.name}</span></p>
                        </div>
                    </div>
                    : "Cargando..."
            }
        </section>
    )
}

export default Deatil