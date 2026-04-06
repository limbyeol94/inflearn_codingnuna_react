# inflearn_codingnuna_react

## StrictMode
- mina.jsx 에서 기본적으로 사용되고있음
- 2번씩 호출되게 함 (많은 요소의 확인)
## life cycle
const [count, setCount] = userState(0);
### 기본 useEffect
useEffect(()=>{
    화면 렌더
}.[])
### state useEffect 사용
useEffect(()=>{
    배열 안에 넣어놓은 state(count)가 업데이트 될 때마다 호출된다
}.[count])

### 종료 시 clear 처리 
useEffect(()=>{
    const interval = serInterval(()=>{
        console.log('count 실행')
    })
    return ()=>{
        <!-- 컴포넌트, 앱 등 사용화면 종료 시 처리됨 -->
        clearInterval(interval)
    }
},[])