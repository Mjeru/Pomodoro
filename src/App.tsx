import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import './main.global.css'
import { Header } from './shared/Header'
import { Provider, useDispatch, useSelector } from 'react-redux'
// import { store } from './store'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './shared/NotFound'
import { Content } from './shared/Content'
import { Stats } from './shared/Stats'
import { TimerContainer } from './shared/TimerContainer'
import { statAdd } from './store/actions'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './store'
import { useIsMount } from './hooks/useMounted'
import { RootState } from './store/reducer'

function AppComponent() {
    useEffect(() => {
        document.documentElement.dataset.theme = store.getState().theme
        store.dispatch(statAdd({ date: new Date(), workTime: 0, pauseTime: 0, tomato: 0, stops: 0}))
    }, [])
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <TimerContainer>


            <Routes>
                <Route path={'*'} element={<NotFound />} />
                <Route
                    path={'/'}
                    element={
                        <Layout>
                            <Header />
                        </Layout>
                    }
                >
                    <Route path={'/'} element={<Content />} />
                    <Route path={'/stats'} element={<Stats />} />
                </Route>
            </Routes>
            </TimerContainer>
            </PersistGate>
        </Provider>
    )
}

export const App = hot(() => <AppComponent />)
