import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {add, remove, clean} from "../../store/lista/lista.action"

function Lista(){
    const [nitem, setNitem] = useState("");
    const dispatch = useDispatch();
    const result = useSelector(state => state.Lista)
    const seletor_result = useSelector(state => state.Seletor)
    return <>
    <div className="list-group top-margin">
    {Object.keys(result).map((item, i) => (
        <li className={`list-group-item  ${seletor_result['oc']} bg-transparent  ${seletor_result['tc']}`} key={i}>
            <h4 className="col"><small className="fs-6 form-label">nº {i+1}<br/></small> <span>{ result[item] }</span></h4>
            <button className="btn btn-outline-danger col"  onClick={
                ()=>{
                    dispatch(remove(item));
                }
                }><i className="fa fa-remove" aria-hidden="true" ></i> Remover</button>
        </li>
    ))}
    </div>
    <div className="row justify-content-center">
        <div className="top-margin-1h col-10">
        <input type = "text" placeholder="Descrição para a atividade" className={`${seletor_result['bg']} ${seletor_result['tc']} form-control ${seletor_result['oc']}`} value={nitem} onChange={(e) => setNitem(e.target.value)}></input>
    <button className={`btn ${seletor_result['bc']} mb-3 top-margin-1h col-12`} onClick={
                ()=>{
                    dispatch(add(nitem));
                    setNitem("");
                }
                }>
        <i className="fa fa-plus" aria-hidden="true"></i> Adicionar
    </button>
    <button className={`btn btn-outline-danger mb-3 mt-1 col-12`} onClick={
                ()=>{
                    dispatch(clean());
                }
                }>
        Limpar tudo / Resetar
    </button>
    </div>
    </div>
    </>
}
export default Lista
    