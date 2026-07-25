import { useEffect, useState } from 'react';
import { PersonajeCard } from '../../componets/personaje';
import { obtenerPersonaje } from '../../service/rick-and-morty-service';
import style from './personaje.module.css';

const PersonajePage = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPersonajes = async () => {
            try {
                const data = await obtenerPersonaje();
                setPersonajes(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        getPersonajes();
    }, []);

    if (loading) return <div className={style.loading}>Cargando...</div>;

    return (
        <div className={style.PersonajePage}>
            <h1>Personajes Rick and Morty</h1>
            <div className={style.personajesGrid}>
                {personajes.map((personaje) => (
                    <PersonajeCard
                        key={personaje.id}
                        nombre={personaje.name}
                        especie={personaje.species}
                        imagen={personaje.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default PersonajePage;