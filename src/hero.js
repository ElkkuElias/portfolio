import CatWindow from './CatWindow.jpg'
import './hero.css'
import Iconics from './iconsfunction';
import Projects from './projects';
import Socialics from './socialsfunction';
import List from './List.pdf'
function Hero () {
    return(
        <>
        <div className='maincontainer'>
        <div className='herocontainer'>
            <div className='herotextbox'>
            <welcome>
                <span className='font-link'> Welcome </span>
            </welcome>
           
            
            <a className='intro'>My name is Elias Vuorinen, i'm a second year Information and communications student majoring in software engineering.
                I have developed full stack projects, embedded projects and java projects. 
            </a>
            </div>
            
            </div>
            <div className='gap'></div>
            
        
            <div className='projects'>
                <Projects/>
            </div>
            <div className='iconcontainer'>
            <h3>
                Languages and tools
            </h3>
            
                
            <Iconics/>
           
            </div>
            <div className='socialbuttons'>
            <div className='socials'>
                <Socialics/>
            </div>
            <div className='buttons'>
                <a href={List} download="MyResume" target='_blank'>
            <button className='button-17' >Resume</button>
            </a>
            <button className='button-17'>Contact me!</button>
            </div>
            </div>
            </div>
            </>
            
    );
}

export default Hero;