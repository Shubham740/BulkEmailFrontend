import IMAGES from "../../assets/Images";
import styles from './CustomLogoStyles'

const CustomLogo =(props)=>{

    return(<div>
            <img src={IMAGES.LOGO}/>
            <p style={styles.title}>{props.title}</p>
    </div>)
}

export default CustomLogo;
