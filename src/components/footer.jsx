import Logo from '../assets/logo.png'
import LinkCustom from './linkCustom'

export default function Footer({ style }) {
  return (
    <footer
      className={`flex flex-col gap-8 justify-between w-full py-5 ${style}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <div className="img-logo">
            <img src={Logo} alt="" />
          </div>

          <p className="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex justify-between gap-12">
          <LinkCustom name={'Recipe'} href={'#'}></LinkCustom>
          <LinkCustom name={'Blog'} href={'#'}></LinkCustom>
          <LinkCustom name={'Contact'} href={'#'}></LinkCustom>
          <LinkCustom name={'About us'} href={'#'}></LinkCustom>
        </div>
      </div>
      <div className="border-t border-black/10"></div>
      <div className="flex justify-center items-center gap-1.5">
        <p className="font-medium text-lg text-black/60">
          2020 Flowbase. Powered by
        </p>
        <p className="text-[#FF7967]/60">Webflow</p>
      </div>
    </footer>
  )
}
