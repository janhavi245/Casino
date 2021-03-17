import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
 
}));

function ShowPop(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       hello
      </Modal>
    </div>
  );
}

export default ShowPop;
