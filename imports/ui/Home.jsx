import React, {Component} from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';

import {connect} from 'react-redux';
import {login} from '../actions/actions';

import {history} from "../../client/main";

class Home extends Component {

    state = {
        username: '',
        password: '',
        error: false,
        message: ''
    };

    render() {
        return (
            <div className='login-form'>
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}
                </style>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log in
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input onChange={(event) => {
                                    this.setState({username: event.target.value})
                                }} fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                                <Form.Input onChange={(event) => {
                                    this.setState({password: event.target.value})
                                }} fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

                                <Button onClick={this.submit} color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <div>
                            <h5>{this.state.message}</h5>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    submit = (event) => {
        event.preventDefault();

        if (this.state.username === 'test' && this.state.password === 'test') {
            this.setState({message: 'success', error: false});
            this.props.login(this.state);
            history.push("/Info")
        } else {
            this.setState({message: 'failed', error: true});
        }
    }
}

const mapDispacthToProps = (dispacth) => {
    return {
        login: (user) => dispacth(login(user))
    }
}


export default connect(null, mapDispacthToProps)(Home)
