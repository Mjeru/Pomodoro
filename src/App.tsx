import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import './main.global.css'
import { Header } from './shared/Header'
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './shared/NotFound'
import { Content } from './shared/Content'
import { Stats } from './shared/Stats'

function AppComponent() {
    const [mouted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export const App = hot(() => <AppComponent />)
