import React,{useState} from 'react';
// redux 사용 : redux로 data를 넘기겠다
// import { useDispatch } from 'react-redux';
import tableStyles from '../common/styles/table.module.css'

// server까지 가는데 6단계
export default function  Join(){

// 람다식
// 일회성으로 작용 4p에서 5p로 넘어가서 다시 4p로 넘어가면 사라지고 없음
// 람다식으로 사용하는게 좋음
// 저장되는 데이터는 있어야 하기 때문에 redux를 사용한다
// const Join = () => {

    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    // 무상태
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }

    // 한번만 쓰는 기능은 ()없이 가능
    return <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            // 값을 전송하고 data초기화
            // userActions: 
            dispatch(userActions.joinRequest(user))
            // input 의 name과 동일해야함
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원가입</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이메일</b></td>
                    <td><input type="text" name='email' onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><input type="text" name='name' onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td><b>전화번호</b></td>
                    <td><input type="text" name='phone' onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td><b>생년월일</b></td>
                    <td><input type="text" name='birth' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><input type="text" name='address' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">회원가입</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}