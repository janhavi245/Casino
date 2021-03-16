import React from "react";
import DisplayTable from "./DisplayTable";
import { makeStyles } from "@material-ui/core/styles"

const usestyles=makeStyles((theme)=> ({
	body: {
		position:"absolute",
		top: "10%"
	}
}));

function Content() {
	const cls=usestyles();
  return (
    <div className={cls.body}>
    	<DisplayTable />

    </div>
  );
}

export default Content;