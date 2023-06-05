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
        {
            id: generateRandomString(),
            date: new Date(),
            tomato: 0,
            workTime: 0,
            pauseTime: 0,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.30.23'),
            tomato: 2,
            workTime: 2500,
            pauseTime: 124,
            stops: 3,
        },
        {
            id: generateRandomString(),
            date: new Date('5.29.23'),
            tomato: 3,
            workTime: 2660,
            pauseTime: 233,
            stops: 4,
        },
        {
            id: generateRandomString(),
            date: new Date('5.28.23'),
            tomato: 3,
            workTime: 2660,
            pauseTime: 233,
            stops: 4,
        },
        {
            id: generateRandomString(),
            date: new Date('5.27.23'),
            tomato: 2,
            workTime: 2500,
            pauseTime: 124,
            stops: 3,
        },
        {
            id: generateRandomString(),
            date: new Date('5.26.23'),
           tomato: 4,
            workTime: 1500,
            pauseTime: 0,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.25.23'),
            tomato: 4,
            workTime: 4500,
            pauseTime: 4500,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.24.23'),
            tomato: 3,
            workTime: 3660,
            pauseTime: 1383,
            stops: 4,
        },
        {
            id: generateRandomString(),
            date: new Date('5.23.23'),
            tomato: 3,
            workTime: 2660,
            pauseTime: 2033,
            stops: 4,
        },
        {
            id: generateRandomString(),
            date: new Date('5.22.23'),
            tomato: 2,
            workTime: 5500,
            pauseTime: 1024,
            stops: 3,
        },
        {
            id: generateRandomString(),
            date: new Date('5.21.23'),
            tomato: 4,
            workTime: 2500,
            pauseTime: 0,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.20.23'),
            tomato: 2,
            workTime: 2500,
            pauseTime: 124,
            stops: 3,
        },
        {
            id: generateRandomString(),
            date: new Date('5.19.23'),
            tomato: 4,
            workTime: 1500,
            pauseTime: 0,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.18.23'),
            tomato: 3,
            workTime: 2660,
            pauseTime: 233,
            stops: 4,
        },
        {
            id: generateRandomString(),
            date: new Date('5.17.23'),
            tomato: 4,
            workTime: 1500,
            pauseTime: 0,
            stops: 0,
        },
        {
            id: generateRandomString(),
            date: new Date('5.16.23'),
            tomato: 2,
            workTime: 2500,
            pauseTime: 124,
            stops: 3,
        },

    ],
    tasks: [
        {
            title: 'Сверстать сайт',
            tomato: 1,
            complete: 0,
            id: generateRandomString(),
            done: false,
        },
        {
            title: 'Aдаптив',
            complete: 0,
            tomato: 1,
            id: generateRandomString(),
            done: false,
        },
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
