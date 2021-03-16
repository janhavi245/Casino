import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import logo from "../images/logo.png"

const usestyles=makeStyles((theme)=> ({

	Headbg : {
		display: 'flex',
		backgroundColor : '#e0d8e8',
		height:"10%"
	},
	limg: {
		margin : "10px",
		flexGrow: '1',
		color: "black"
	},
	btn: {
		width:"100px",
		height:"30px",
		borderRadius: "5px",
		backgroundColor:"#795548",
		color:"white"
	}

}));

function Header() {
	const cls=usestyles();
  return (
    <header>
      <AppBar className={cls.Headbg}>
      	<Toolbar>
      		<img src={logo} alt="LOGO" height="50px"/>
      		<h1 className={cls.limg}>Casino</h1>
      		<button className={cls.btn}>Login</button>
      	</Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;