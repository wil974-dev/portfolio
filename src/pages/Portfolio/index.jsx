import Carrousel from '../../components/Carrousel';
import kasaUn from '../../assets/Kasa/KasaUn.png';
import kasaDeux from '../../assets/Kasa/KasaDeux.png';
import kasaTrois from '../../assets/Kasa/KasaTrois.png';
import grimoireUn from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireUn.png';
import grimoireDeux from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireDeux.png';
import grimoireTrois from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireTrois.png';

function Portfolio() {
    const imagesKasa = [kasaUn, kasaDeux, kasaTrois];
    const imagesMonVieuxGrimoires = [grimoireUn, grimoireDeux, grimoireTrois];

    return (
        <div className="portfolio">
            <h2>Mes projets</h2>
            <div>
                <h3>Kasa</h3>
                <p>
                    Réalisation de toutes la partie front-end du site (version
                    Desktop et mobile) en suivant la maquette Figma.J'ai
                    implémenter les composants React, les routes avec React
                    Router ...
                </p>
                <p>
                    Lien GitHub du projet :
                    https://github.com/wil974-dev/Kasa.git
                </p>
                <Carrousel images={imagesKasa} />
            </div>
            <div>
                <h3>Mon vieux grimoire</h3>
                <p>
                    Réalisation de toutes la partie back-end du site Mon Vieux
                    Grimoire qui permet à un utilisateur de créer un compte,
                    d'ajouter des livres, de noter des livres d'autres
                    utilisateur ayant enregistré un livres.
                </p>
                <p>
                    Lien GitHub du projet :
                    https://github.com/wil974-dev/Mon_vieux_grimoire.git
                </p>
                <Carrousel images={imagesMonVieuxGrimoires} />
            </div>
        </div>
    );
}

export default Portfolio;
