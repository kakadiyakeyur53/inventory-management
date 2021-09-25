import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink ,useHistory} from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
                Team Invento
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [enrollment, setEnrollment] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [alertmsg, setAlertmsg] = React.useState('');
    const [alert, setAlert] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 5000)

    }, [alert, success])

    async function onSubmitHandler(e) {
        e.preventDefault();

        if (password === "" || enrollment === "") {
            setAlert(true);
            setAlertmsg("Fill required details.")
            return;
        }

        let formData = {
            "mail": enrollment,
            "password": password,
        }

        try {
            var response = await fetch("http://localhost:4000/user/login", {
                method: "POST",
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            }).then(res => res.json())

            if (response.message === "USER_NOT_EXIST") {
                setAlert(true);
                setAlertmsg("Invalid mail id.")
            } else if (response.message === "LOGIN_SUCCESSFUL") {
                sessionStorage.setItem("islogin",true)
                setSuccess(true);
                setAlertmsg("Congrats! you are logged in.")
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
                history.push("/");
            } else if (response.message === "INVALID_PASSWORD") {
                setAlert(true);
                setAlertmsg("Invalid password")
            } else {
                setAlert(true);
                setAlertmsg("Please try again later. or Contact Co-ordinators");
            }
        } catch {
            setAlert(true);
            setAlertmsg("Oops! Something went wrong.")
        }
        console.log(response);

    }



    return (
        <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", borderRadius: "10px" }}>
            <div style={{ position: 'fixed', top: "10px", zIndex: 10, width: "20rem" }} >
                {alert && <Alert severity="error">{alertmsg}</Alert>}
                {success && <Alert severity="success">{alertmsg}</Alert>}
            </div>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="Email id"
                                label="Email id"
                                name="Email id"
                                onChange={(e) => setEnrollment(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                type="password"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                id="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        onClick={(e) => onSubmitHandler(e)}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/signup" variant="body2">
                                Don't have an account? Sign up
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}