import api from "../../../services/github/api";
import {get} from "../../commit/commit.action"
export const getCommitInfo = () =>{
    return dispatch => {
        api.get('/repos/fortmea/front-end-api-pi4/branches/main').then(res =>  dispatch(get(res.data)))
    }
}