import { useState } from 'react'
import ImgLeftSide from '../assets/IMG_FOODIELAND/subs/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'
import ImgRightSide from '../assets/IMG_FOODIELAND/subs/Photo.png'

export default function SubscribeContainer({ style }) {
  const [email, setEmail] = useState([])

  const [input, setInput] = useState('')

  const addEmail = () => {
    setEmail([...email, { email: input, createAt: Date.now() }])
    setInput('')
  }
  return (
    <div class={`subscribe w-full py-5 ${style}`}>
      <div class="bg-primary py-20 rounded-3xl relative flex flex-col items-center gap-16">
        <div class="sub-title flex flex-col items-center gap-8 w-1/2">
          <h1 class="text-5xl font-semibold font-inter">
            Deliciousness to your inbox
          </h1>
          <p className="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit
            doloribus ullam voluptas distinctio aliquam soluta repudiandae.
            Atque, iusto ratione.
          </p>
        </div>

        <div class="sendbox flex pr-2 pl-5 py-2 bg-white rounded-xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Your email address..."
            class="flex-1 w-80 bg-transparent border-none outline-none font-inter font-medium text-sm"
          />
          <button
            onClick={addEmail}
            class="text-white bg-black px-8 py-3.5 rounded-xl"
          >
            <p className="font-inter font-semibold text-sm text-white">
              Subscribe
            </p>
          </button>
        </div>

        <img class="absolute left-0 bottom-0" src={ImgLeftSide} alt="" />

        <img class="absolute right-0 bottom-0" src={ImgRightSide} alt="" />
      </div>
    </div>
  )
}
