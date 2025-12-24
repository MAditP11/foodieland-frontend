import ImgPost1 from '../../assets/home/medsos/post1.png'
import ImgPost2 from '../../assets/home/medsos/post2.png'
import ImgPost3 from '../../assets/home/medsos/post3.png'
import ImgPost4 from '../../assets/home/medsos/post4.png'
import { SiInstagram } from 'react-icons/si'

export default function PostMediaContainer() {
  return (
    <div className="post flex flex-col items-center gap-20 w-full pt-5 pb-20 px-12 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))]">
      <div className="content-top flex flex-col gap-5 items-center">
        <h1 className="font-semibold font-inter text-5xl">
          Check out @foodieland on Instagram
        </h1>
        <p className="font-normal text-base font-inter text-black/60 leading-7 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, velit
          architecto neque quibusdam dolores libero voluptates!
        </p>
      </div>
      <div className="content-post flex justify-center gap-10">
        <img src={ImgPost1} alt="" />
        <img src={ImgPost2} alt="" />
        <img src={ImgPost3} alt="" />
        <img src={ImgPost4} alt="" />
      </div>
      <a
        className="post-button flex gap-3 items-center rounded-2xl px-6 py-4 bg-black"
        href="#"
      >
        <p className="font-semibold text-sm font-inter text-white">
          View our Instagram
        </p>
        <SiInstagram className="w-5 h-5 text-white" />
      </a>
    </div>
  )
}
