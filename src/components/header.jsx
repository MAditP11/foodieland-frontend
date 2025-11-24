import logo from '../assets/IMG_FOODIELAND/logo.png'
import LinkCustom from './linkCustom'
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si'

export default function Header() {
  return (
    <header class="flex justify-between w-full py-8 px-12 border-b border-black/10">
      <div class="logo">
        <img src={logo} alt="" />
      </div>

      <div class="navbar flex justify-between gap-12">
        <LinkCustom name={'Home'} href={'/'}></LinkCustom>
        <LinkCustom name={'Recipes'} href={'#'}></LinkCustom>
        <LinkCustom name={'Blog'} href={'/blog_article_list'}></LinkCustom>
        <LinkCustom name={'Contact'} href={'/contact'}></LinkCustom>
        <LinkCustom name={'About us'} href={'#'}></LinkCustom>
      </div>

      <div class="media flex justify-between gap-7">
        <a
          href="#"
          target="_blank"
          class="hover:text-teal-400 transition-colors"
        >
          <SiFacebook class="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          class="hover:text-teal-400 transition-colors"
        >
          <SiX class="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          class="hover:text-teal-400 transition-colors"
        >
          <SiInstagram class="w-5 h-5" />
        </a>
      </div>
    </header>
  )
}
