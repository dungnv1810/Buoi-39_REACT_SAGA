import React from "react";
import {increment} from "./Action";
import {connect} from "react-redux";
import {selectCounter} from "./Selectors"
const Counter = (props) => {
    const {handleIncremant, counter} = props;
    const handleOnclickIncremant = () => {
        handleIncremant()
    }
    return(
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={handleOnclickIncremant}>increment + </button>
        </>
    )
}
const mapStateToProps = state => {
    return{
        counter: selectCounter(state)
    }
}
const mapDispatchToProps = dispatch => {
    return{
        handleIncremant: () => dispatch(increment())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);