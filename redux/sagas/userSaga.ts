import { PayloadAction } from '@reduxjs/toolkit'
// redux-saga의 내장함수
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// import { userActions } from '../../redux/reducers/userReducer.ts';
// import { postUser } from '../api/userApi.ts'

//액션은 반드시 어떤 형태의 액션이 실행될지 나타내는 type 속성을 가져야 합니다.
// type을 가지고 있는 객체를 액션으로 볼것
// 우리는 세팅만 해놓음(인터페이스) - 아직 액션이 되지않은 밀키트같은것
interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
// join에 전달
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

// 제너레이터 함수
function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        // 서버 왔다 간 상태
        // postUser > userApi.ts
        const response : UserJoinSuccessType = yield postUser(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
// 이벤트가 끝나면 사라짐
export function* watchJoin(){
    // 액션이 만들어 지면 실행
    // function* join을 호출
    // 맨 마지막것만 인식해라 (버튼 2번눌러도 맨 마지막것만 인식해라) - 회원가입시
    // yield - 액션(Join)이 실행될 때만 작동시키고 아닌 때는 지켜보기만 함
    // join버튼이 눌러졌을 때만 실행
    yield takeLatest(userActions.joinRequest, join)
}