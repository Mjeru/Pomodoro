import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer, RootState } from './store/reducer'
import { generateRandomString } from './util/react/generateRandomIndex'

export const initialState: RootState = {
    stats: [
        {
            date: new Date(),
            tomato: 0,
            workTime: 0,
            pauseTime: 0,
            stops: 0,
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
}

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
