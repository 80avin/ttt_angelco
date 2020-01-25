import React, { Component } from 'react'
import { connect } from 'react-redux';

class WordList extends Component {
    render() {
        return this.renderTable();
    }
    renderList() {
        console.log(this.props.words);
        const wordElements = this.props.words.map(el => {
            return (
                <li key={el.name} className="list-group-item d-flex justify-content-between align-items-center">
                    {el.name}
                    <span className="badge badge-primary badge-pill">
                        {el.count}
                    </span>
                </li>
            );
        });
        if (wordElements.length !== 0)
            return <ul className="list-group">{wordElements}</ul>
        else
            return <div><code>Enter non-zero N</code></div>
    }
    renderDataTable() {
        // TODO create a bootstrap datatable with pagination and sorting
        // $(e.target).DataTable();
    }
    renderTable() {
        // console.log(this.props.words);
        const wordElements = this.props.words.map(el => {
            return (
                <tr key={el.name} className="">
                    <td className="col-9">{el.name}</td>
                    <td className="col text-center">
                        <span className="badge badge-primary badge-pill">
                            {el.count}
                        </span>
                    </td>
                </tr>
            );
        });
        if (wordElements.length !== 0)
            return <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Word</th><th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {wordElements}
                </tbody>
            </table>
        else
            return <div><code>Enter non-zero N</code></div>
    }
}

const mapStateToProps = (state) => {
    return { words: state.words };
}

export default connect(mapStateToProps, null)(WordList);