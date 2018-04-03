import React from 'react';
import { Link } from 'react-router-dom';

function SecondRoute()
{
    return (
        <div>
            <h1>Second Route</h1>
            <Link to='/'>
                <button>First</button>
            </Link>
            <Link to='/third'>
                <button>Third</button>
            </Link>
        </div>
    );
}

export default SecondRoute;