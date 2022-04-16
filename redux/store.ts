//애플리케이션의 모든 상태(data)는 하나의 스토어 안에 하나의 객체 트리 구조로 저장된다
// redux에는 단 하나의 상태(store)만 만든다
import { configureStore } from '@reduxjs/toolkit'
// package에서 찾아오는 라이브러리 > 설치하기
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
// import rootSaga from './sagas/index.ts'
// import rootSaga from './sagas/userSaga.ts'
// import rootReducer from './reducers/index.ts'

// 배포할 때 아래걸로 실행
const isDev = process.env.NODE_ENV === 'development' 
// const isProd = process.env.NODE_ENV === 'production' 

const sagaMiddleware = createSagaMiddleware()

const createStore = () =>{
    // store는 하나만 존재한다
    const store = configureStore({
        // reducer와 middleware로 존재한다
        // 분산되어있는 것을 root로 통일
        // 핵심은 store는 reducer와 middleware(saga)가 있다는 것
        reducer: rootReducer, 
        devTools: true,
        middleware: [sagaMiddleware],
    })
    sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore, {debug: isDev})
export type RootState = ReturnType<typeof rootReducer>