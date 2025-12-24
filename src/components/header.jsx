import logo from '../assets/logo.png'
import LinkCustom from './linkCustom'
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si'

export default function Header() {
  return (
    <header className="flex justify-between w-full py-8 px-12 border-b border-black/10">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar flex justify-between gap-12">
        <LinkCustom name={'Home'} href={'/'}></LinkCustom>
        <LinkCustom name={'Recipes'} href={'#'}></LinkCustom>
        <LinkCustom name={'Blog'} href={'/blog_article_list'}></LinkCustom>
        <LinkCustom name={'Contact'} href={'/contact'}></LinkCustom>
        <LinkCustom name={'About us'} href={'#'}></LinkCustom>
      </div>

      <div className="media flex justify-between gap-7">
        <a
          href="#"
          target="_blank"
          className="hover:text-teal-400 transition-colors"
        >
          <SiFacebook className="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-teal-400 transition-colors"
        >
          <SiX className="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-teal-400 transition-colors"
        >
          <SiInstagram className="w-5 h-5" />
        </a>
      </div>
    </header>
  )
}
