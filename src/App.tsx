import { Add, Minus, Refresh2 } from 'iconsax-react'

import './index.css'

function App() {

  return (
    <main className="tracking-tight box-border mx-6 my-6 md:mx-40 md:my-24 xl:mx-[30rem] xl:my-24">

      <section className="my-8">
        <h1 className="text-2xl text-black font-medium">Random password generator</h1>
        <p className="text-lg text-gray font-normal leading-tight mt-2">Using a password generator can help create pass that are difficult for others to guess or crack, improving the security of your online accounts.</p>
      </section>

      <section className="my-6 flex flex-col gap-6 items-center text-center relative">
        <input className="w-full bg-lilac-50 text-2xl text-black border border-solid border-black rounded-[32px] px-6 py-5 " value='Papito random' type="text" name="password" />
        <button className='absolute right-6 top-6 z-40'><Refresh2 size={24} color='#000' /></button>
        <button className="border border-solid border-black rounded-[32px] px-6 py-4 text-2xl font-medium bg-lilac-500">Copy</button>
      </section>

      <section className="my-10">
        <h2 className="text-2xl text-black font-normal">Password length:</h2>
        <div className="border border-solid border-black rounded-[32px] flex items-center justify-center gap-5 mt-7 py-5 bg-lilac-50 text-black font-medium text-2xl">
          <button className="border border-solid border-black rounded-[32px] bg-lilac-500 px-3 py-2 grid place-items-center"><Minus size={22} color='#0F1019'/></button>
          <p>15</p>
          <button className="border border-solid border-black rounded-[32px] bg-lilac-500 px-3 py-2 grid place-items-center"><Add size={22} color='#0F1019'/></button>
        </div>
      </section>

      <section>
        <h2 className='text-2xl text-black font-normal'>Characters used:</h2>
        <div className='mt-5 flex text-black font-normal text-xl justify-between'>
          <div className='flex gap-3 items-center'>
            <input id='uppercase' type="checkbox" name="uppercase" className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500'/>
            <label htmlFor="uppercase" className='uppercase'>Abc</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='lowercase' type="checkbox" name="lowercase" className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500'/>
            <label htmlFor="lowercase" className='lowercase'>Abc</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='numbers' type="checkbox" name="numbers" className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500'/>
            <label htmlFor="numbers">123</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input id='symbols' type="checkbox" name="symbols" className='border-2 rounded border-black text-lilac-500 checked:bg-check focus:ring-lilac-500'/>
            <label htmlFor="symbols">#$&</label>
          </div>
        </div>
      </section>

    </main>
  )
}

export default App
