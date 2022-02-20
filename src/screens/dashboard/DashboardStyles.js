import { makeStyles } from "@material-ui/core";
import COLORS from "../../utils/Colors";

const styles = {
  navlinks: {
    display: "flex",
    marginLeft: '10px',
  },
  parentView: { 
    display: 'flex', 
  flexDirection: 'row',
   backgroundColor: COLORS.PRIMARY
   },

  title: {
    flexGrow: "1",
    color:COLORS.WHITE,
    cursor: "pointer",
    marginLeft: '10px',
    fontSize: '40px'
  },
  logo: {
    alignSelf: 'center',
    width: '40px',
    fontSize: '30px',
    color:COLORS.WHITE,
  },
  link: {
    textDecoration: "none",
    color:COLORS.WHITE,
    alignSelf: 'center',
    fontSize: "20px",
    marginRight: '20px',
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}


export default styles;
