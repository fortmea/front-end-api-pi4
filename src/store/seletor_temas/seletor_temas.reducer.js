var initial_state;
if (localStorage.getItem('tema')) {
    initial_state = JSON.parse(localStorage.getItem('tema'));
} else {
    initial_state = { bg: "bg-dark", tc: "text-light", dc:"dropdown-menu-dark", bc:"btn-outline-info", oc: "border-info" }
}
export default function seletorReducer(state = initial_state, action) {
    switch (action.type) {
        case 'SET':
            if (action.payload !== "") {
                document.body.classList=`${action.bg} ${action.tc} container`;
                localStorage.setItem('tema', JSON.stringify({ bg: action.bg, tc: action.tc, dc: action.dc, bc: action.bc, oc: action.oc }))
                return { bg: action.bg, tc: action.tc, dc: action.dc, bc: action.bc, oc: action.oc }
            } else {
                return state
            }
        default:
            document.body.classList=`${state.bg} ${state.tc} container`;
            return state
    }
}