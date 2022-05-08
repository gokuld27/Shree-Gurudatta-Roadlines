import classes from './Jumbotron.module.css';
import {Container} from 'react-bootstrap';

const Jumbotron = (props) => {
    return (
        <>
        <div style={{height: "80px"}}>

        </div>
        <div className={classes.jumbotron}>
            <div className={classes.background}>
            <Container className={classes.center_box}>
                <h4>{props.heading}</h4>
                <div className={classes.content}><p>Home </p> <div className={classes.dot_icon}> </div> <p>{props.pageName}</p></div>
            </Container>
            </div>
        </div>
        </>
    );
}

export default Jumbotron;