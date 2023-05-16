import "./App.css";
import {ethers} from 'ethers'
import {useState} from "react"
function App() {
  const [wallet,setWallet] = useState("")
  const openMetaMask = async() => {
    let reqAccounts = "eth_requestAccounts"

    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send(reqAccounts,[]);

    console.log(accounts[0])
    setWallet(accounts[0])

  };
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <text id="wallet">{wallet}</text>
          <button id="connect" onClick={openMetaMask}>
            Connect
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
