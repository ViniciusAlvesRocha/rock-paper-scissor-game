import React from 'react';
import { ContainerRules } from './style.js';
import imgRules from '../../images/image-rules-bonus.svg';
import iconClose from '../../images/icon-close.svg';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
/* import { History } from 'react-router'; */

const PopupRules = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <ContainerRules>
      <h2>Rules</h2>
      <img src={ imgRules } alt='rules' />
      <button
        className="btn-close-rules"
        onClick={ () => (history.push(history.goBack())) }>
        <img src={ iconClose } alt='icon close' />
      </button>
    </ContainerRules>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    hiddenRules: () => dispatch({ type: 'HIDDEN_RULES' }),
  }
}

export default connect(null, mapDispatchToProps)(PopupRules);