import React from 'react';
import { Link } from 'react-router-dom';

function ThirdRoute()
{
    return (
        <div>
            <h1>Third Route</h1>
            <Link to='/'>
                <button>First</button>
            </Link>
            <Link to='/second'>
                <button>Second</button>
            </Link>
        </div>
    );
}

export default ThirdRoute;