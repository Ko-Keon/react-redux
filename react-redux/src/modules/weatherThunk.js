// 액션함수, 리듀서 작성

/** 날씨API를 사용하여 외부에서 값을 가져옴
 *  외부에서 값을 가져올때는 시간이 걸리기 때문에 비동기로 가져옴
 *  state : 날씨, loading 
 *  action : startloading(true), endloading(false), getWeather
 */

// 초기 state값
const initalState = {
    weather : null,
    loading : false
}

// 액션 생성 함수 >> thunk
// thunk를 사용하면 async 를 붙여서 비동기함수로 쓸수 있다
// async가 붙은 함수는 따로 계속 실행이되고 있다
export const getWeather = () => async (next) => {
    // getWeather 액션함수 실행 : loading true
    next({type:"startloading"})

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=35e5a6a1442bbe9dab8c5414437e8ce2&lang=kr');
    const data = await response.json();
    console.log(data.weather[0].description)
    // next를 이용하여 리듀서에 전달할 액션객체 작성
    next({type:"getWeather", payload:data.weather[0].description})
    
    // getWeather 액션함수 종료: loading false
    next({type:"endloading"})
}

// 리듀서
function weatherThunk (state=initalState, action) {
    switch(action.type) {
        case "getWeather":
            // 주소를 통해서 값 가져옴
            // 비동기로 값을 가져오기 때문에(시간차) 값이 들어가지않다
            // >> action 함수를 Thunk로 사용한다(비동기함수사용)
            return {
                ...state,
                weather : action.payload
            }
        case "startloading":
            return {
                ...state,
                loading : true
            }
        case "endloading":
            return {
                ...state,
                loading : false
            }
        default :
        return state
    }
}
export default weatherThunk;