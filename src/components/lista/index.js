import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeItem, updateItem, insertItem } from "../../store/fetchActions/lista"
function Lista() {
    const [nitem, setNitem] = useState("");
    const [uitem, setUitem] = useState("");
    const dispatch = useDispatch();
    const result = useSelector(state => state.Lista)
    const seletor_result = useSelector(state => state.Seletor)
    console.log(result);
    return <>
        <div className="list-group top-margin">
            {Object.keys(result).map((item, i) => (
                <li className={`list-group-item  ${seletor_result['oc']} bg-transparent  ${seletor_result['tc']}`} key={i}>
                    <h4 className="col"><small className="fs-6 form-label">nº {i + 1}<br /></small> <span>{result[i].ITEM_DESC}</span></h4>
                    <button className="btn btn-outline-danger col" onClick={
                        () => {
                            dispatch(removeItem(result[i].ITEM_ID));
                        }
                    }><i className="fa fa-remove" aria-hidden="true" ></i> Remover</button>
                    <button className={`btn ${seletor_result['bc']} col ms-1`} data-bs-toggle="modal" data-bs-target={`#modal${i}`} ><i className="fa fa-pencil" aria-hidden="true"></i> Editar</button>
                    <div className={`modal fade`} id={`modal${i}`} tabIndex="-1"  aria-hidden="true">
                        <div className={`modal-dialog`}>
                            <div className={`modal-content ${seletor_result['oc']} ${seletor_result['tc']} ${seletor_result['bg']}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Editar</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h6>ID: {result[i].ITEM_ID}</h6>
                                    <input type="text" placeholder="Nova descrição para a atividade" className={`${seletor_result['bg']} ${seletor_result['tc']} form-control ${seletor_result['oc']}`} value={uitem} onChange={(e) => setUitem(e.target.value)}></input>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Fechar</button>
                                    <button type="button" className={`btn ${seletor_result['bc']} ms-1`}  data-bs-dismiss="modal" onClick={
                                        () => {
                                            dispatch(updateItem(result[i].ITEM_ID, uitem));
                                            setUitem("");
                                        }
                                    }>Salvar mudanças</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}

        </div>
        <div className="row justify-content-center">
            <div className="top-margin-1h col-10">
                <input type="text" placeholder="Descrição para a atividade" className={`${seletor_result['bg']} ${seletor_result['tc']} form-control ${seletor_result['oc']}`} value={nitem} onChange={(e) => setNitem(e.target.value)}></input>
                <button className={`btn ${seletor_result['bc']} mb-3 top-margin-1h col-12`} onClick={
                    () => {
                        dispatch(insertItem(nitem));
                        setNitem("");
                    }
                }>
                    <i className="fa fa-plus" aria-hidden="true"></i> Adicionar
                </button>
            </div>
        </div>
    </>
}
export default Lista
