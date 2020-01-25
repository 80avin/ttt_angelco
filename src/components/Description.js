import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">TTT challenge</h3>
                    <p className="card-text text-muted">
                        A small web app developed using Express, React(redux) and NodeJS as a challenge for job application of Software Engineer/Developer at Terribly Tiny Tales TTT.
                    </p>
                    <p className="card-text text-muted">
                        <h5>Purpose:</h5> Get the top <code>N</code> most frequently occurring words in <a href="http://terriblytinytales.com/test.txt">this file</a>.

                    </p>
                </div>
            </div>
        );
    }
}

export default Description;