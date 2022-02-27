import IMAGES from '../../assets/Images';
import COLORS from '../../utils/Colors'
export const styles = {
  
  container: {
    width: '100%',
    height: '640px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${IMAGES.BACKGROUND})`
  },
  cardStyle: {
    width: '500px',
    height: '400px',
    borderRadius: '10px',
    backgroundColor: COLORS.CARD_COLOR
  },
  customButtonStyle: { width: '200px', marginTop: '30px', height: '50px' }

};