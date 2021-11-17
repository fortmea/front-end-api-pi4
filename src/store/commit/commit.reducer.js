export default function CommitReducer(state = {commit:{commit:{author:{}}, author:{}}}, action) {
    switch (action.type) {
        case "GET":
            return action.payload
        default:
            console.log(state)
            return state
    }
}