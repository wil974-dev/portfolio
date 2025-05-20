import './skills.scss';

function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__htwo">Mes compétences</h2>
            <div className="skills__frontend">
                <h3 className="skills__hthree">Front-end</h3>
                <p>
                    Langage: JavaScript{' '}
                    <i className="fa-brands fa-square-js"></i>
                </p>
                <p>
                    Frameworks et bibliothèques : React-Vite{' '}
                    <i className="fa-brands fa-react"></i>
                </p>
                <p>
                    Intégration Web : HTLM 5{' '}
                    <i className="fa-brands fa-html5"></i>, CSS3{' '}
                    <i className="fa-brands fa-css"></i>, SASS{' '}
                    <i className="fa-brands fa-sass"></i>
                </p>
            </div>
            <div className="skills__backend">
                <h3 className="skills__hthree">Back-end</h3>
                <p>
                    Langages et frameworks: JavaScript{' '}
                    <i className="fa-brands fa-square-js"></i>, Node.js(express){' '}
                    <i className="fa-brands fa-node-js"></i>
                </p>
                <p>Base de donnée: MongoDB</p>
                <p>Création et consommation d'API REST</p>
            </div>
        </div>
    );
}

export default Skills;
