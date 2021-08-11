import Header from '../../components/Header';
import Scissor from '../../components/Scissor';
import Paper from '../../components/Paper';
import Spock from '../../components/Spock';
import Lizard from '../../components/Lizard';
import Rock from '../../components/Rock'
import { Button } from '../../style.js';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function App(props) {
  console.log(props.matchs);
  const { newGame } = props;

  return (
      <div className="App">
        <Header />
        <form>
          <div className="background-image">
            <Link
            className="scissor-main-screen"
              to='/match'
              onClick={ (event) => {
                console.log(event.target.name);
                newGame(event.target.name);
              } }
            ><Scissor /></Link>

            <div className="spock-paper">
              <Link
                to='/match'
                onClick={ (event) => {
                  console.log(event.target.name);
                  newGame(event.target.name);
                } }
              >
                <Spock />
              </Link>

              <Link
              to='/match'
              onClick={ (event) => {
                console.log(event.target.name);
                newGame(event.target.name);
              } }
              >
                <Paper />
              </Link>
            </div>
            <div className="lizard-rock">
            <Link
              to='/match'
              onClick={ (event) => {
                console.log(event.target.name);
                newGame(event.target.name);
              } }
              >
                <Lizard />
              </Link>

              <Link
              to='/match'
              onClick={ (event) => {
                console.log(event.target.name);
                newGame(event.target.name);
              } }
              >
                <Rock />
              </Link>
              
            </div>
          </div>
        </form>
        <Link className="link-rules" to="/rules" >
          <Button>Rules</Button>
        </Link>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    matchs: state.matchs,
    stateRules: state.stateRules,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: (option) => dispatch({ type: 'NEW_GAME', payload: option }),
    viewRules: () => dispatch({ type: 'VISIBLE_RULES' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
