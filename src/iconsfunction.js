import React from 'react';
import Git from './logos/Git.png';
import Node from './logos/Node.png';
import Reactjs from './logos/React.png';
import Python from './logos/Python.png';
import Java from './logos/Java.png';
import SQL from './logos/SQL.png';
import Html from './logos/Html.png';
import MongoDB from './logos/MongoDB.png';
import JavaScript from './logos/JavaScript.png';
import Css from './logos/Css.png';
import Maven from './logos/Maven.png';
import Linux from './logos/Linux.png';
import './iconsfunction.css';
const Iconics = () => {
    const icons = [
        { name: 'Git', image: Git },
        { name: 'Node', image: Node },
        { name: 'Reactjs', image: Reactjs },
        { name: 'Python', image: Python },
        { name: 'Java', image: Java },
        { name: 'Sql', image: SQL },
        { name: 'JavaScript', image: JavaScript},
        { name: 'Linux', image: Linux},
        { name: 'Maven', image: Maven},
       
    ];

    return (
        <div className='iconicon'>
            {icons.map((icon, index) => (
                <div key={index}  className='iconcard'>
                    <img src={icon.image} alt={icon.name} className='iconics' />
                    <p>{icon.name}</p>
                </div>
            ))}
        </div>
    );
}
export default Iconics;