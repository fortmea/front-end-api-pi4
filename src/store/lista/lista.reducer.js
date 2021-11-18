export default function listaReducer(state = {}, action) {
    switch (action.type) {
        case 'GET':
            state = action.payload
            return action.payload
        default:
            return state
    }
    

}