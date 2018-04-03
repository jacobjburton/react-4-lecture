import React from 'react';
import { Link } from 'react-router-dom';

function FirstRoute()
{
    return (
        <div>
            <h1>First Route</h1>
            <Link to='/second'>
                <button>Second</button>
            </Link>
            <Link to='/third'>
                <button>Third</button>
            </Link>
            <a href="http://www.espn.com" target='_blank' rel="noopener noreferrer">
                <button>away from app</button>
            </a>
        </div>
    );
}

export default FirstRoute;