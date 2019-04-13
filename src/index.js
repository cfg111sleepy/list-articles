import React            from 'react'
import ReactDOM         from 'react-dom'
import App              from './container/App'
import store            from './store/index'
import ErrorBoundary    from './component/ErrorBoundary/ErrorBoundary'
import { Provider }     from 'react-redux'

import './index.css'


ReactDOM.render(
            <Provider store={store}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Provider>,
            document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
