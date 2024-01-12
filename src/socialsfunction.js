import GitHub from './socials/GitHub.png';
import LinkedIn from './socials/LinkedIn.png';
import './socialsfunction.css';

const Sosialics = () => {
    const Sosialics = [
        { name: 'GitHub', image: GitHub, link: 'https://github.com/elkkuelias' },
        { name: 'LinkedIn', image: LinkedIn, link: 'https://www.linkedin.com/in/elias-vuorinen-945248299' },
    ];

    return (
        <div className='socialssocials'>
            {Sosialics.map((icon, index) => (
                <div key={index} className='socialscard'>
                    <a href={icon.link} target="_blank" rel="noopener noreferrer">
                        <img src={icon.image} alt={icon.name}/>
                    </a>
                    <p>{icon.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Sosialics;