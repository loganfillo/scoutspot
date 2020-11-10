import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
    login: {
        backgroundColor: 'lightgray',
        color: theme.text.color.primary,
        padding: '30vh',
        border: '2px black solid',
        margin: '5vw',
        textAlign: "center"
    }
}))

const Login = (props) => {

    const router = useRouter();
    const classes = useStyles();

    const { onLogin } = props;

    const [name, setName] = useState('');

    const onSubmit = () => {
        const user = {
            name,
        };
        //TODO: Handle the auth api request here, only call onLogin if successful
        window.localStorage.setItem('user', JSON.stringify(user));
        onLogin(user);
        hrouter.push("/home");
    }

    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <label>
                Enter Name:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} >
                </input>
            </label>
            <button onClick={onSubmit}>
                Click to Login
            </button>
        </div>
    )
}

export default Login;