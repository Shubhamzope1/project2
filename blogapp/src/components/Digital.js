import React from 'react';
import '../Styles/home.css';
import axios from 'axios'; // Axios is a Javascript library used to make HTTP requests from node. js 



//mounting method of reACT WHERE WE PUT ELEMENTS TOGETHER

class Digital extends React.Component {
    constructor() {
        super();
        this.state = {
            Digital: []
        }
    }
    componentDidMount() {        //its
        sessionStorage.clear();
        axios({
            url: 'https://blogbackend-1ayu.onrender.com/Digital',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ Digital: respone.data.Digital })
            })
            .catch()

    }

    // REACT LIFECYCLE - UPDATING  RENDER -  the method that actually outputs the HTML to the DOM.
    render() {
        const { Digital } = this.state;
        return (
            <div>
                <div id="digco" className="container text-light">
                    <h1 id="digital" className="h1 text-light">Digital</h1>
                    <br />
                    {/*{ Data in content should be stored with \n where you want to show data in new line } */}
                    {Digital.map((item) => {
                        return <div  className="whitespace">
                            <h4 id="h4" className="container text-light">Topic-{item.name} </h4>
                            <p id="P" className="container text-light">{item.content}
                            </p>
                        </div>


                    })}
                </div>
            </div>
        )
    }
}
export default Digital;