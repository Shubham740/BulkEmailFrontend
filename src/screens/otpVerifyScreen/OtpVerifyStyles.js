import IMAGES from "../../assets/Images";
import COLORS from "../../utils/Colors";

const styles = {
  container: {
    width: "100%",
    height: "640px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `url(${IMAGES.BACKGROUND})`,
  },
  cardStyle: {
    width: "500px",
    height: "450px",
    borderRadius: "10px",
    backgroundColor: COLORS.CARD_COLOR,
  },

  subView: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  otpMessage: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0px",
  },
  oneTimeMessage: {
    fontSize: "14px",
    color: COLORS.GREY,
    margin: "0px",
    marginTop: "8px",
  },
  seperatorStyle: {
    marginRight: "10px",
  },
  containerStyle: {
    height: "90px",
  },
  containerInputStyle: {
    width: "50px",
    height: "50px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "50px",
    marginTop: "10px",
  },
  customButtonStyle: {
    width: "200px",
    marginTop: "20px",
    height: "50px",
  },
};

export default styles;
