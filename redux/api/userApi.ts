import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
// header와 body
// header - 암호, 보안
// body - payload (실데이터)
const headers = {
    "Content-Type": "application/json",
    // 보안이슈
    Authorization: "JWT fefege...",
}
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}
export const postUser = async (payload: 
    {userid:string, password:string, email:string, 
     name:string, phone:string, birth:string, address:string}) => {
         try{
             // 상황판단 (unknown-없을 때 data값, UserType[])
             // 서버에서 응답 오면 alert처리
             // headers는 보안때문에 있는것임
            const response : AxiosResponse<unknown, UserType[]> = await axios.post(`${SERVER}/api/user/signup`,payload, {headers})
            alert('진행 5 : 응답성공 '+JSON.stringify(response.data))
            return response.data
         }catch(err){
            return err;
         }
    }