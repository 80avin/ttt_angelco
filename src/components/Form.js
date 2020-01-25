import React from 'react';
import { connect } from 'react-redux';
import { getWords, changeN } from './../actions'
import './../css/form.css'

class Form extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.getWords(this.props.n);
    }
    onChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        this.props.changeN(e.target.value);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group flex-nowrap">
                    <input 
                        type="number"
                        onChange={this.onChange} 
                        id="input_n" 
                        className="form-control" 
                        name="n" 
                        placeholder="Enter N" 
                        value={this.props.n}
                        required=""
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary input-group-text" id="addon-wrapping">Submit</button>
                    </div>
                </div>
            </form>
                );
            }
        }

const mapStateToProps = (state) => {
    return {n: state.n};
                        }
export default connect(mapStateToProps, {getWords, changeN})(Form);