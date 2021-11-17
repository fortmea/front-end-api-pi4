import {configureStore} from '@reduxjs/toolkit'
import CommitReducer from './commit/commit.reducer'
import listaReducer from './lista/lista.reducer'
import seletorReducer from './seletor_temas/seletor_temas.reducer'
export default configureStore({
    reducer:{
        Lista: listaReducer,
        Seletor: seletorReducer,
        Commit: CommitReducer
    }
})