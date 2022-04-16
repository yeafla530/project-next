import { createSlice } from "@reduxjs/toolkit"

// class라고 생각하기
// 몽고DB의 스키마
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}


export interface UserState{
    // 요구하는 중이면 추가 방어하지 마라 (두번 액션 취하는걸 막아줌)
    loading: boolean;
    // UserState와 이름 통일 (abcState면 abcType으로 설정)
    data: UserType[];
    error: any;
}

// userSlice로 넘김
const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    // consumer형태
    // 아직 reducer가 되지 않았다 > 곧 전환 될거야
    reducers: {
        // 아직 함수가 안된 상태 (밀키트같은 느낌)
        // 완벽한 reducer는 우리가 볼 수없음
        joinRequest(state: UserState, payload){
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        // payload가 액션
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer