import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (

    <div className="info">
        <div className = "container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <h1>National Aeronautics and Space Administration (NASA)</h1>
              <p>
              The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research.</p>

        <p>President Dwight D. Eisenhower established NASA in 1958[10] with a distinctly civilian (rather than military) orientation encouraging peaceful applications in space science. The National Aeronautics and Space Act was passed on July 29, 1958, disestablishing NASA's predecessor, the National Advisory Committee for Aeronautics (NACA). The new agency became operational on October 1, 1958.</p>

        <p>Since that time, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. Currently, NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System and Commercial Crew vehicles. The agency is also responsible for the Launch Services Program (LSP) which provides oversight of launch operations and countdown management for unmanned NASA launches.

        NASA science is focused on better understanding Earth through the Earth Observing System,[13] advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program,[14] exploring bodies throughout the Solar System with advanced robotic spacecraft missions such as New Horizons,[15] and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs.[16] NASA shares data with various national and international organizations such as from the Greenhouse Gases Observing Satellite. Since 2011, NASA has been criticized for low cost efficiency, achieving little results in return for high development costs.
            </p>
                      <Link className="btn btn-default" to="mars">Mars Photos</Link>
                      <Link className="btn btn-default" to="photo">Photo of the day</Link>
            </div>
          </div>
        </div>
    </div>


  );
};

export default HomePage;
