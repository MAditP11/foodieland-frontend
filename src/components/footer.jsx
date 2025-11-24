import Logo from '../assets/IMG_FOODIELAND/logo.png'
import LinkCustom from './linkCustom'

export default function Footer({ style }) {
  return (
    <footer class={`flex flex-col gap-8 justify-between w-full py-5 ${style}`}>
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-3">
          <div class="img-logo">
            <img src={Logo} alt="" />
          </div>

          <p className="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div class="flex justify-between gap-12">
          <LinkCustom name={'Recipe'} href={'#'}></LinkCustom>
          <LinkCustom name={'Blog'} href={'#'}></LinkCustom>
          <LinkCustom name={'Contact'} href={'#'}></LinkCustom>
          <LinkCustom name={'About us'} href={'#'}></LinkCustom>
        </div>
      </div>
      <div class="border-t border-black/10"></div>
      <div class="flex justify-center items-center gap-1.5">
        <p class="font-medium text-lg text-black/60">
          2020 Flowbase. Powered by
        </p>
        <p class="text-[#FF7967]/60">Webflow</p>
      </div>
    </footer>
  )
}
