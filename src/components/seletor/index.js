import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { set_tema } from "../../store/seletor_temas/seletor_temas.action"
import { temas } from "./temas.json"
function Seletor() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.Seletor)
    const selected_bg = result['dc'];
    return <>
        <div className="btn-group">
            <button type="button" className={`btn btn-outline-info dropdown-toggle ${result['bc']}`} data-bs-toggle="dropdown" aria-expanded="false">
                Selecionar tema
            </button>
            <ul className={`dropdown-menu ${selected_bg}`}>
                {Object.keys(temas).map((item, i) => (
                    <li key={i}><button className={`dropdown-item ${result['tc']}`} onClick={
                        () => {
                            dispatch(set_tema(`${temas[item].bg}`, `${temas[item].tc}`, `${temas[item].dc}`, `${temas[item].bc}`, `${temas[item].oc}`));
                        }
                    }>{temas[item].nome}</button></li>
                ))}
            </ul>
        </div>
    </>
}
export default Seletor