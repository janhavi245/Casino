import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import ShowPop from './ShowPop';

const usestyles=makeStyles((theme)=> ({
 root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  ths : {
		padding: "10px",
	},
  btn: {
		width:"100px",
		height:"30px",
		borderRadius: "5px",
		backgroundColor:"#795548",
		color:"white"
	}

}));

function DisplayTable() {
	const [rdata,setRdata] = useState([{id:-1,slot1:0,slot2:0,slot3:0,time:""}]);
	const [mflag, setMflag] = useState(false);
	const classes=usestyles();

	const rows= rdata.map((row)=>{
		return(
			<tr key={row.id}>
			<td className={classes.ths}>{row.id}</td>
			<td className={classes.ths}>{row.slot1}</td>
			<td className={classes.ths}>{row.slot2}</td>
			<td className={classes.ths}>{row.slot3}</td>
			<td className={classes.ths}>{row.time}</td>
			</tr>
			);
	});
	const handleClick= () => {
		setMflag(!mflag);
	};

  return (
  	<>
     <Grid container className={classes.root}>
      <Grid item xs={12} justify="center">
        <Grid container spacing={10}>
            <Grid item>
              <table>
	    		<tr>
		    		<th  className={classes.ths}>ID</th>
		    		<th  className={classes.ths}>Slot-1</th>
		    		<th  className={classes.ths}>Slot-2</th>
		    		<th  className={classes.ths}>Slot-3</th>
		    		<th  className={classes.ths}>Time</th>
		    	</tr>
		    	{rows}
	    	  </table>
            </Grid>
          	<Grid item>
          		<h1>Let's Play</h1>
          		<button className={classes.btn} onClick={()=>handleClick()}>Play</button>
          	</Grid>
      	</Grid>
      </Grid>
    </Grid>
    {
    	mflag ? <ShowPop handleClick={handleClick}/> : null
    }
    </>
  );
}

export default DisplayTable;