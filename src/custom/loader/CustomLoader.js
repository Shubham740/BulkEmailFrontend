
import Loader from "react-js-loader";
import COLORS from "../../utils/Colors";


const CustomLoader =({isLoading})=>{
    return (
        <div>
            {isLoading==true? <Loader  bgColor ={COLORS.PRIMARY} 
                    
            /> : <> </>  }
        </div>
    )
}

export default CustomLoader;
