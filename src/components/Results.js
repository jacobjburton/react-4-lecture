import React from 'react';
import axios from 'axios';

class Results extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            cars: []
        };
    }

    componentDidMount()
    {
        
        axios.get('https://joes-autos.herokuapp.com/api/vehicles?color=' + this.props.match.params.color).then( res =>
        {
            this.setState(
            {
                cars: res.data
            });
        });
    }

    render()
    {
        //console.log(props);
        return (
            <div>
                <h3>Here are the results:</h3>
                url parameter value is: {this.props.match.params.color}
                <br/>
                { JSON.stringify(this.state.cars, null, 2) }
            </div>
        );
    }
}

export default Results;