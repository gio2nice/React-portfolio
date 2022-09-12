import React from 'react';
import headshot from '../assests/headshot.jpeg'

export default function About() {
    return (
        <div class="p-3 mb-2 bg-dark text-white" >
            <h1>About Me</h1>
            <img width={350} src={headshot} className="headshot" alt='My headshot'></img>
            <p>
                Hey everyone! My name is Robertson and I am a new full stack developer ready to kick start my new developer career this fall/winter of 2022. I have just completed the UW Full stack development bootcamp in the course of 3 months.
                Some skills I feel very confident in are JavaScript, HTML, MYSQL, Express and Node, currently still getting the hang of React but by the day getting better. 
                I'm located in the Puyallup, WA area and willing to travel anywhere. 
            </p>
        </div>
    );
}