import React from 'react';
import { Link } from 'react-router-dom';

function Colors()
{   
    var colors= ['purple', 'green', 'red'];

    let btns = colors.map(color =>
    {
        return (
            <Link key={color} to={`/results/${color}`}>
                <button>{color}</button>
            </Link>
        );
    });
    return (
        <div>
            <h1>Please pick a color to view cars</h1>
            {btns}
            
            
            {/* <Link to={`/results/${'purple'}`}>
                <button>Purple</button>
            </Link>
            <Link to={`/results/${'green'}`}>
                <button>Green</button>
            </Link>
            <Link to={`/results/${'red'}`}>
                <button>Red</button>
            </Link> */}
        </div>
    );
}


export default Colors;