import api from '../../../services/pi/api'
import {add, clean, remove, update, get} from '../../lista/lista.action'
export const getLista= () =>{
    return dispatch => {
        api.get('/tarefa/search/-1').then(res =>  dispatch(get(res.data)))
    }
}