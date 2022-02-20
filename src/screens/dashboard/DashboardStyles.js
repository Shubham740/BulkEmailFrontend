import { makeStyles } from "@material-ui/core";

const styles = {
    navlinks: {
      display: "flex",
      marginLeft: '10px',
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: '10px',
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }

  
  export default styles;
