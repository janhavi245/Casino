import React from "react";
import { makeStyles } from "@material-ui/core/styles"

const usestyles=makeStyles((theme)=> ({
	foot: {
		position:"absolute",
		left:"0",
		bottom:"0",
		right:"0",
		height:"10%",
		backgroundColor: "#e0d8e8",
		textAlign: "center"
	}
}));

function Footer() {
	const cls=usestyles();
  return (
    <footer className={cls.foot}>
    	<p>&copy; 2021 Copyright</p>
    </footer>
  );
}

export default Footer;