import IMAGES from "../../assets/Images";
import COLORS from "../../utils/Colors";

const styles = {
  cardStyle: {
    width: "500px",
    height: "450px",
    borderRadius: "10px",
    backgroundColor: COLORS.CARD_COLOR,
  },
  container: {
    width: "100%",
    height: "640px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `url(${IMAGES.BACKGROUND})`,
  },
  customButtonStyle: {
    width: "120px",
    marginTop: "30px",
    height: "50px",
  },
};

export default styles;
