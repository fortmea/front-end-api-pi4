import React from "react"
import { useSelector } from "react-redux"
function CommitInfo() {
    const seletor_result = useSelector(state => state.Seletor)
    const commit_result = useSelector(state => state.Commit)
    return <>
        <div className="mt-5">
            <button className={`btn ${seletor_result['bc']} ${seletor_result['tc']}`} type="button" data-bs-toggle="collapse" data-bs-target="#commit" aria-expanded="false" aria-controls="commit info">
                Mostrar informações da última atualização
            </button>
            <div class={`collapse`} id="commit">
                <div class={`card card-body ${seletor_result['bg']} ${seletor_result['tc']}`}>
                    <h5>Dados do último commit:</h5>
                    <span><i className="fa fa-file-text" aria-hidden="true"></i> Mensagem: {commit_result.commit.commit.message}</span>
                    <span><i className="fa fa-male" aria-hidden="true"></i> Autor: {commit_result.commit.author.login}</span>
                    <span><i className="fa fa-tree" aria-hidden="true"></i> Branch: {commit_result.name}</span>
                    <span><i className="fa fa-calendar" aria-hidden="true"></i> Data: {commit_result.commit.commit.author.date}</span>
                    <span><i className="fa fa-check" aria-hidden="true"></i> SHA: {commit_result.commit.sha}</span>
                </div>
            </div>

        </div>
    </>
}
export default CommitInfo