import React, {Component} from 'react';
import {connect} from 'react-redux';

class Info extends Component{
    render() {
        return(
            <div>
                <h1>Welcome '{this.props.user.username}' </h1>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        user : state.user
    }
}

export default connect(mapStateToProps, null)(Info);
// export default Info;