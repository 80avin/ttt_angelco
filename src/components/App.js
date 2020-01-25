import React from 'react';

import Description from './Description';
import Form from './Form';
import WordList from './WordList';
import Credits from './Credits';
import './../css/App.css';

class App extends React.Component{
    render(){
        return (
            <div className="col-6 mx-auto">
                <div className="container mt-3">
                    <Description />
                </div>
                <div className="container mt-3">
                    <Form />
                </div>
                <div className="container mt-3 max-vh-100 overflow-auto">
                    <WordList />
                </div>
                <div className="container mt-3">
                    <Credits />
                </div>
            </div>
        )
    }
}

export default App;