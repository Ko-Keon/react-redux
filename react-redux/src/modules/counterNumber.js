// 액션, 리듀서를 작성하는 공간

/** counterNumber
 * 1. 입력한 값 만큼 증가
 * 2. 입력한 값 만큼 감소
 * 3. 증가감소할 값을 입력받아옴
 * state : count, num(증가 또는 감소 값)
 * action : "INCREASE_NUMBER", "DECREASE_NUMBER", "CHANGE_NUMBER"
 */

// 리듀서에 들어갈 초기값 > 값이 여러개 일 때 객체
const initalState = {
    count :0 ,
    num : 1
}

// 액션 생성 함수
export const increaseNumber = ()=>({type:"INCREASE_NUMBER"});
export const decreaseNumber = ()=>({type:"DECREASE_NUMBER"});
export const changeNumber = num =>({type:"CHANGE_NUMBER", payload:num});

// 리듀서 작성
function counterNumber(state=initalState, action) {
    switch(action.type) {
        case "INCREASE_NUMBER":
            // state의 값의 형태가 객체라면 그 형태를 계속 유지
            return {
                ...state,
                count : state.count + state.num
            }
        case "DECREASE_NUMBER":
            return {
                ...state,
                count : state.count - state.num
            }
        case "CHANGE_NUMBER":
            return {
                ...state,
                num : action.payload
            }
        default :
            return state
    }
}

export default counterNumber