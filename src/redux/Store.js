import { createStore} from 'redux'
import RootReducer  from './RootReducer'

const initalState = {

}

const Store = createStore(RootReducer)

export default Store;