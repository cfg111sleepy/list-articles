import { createStore, applyMiddleware, compose }    from 'redux'
import { rootReducer }                              from '../reducers/index'
import { reduxFirestore, getFirestore }             from 'redux-firestore'
import { reactReduxFirebase, getFirebase }          from 'react-redux-firebase'
import { firebase }                                 from '../configDB/config'
import thunk                                        from 'redux-thunk'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase) 
    )
)

export default store