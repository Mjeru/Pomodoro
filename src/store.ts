import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer, RootState } from './store/reducer'
import { generateRandomString } from './util/react/generateRandomIndex'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
export const initialState: RootState = {
    theme: 'dark',
    stats: [

    ],
    tasks: [
    ],
    timerModel: {
        options: {
            workTime: 1500,
            pauseTime: 300,
        },
        mode: 'stop',
        part: 'work',
        time: 1500,
        event: null
    },
}
const persistConfig = {
    key: 'root',
    storage,
}
// export const store = createStore(
//     persistReducer(persistConfig, rootReducer),
//     composeWithDevTools(applyMiddleware(thunk))
// )


const persistedReducer = persistReducer(persistConfig, rootReducer)

export  const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
export  const persistor = persistStore(store)
