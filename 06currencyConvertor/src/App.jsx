import { useState } from 'react'
import {InputBox} from './componets'
import useCurrencyInfo from './hook/useCurrencyConveterInfo'




function App() {
  const [amount, setAmount] = useState()
  const [from,setFrom] = useState("usd")
  const [to,setto] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setto(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://imgs.search.brave.com/UDMXMFoUsLtZEAwDcgyOh8ZUcl5SMAW04xV07BC42cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aW1l/LW1vbmV5LTI4NDQ2/ODcwLmpwZw')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setAmount(amount)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                        
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onChange={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setto(amount)}
                          selectCurrency={from}
                          amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}


export default App
