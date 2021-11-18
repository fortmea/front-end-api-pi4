import api from '../../../services/pi/api'
import { get } from '../../lista/lista.action'
export const getLista = () => {
    return dispatch => {
        api.get('/tarefa/search/-1').then(res => {
            if (res.data.length < 1) { dispatch(get({0:{
                "ITEM_ID": 0,
                "ITEM_DESC": "Lista vazia. Adicione items!"
            }})) }
            else { dispatch(get(res.data)) }
        })
    }
}
export const removeItem = (ID) => {
    return dispatch => {
        api.post('/tarefa/delete', { ITEM_ID: ID }).then(res => dispatch(getLista()))
    }
}
export const updateItem = (ID, data) => {
    return dispatch => {
        api.post('/tarefa/update', { ITEM_ID: ID, ITEM_DESC: data }).then(res => dispatch(getLista()))
    }
}
export const insertItem = (data) => {
    return dispatch => {
        api.post('/tarefa/tarefa', { ITEM_DESC: data }).then(res => dispatch(getLista()))
    }
}