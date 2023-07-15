import logo from "./logo.svg";
import "./App.css";
import React from 'react'

function App() {
  const [count,setCount]=React.useState(0)
  console.log(count)

  let allImages = [
    "https://m.media-amazon.com/images/I/71W5IMP9-cL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81wpcDfs7dL._AC._SR360,460.jpg",
    "https://m.media-amazon.com/images/I/71vxH0htYvL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71QH6ZsXHKL._AC_UL480_FMwebp_QL65_.jpg",
  ];

  const BtnClick=(direction)=>{
    if(direction==1) setCount(count+1)
    else setCount(count-1)
  }

  React.useEffect(()=>{
    if(count==4) setCount(0)
    else if(count==-1) setCount(3)
  })

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="Container">
        <button onClick={()=>BtnClick(-1)}>Left</button>
        <div className="ImageContainer">
          <img
            alt="image1"
            src={allImages[count]}
          />
        </div>
        <button onClick={()=>BtnClick(1) }>Right</button>
      </div>
    </div>
  );
}

export default App;
