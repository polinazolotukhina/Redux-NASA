import React from 'react';
import { Link, IndexLink } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const Navigation = () => {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <IndexLink to="/" className="navbar-brand">Nasa</IndexLink>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/mars">Mars Photos</Link>
                        </li>
                        <li>
                            <Link to="/photo">Photo Of The Day</Link>
                        </li>
                    </ul>
               </div>
            </div>
        </nav>
    );
};

export default Navigation;
