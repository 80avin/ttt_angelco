import React from 'react';

class Credits extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <p className="card-text text-muted">
                        Developed by <a href="https://www.linkedin.com/in/80avin/">Avinash Thakur</a> using Express, React(redux) and NodeJS.
                    </p>
                </div>
            </div>
        );
    }
}

export default Credits;