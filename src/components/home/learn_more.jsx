import ImgLearnMore from '../../assets/home/learn_more/learn_more_img.png'
import ImgTomato from '../../assets/home/learn_more/tomato.png'
import ImgUnion from '../../assets/home/learn_more/union.png'
import ImgVegan from '../../assets/home/learn_more/vegan.png'
import ImgMeat from '../../assets/home/learn_more/meat.png'

export default function LearnMoreContainer() {
  return (
    <div className="learn-more flex gap-32 items-center justify-between w-full self-stretch py-5 px-12">
      <div className="content flex flex-col gap-14 w-1/2">
        <div className="content-top flex flex-col gap-4">
          <h1 className="font-semibold font-inter text-5xl">
            Everyone can be a chef in their own kitchen
          </h1>
          <p className="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            veniam eius suscipit fugiat libero dolorem facere rerum molestiae
            odio velit.
          </p>
        </div>

        <a
          className="content-button bg-black w-fit px-8 py-4 rounded-xl"
          href="#"
        >
          <p className="font-semibold font-inter text-sm text-white">
            Learn more
          </p>
        </a>
      </div>

      <div className="img-content relative w-1/2 h-[510px] rounded-2xl bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))]">
        <img className="absolute -left-14" src={ImgLearnMore} alt="" />
        <img
          className="absolute -left-6 bottom-24 w-12"
          src={ImgTomato}
          alt=""
        />
        <img className="absolute w-14 right-40 top-20" src={ImgUnion} alt="" />
        <img className="absolute w-16 right-10 top-36" src={ImgVegan} alt="" />
        <img className="absolute left-12 w-16 top-12" src={ImgMeat} alt="" />
      </div>
    </div>
  )
}
