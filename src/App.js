import React, { useEffect } from 'react';
import ListaComponent from './components/lista';
import Seletor from './components/seletor';
//import CommitInfo from './components/commit'
import { useSelector, useDispatch } from "react-redux"
import preval from 'preval.macro'
import { getLista } from "../src/store/fetchActions/lista/"
function App() {
  const result = useSelector(state => state.Seletor)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getLista()) }, [dispatch])
  return (
    <div className={`${result['tc']} ${result['bg']}`} style={{ height: "100%", width: "100%" }} >
      <div >
        <div className="mt-5" >
          <h3>
            <i className="fa fa-list-alt" aria-hidden="true"></i> Lista de coisas à fazer
          </h3>
          <Seletor></Seletor>
          <ListaComponent></ListaComponent>
        </div>
        <p className="mt-5">
          Data de build: {preval`module.exports = new Date().toLocaleString();`} (GMT+0).

          <br /><a href="https://github.com/fortmea/front-end-api-pi4" className="text-decoration-none" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
        </p>
        
      </div>

    </div>
  );
}

export default App;
