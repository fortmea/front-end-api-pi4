import { default as UUID } from "uuid";
var initial_state;
var def_state = { 0: "Comece a adicionar itens na lista!" }
if (localStorage.getItem('state')) {
    if (IsValidJSONString(localStorage.getItem('state'))) {
        initial_state = JSON.parse(localStorage.getItem('state'));
    } else {
        initial_state = { 1:"Ocorreu um erro carregando a sua lista. O próximo item é o objeto JSON que contem a lista corrompida, caso te ajude.", 2: localStorage.getItem('state')}
    }
} else {
    initial_state = def_state
}
export default function listaReducer(state = initial_state, action) {
    switch (action.type) {
        case 'ADD':
            if (action.payload !== "") {
                if (state[0] === "Comece a adicionar itens na lista!") {
                    state = {}
                }
                localStorage.setItem('state', JSON.stringify({ ...state, [UUID.v4()]: action.payload }))
                return { ...state, [UUID.v4()]: action.payload }
            } else {
                return state
            }
        case 'REMOVE':
            var clone = Object.assign({}, state);
            delete clone[action.payload];
            localStorage.setItem('state', JSON.stringify(clone))
            return clone
        case 'CLEAN':
            localStorage.removeItem('state');
            state = {};
            return def_state
        default:
            return state
    }
}
function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}