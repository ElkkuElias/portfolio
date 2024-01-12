import React, { useState } from 'react';
import FitnessApp from './projects/FitnessApp.png';
import ClinicSimulator from './projects/ClinicSimulator.png';
import HeartAnalysis from './projects/HeartAnalysis.png';
import './projects.css';

const Projects = () => {
    const projects = [
        { name: 'FitnessApp', image: FitnessApp, description: 'MERN stack project for web development course.', link: 'https://group1-jh7u.onrender.com/',link2: 'https://github.com/ElkkuElias/frntendfit' },
        { name: 'ClinicSimulator', image: ClinicSimulator, description: 'ClinicSimulator is a Java project for Object oriented programming course.', link: 'https://example.com/clinicsimulator' },
        { name: 'HeartAnalysis', image: HeartAnalysis, description: 'This project is a heart rate monitoring system built with a Raspberry Pi Pico microcontroller and a PPG (photoplethysmography) sensor.', link: 'https://example.com/heartanalysis' }
    ];

    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredProject(index);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className='project'>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className='projectcard'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='projecttext'>
                        <p className="description">{project.description}</p>
                    </div>
                    {hoveredProject === index ? (
                        <div className='projectbuttons' style={{ backgroundImage: `url(${project.image})` }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='button-3'>Demo</a>
                            <a href={project.link2} target="_blank" rel="noopener noreferrer" className='button-3'>Code</a>
                        </div>
                    ) : (
                        <img src={project.image} alt={project.name} className='projectimage' />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Projects;