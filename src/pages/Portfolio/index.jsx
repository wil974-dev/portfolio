import Carrousel from '../../components/Carrousel';
import kasaUn from '../../assets/Kasa/KasaUn.webp';
import kasaDeux from '../../assets/Kasa/KasaDeux.webp';
import kasaTrois from '../../assets/Kasa/KasaTrois.webp';
import grimoireUn from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireUn.webp';
import grimoireDeux from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireDeux.webp';
import grimoireTrois from '../../assets/Mon_vieux_grimoire/MonVieuxGrimoireTrois.webp';
import './portfolio.scss';

function Portfolio() {
    const imagesKasa = [kasaUn, kasaDeux, kasaTrois];
    const imagesMonVieuxGrimoires = [grimoireUn, grimoireDeux, grimoireTrois];

    return (
        <div className="portfolio">
            <h2>Mes projets</h2>
            <div>
                <h3>Kasa</h3>
                <p className="portfolio__description">
                    Dans le cadre de ce projet, j’ai développé l’intégralité de
                    la partie front-end du site Kasa, en suivant rigoureusement
                    une maquette Figma pour les versions desktop et mobile.
                    L’objectif était de concevoir une interface moderne,
                    responsive et fonctionnelle en utilisant React, React Router
                    et SASS pour le style. J’ai construit des composants React
                    modulaires et mis en place une navigation dynamique à l’aide
                    de React Router. L’interface s’adapte à tous les formats
                    grâce à un travail minutieux sur le responsive design. Parmi
                    les défis techniques rencontrés, la mise en place du
                    carrousel d’images a demandé une gestion précise des
                    transitions et une adaptation aux cas particuliers
                    (notamment l’affichage d’une seule image). J’ai également
                    structuré le style avec SASS, ce qui m’a permis de mieux
                    organiser le code CSS, d’utiliser des variables, des mixins,
                    et de favoriser la réutilisabilité et la maintenabilité du
                    style global. Ce projet m’a permis de me familiariser avec
                    l’approche React, notamment à travers l’utilisation des
                    hooks (useState, useEffect) et la logique orientée
                    composant. Même si la prise en main de cette technologie
                    représentait un vrai challenge, elle m’a aidé à progresser
                    significativement en développement front-end moderne. Grâce
                    à cette expérience, j’ai renforcé mes compétences en
                    intégration responsive, en architecture front-end, en
                    gestion des routes, et en structuration avancée du CSS avec
                    SASS. Kasa est un exemple concret de ma capacité à
                    transformer une maquette statique en une application web
                    interactive, fluide et professionnelle.
                </p>
                <p>
                    Lien GitHub du projet : &nbsp;
                    <a
                        href="https://github.com/wil974-dev/Kasa.git"
                        target="_blank"
                    >
                        https://github.com/wil974-dev/Kasa.git
                    </a>
                </p>
                <Carrousel images={imagesKasa} />
            </div>
            <div>
                <h3>Mon vieux grimoire</h3>
                <p className="portfolio__description">
                    Dans ce projet, j’ai réalisé l’ensemble du back-end de
                    l’application Mon Vieux Grimoire, une plateforme qui permet
                    aux utilisateurs de partager et de noter des livres. L’API
                    que j’ai conçue permet notamment à un utilisateur de créer
                    un compte, de se connecter de manière sécurisée, d’ajouter
                    de nouveaux livres avec une image de couverture, et de noter
                    les livres ajoutés par d’autres membres. J’ai mis en place
                    toute la logique métier en Node.js, en structurant le projet
                    autour d’un modèle MVC. Les utilisateurs sont authentifiés
                    grâce à JSON Web Token (JWT), et les mots de passe sont
                    sécurisés avec bcrypt. L’ensemble des routes est protégé via
                    un middleware, assurant une sécurité optimale des données.
                    Parmi les fonctionnalités notables : Envoi et compression
                    des images de couverture grâce à Multer et Sharp. Prévention
                    des notations en double via une logique serveur contrôlant
                    les identifiants utilisateurs. Mise à jour dynamique de la
                    note moyenne (averageRating) des livres en fonction des
                    évaluations reçues. Ce projet m’a permis de renforcer mes
                    compétences en développement d’API REST, en sécurisation des
                    accès, en gestion de fichiers côté serveur, et en
                    modélisation de données avec MongoDB et Mongoose. Il
                    illustre parfaitement ma capacité à créer un back-end
                    complet, structuré, sécurisé et fonctionnel, prêt à être
                    utilisé en production.
                </p>
                <p>
                    Lien GitHub du projet : &nbsp;
                    <a
                        href="https://github.com/wil974-dev/Mon_vieux_grimoire.git"
                        target="_blank"
                    >
                        https://github.com/wil974-dev/Mon_vieux_grimoire.git
                    </a>
                </p>
                <Carrousel images={imagesMonVieuxGrimoires} />
            </div>
        </div>
    );
}

export default Portfolio;
