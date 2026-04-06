import { useState } from 'react'
import './App.css'
import Box from './component/Box.jsx'

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [userReslut, setUserReslut] = useState('')
  const [computerReslut, setComputerReslut] = useState('')

  // 1. 박스 2개 (타이틀, 사진, 결과)
  // 2. 가위바위보 버튼 3개
  // 3. 버튼 클릭하면 클릭한 버튼이 박스에 보임
  // 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
  // 5. (3,4)의 결과를 가지고 누가 이겼는지 승패를 표시한다
  // 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면빨강, 비기면 검은색))
  const choice = {
    rock: {
      name: "rock",
      img: "https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886"
    },
    scissors: {
      name: "scissors",
      img: "https://img.icons8.com/emoji/1200/scissors-emoji.jpg"
    },
    paper: {
      name: "paper",
      img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
    }
  }
  const judgement = (user, computer) => {
    // user == computer 비김
    if (user.name == computer.name) return 'tie';
    else if (user.name == 'rock') return computer.name == 'scissors' ? 'win' : 'lose';
    else if (user.name == 'scissors') return computer.name == 'paper' ? 'win' : 'lose';
    else if (user.name == 'paper') return computer.name == 'rock' ? 'win' : 'lose';
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 array로 만든다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }
  function play(userCoice) {
    setUserSelect(choice[userCoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    let userResult = judgement(choice[userCoice], computerChoice)
    let computerResult;
    switch (userResult) {
      case 'win':
        computerResult = 'lose';
        break;
      case 'lose':
        computerResult = 'win';
        break;
      case 'tie':
        computerResult = 'tie';
        break;
    }
    setUserReslut(userResult)
    setComputerReslut(computerResult)
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={userReslut} />
        <Box title="Computer" item={computerSelect} result={computerReslut} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  )
}

export default App
