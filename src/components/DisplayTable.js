import React from "react";
import { makeStyles } from "@material-ui/core/styles"

const usestyles=makeStyles((theme)=> ({
	tbl: {
		margin: "30%",
		width: "100%",
		backgroundColor: "#bdbdbd"
	}
}));

function DisplayTable() {
	const cls=usestyles();
  return (
    <div >
    	<div className={cls.tbl}>
	    	<table >
	    		<tr>
		    		<th>ID</th>
		    		<th>Slots</th>
		    		<th>Time</th>
		    	</tr>
	    	</table>
    	</div>
    </div>
  );
}

export default DisplayTable;