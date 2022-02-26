import { makeStyles } from "@material-ui/core";
import COLORS from "../../utils/Colors";

const styles = {
  navlinks: {
    display: "flex",
    marginLeft: '10px',
  },
  parentView: {
    display: 'flex',
    height: '70px',
    flexDirection: 'row',
    backgroundColor: COLORS.PRIMARY
  },

  logoImage: {
    width: '200px',
    height: '50px',
    alignSelf: 'center',
    marginLeft: '10px'
  },

  title: {
    flexGrow: "1",
    color: COLORS.WHITE,
    cursor: "pointer",
    alignSelf: 'center',
    marginLeft: '10px',
    fontSize: '40px'
  },
  logo: {
    alignSelf: 'center',
    width: '40px',
    fontSize: '30px',
    color: COLORS.WHITE,
  },
  signOut: {
    alignSelf: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  link: {
    textDecoration: "none",
    color: COLORS.WHITE,
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
