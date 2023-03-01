import { Add, Minus, Refresh2 } from 'iconsax-react'
import  { useEffect, useState } from 'react'

import './index.css'

interface Password {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

function App() {

  const [passwordLength, setPasswordLength] = useState(15)

  const [password, setPassword] = useState<Password>({
    length: 15,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  })

  const [newPassword, setNewPassword] = useState('')

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    generatePassword()
    handleCopied()
  },[])

  const handleChangeUppercase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase
    });
  }
  const handleChangeLowercase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase
    });
  }
  const handleChangeNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers
    });
  }
  const handleChangeSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols
    });
  }

  const handleSubPasswordLength = () => {
    passwordLength <= 10 ? 10 : setPasswordLength(passwordLength - 1)
    setPassword({
      ...password,
      length: passwordLength <= 10 ? 10 : passwordLength - 1
    })
  }

  const handleAddPasswordLength = () => {
    passwordLength >= 20 ? 20 : setPasswordLength(passwordLength + 1)
    setPassword({
      ...password,
      length: passwordLength >= 20 ? 20 : passwordLength + 1
    })
  }

  const generatePassword = () => {
    const uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const numbersArray = [0,1,2,3,4,5,6,7,8,9]
    const symbolsArray = ['!','@','#','$','%','^','&','*','(',')']

    let newPassword = []

    for(let i = 0; i < password.length; i++) {

      switch(Math.floor(Math.random() * 4)) {

        case 0:
          if(password.lowercase) newPassword.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)])
          else i--
        break

        case 1:
          if(password.uppercase) newPassword.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)])
          else i--
        break

        case 2:
          if(password.numbers) newPassword.push(numbersArray[Math.floor(Math.random() * numbersArray.length)])
          else i--
        break

        case 3:
          if(password.symbols) newPassword.push(symbolsArray[Math.floor(Math.random() * symbolsArray.length)])
          else i--
        break

      }
    }

    setNewPassword(newPassword.join('')) 

  }

  const handleCopied = () => {

    navigator.clipboard.writeText(newPassword)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <main className="h-screen tracking-tight box-border mx-6 my-6 md:mx-40 md:my-24 xl:mx-[28rem] xl:my-24">

      <section className="my-8">
        <h1 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">Random password generator</h1>
        <p className="text-lg md:text-2xl text-gray font-normal leading-tight mt-2">Using a password generator can help create pass that are difficult for others to guess or crack, improving the security of your online accounts.</p>
      </section>

      <section className="my-6 flex flex-col gap-6 items-center text-center relative">
        <input className="w-full bg-lilac-50 text-2xl text-black border border-solid border-black rounded-[32px] px-6 py-5 " value={newPassword} type="text" name="password" disabled/>
        <button className='absolute right-6 top-6 z-40' onClick={generatePassword}><Refresh2 size={24} color='#000' /></button>
        <button onClick={handleCopied} className="border border-solid border-black rounded-[32px] px-6 py-4 text-2xl font-medium bg-lilac-500">{copied ? 'Copied!' : 'Copy'}</button>
      </section>

      <section className="my-10">
        <h2 className="text-2xl text-black font-normal">Password length:</h2>
        <div className="border border-solid border-black rounded-[32px] flex items-center justify-center gap-5 mt-7 py-5 bg-lilac-50 text-black font-medium text-2xl">
          <button onClick={handleSubPasswordLength} className="border border-solid border-black rounded-[32px] bg-lilac-500 px-3 py-2 grid place-items-center"><Minus size={22} color='#0F1019'/></button>
          <input className='bg-lilac-50 w-10 pl-3' value={password.length} disabled/>
          <button onClick={handleAddPasswordLength} className="border border-solid border-black rounded-[32px] bg-lilac-500 px-3 py-2 grid place-items-center"><Add size={22} color='#0F1019'/></button>
        </div>
      </section>

      <section>
        <h2 className='text-2xl text-black font-normal'>Characters used:</h2>
        <div className='mt-5 flex text-black font-normal text-xl justify-between'>
          <div className='flex gap-3 items-center justify-center'>
            <input id='uppercase' type="checkbox" name="uppercase" checked={password.uppercase} onChange={handleChangeUppercase} className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500' />
            <label htmlFor="uppercase" className='uppercase pb-[2px]'>Abc</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='lowercase' type="checkbox" name="lowercase" checked={password.lowercase} onChange={handleChangeLowercase} className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500' />
            <label htmlFor="lowercase" className='lowercase pb-[2px]'>Abc</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='numbers' type="checkbox" name="numbers" checked={password.numbers} onChange={handleChangeNumbers} className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500' />
            <label htmlFor="numbers pb-[2px]">123</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='symbols' type="checkbox" name="symbols" checked={password.symbols} onChange={handleChangeSymbols} className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500' />
            <label htmlFor="symbols pb-[2px]">#$&</label>
          </div>
        </div>
      </section>

    </main>
  )
}

export default App
