import ImgDetailBlog from '../../assets/detail_blog&article/Mask Group (2).png'
import ImgDetailBlogSec from '../../assets/detail_blog&article/Rectangle 23 (1).png'
import { User } from 'lucide-react'
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si'

export default function DetailBlogContainer() {
  return (
    <div class="flex flex-col pt-16 gap-16 items-center">
      <div class="sub-title flex flex-col gap-10 items-center">
        <h1 class="font-semibold text-6xl font-inter">
          Full Guide to Becoming a Professional Chef
        </h1>
        <div class="card-publish flex items-center">
          <div class="user flex items-center gap-3 pr-6 border-r border-black/10">
            <div class="img-user rounded-full border border-black/50">
              <User color="black" size={24} />
            </div>
            <div class="data-user">
              <p class="font-bold text-base font-inter">Wade Warren</p>
            </div>
          </div>
          <div class="date pl-6">
            <p class="text-sm font-medium font-inter text-black/60">
              12 November 2021
            </p>
          </div>
        </div>
        <div class="w-2/3">
          <p class="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, in
            ab. Corrupti cumque consectetur inventore sequi, assumenda animi
            similique, natus adipisci omnis, eos laboriosam blanditiis alias
            nulla tenetur molestiae. Placeat.
          </p>
        </div>

        <img src={ImgDetailBlog} alt="" />
      </div>

      <div class="content flex gap-6 px-8 w-full">
        {/* LEFT CONTENT */}
        <div class="flex flex-col w-5/6 pl-10 gap-16">
          {/* <!-- section 1 --> */}
          <div class="flex flex-col gap-4 px-6">
            <p class="font-semibold text-2xl font-inter">
              How did you start out in the food industry?
            </p>
            <p class="font-normal text-base font-inter text-black/60 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolor ex quia minus voluptatibus animi asperiores commodi in,
              ipsum molestias doloremque libero laboriosam dolore debitis odit
              accusantium eos. Ab, debitis.
            </p>
          </div>
          {/* <!-- section 2 --> */}
          <div class="flex flex-col gap-4 px-6">
            <p class="font-semibold text-2xl font-inter">
              What do you like most about your job?
            </p>
            <p class="font-normal text-base font-inter text-black/60 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolor ex quia minus voluptatibus animi asperiores commodi in,
              ipsum molestias doloremque libero laboriosam dolore debitis odit
              accusantium eos. Ab, debitis.
            </p>
          </div>
          {/* <!-- section 3 --> */}
          <div class="flex flex-col gap-4 px-6">
            <p class="font-semibold text-2xl font-inter">
              Do you cook at home on your days off?
            </p>
            <img src={ImgDetailBlogSec} alt="" />
            <p class="font-normal text-base font-inter text-black/60 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolor ex quia minus voluptatibus animi asperiores commodi in,
              ipsum molestias doloremque libero laboriosam dolore debitis odit
              accusantium eos. Ab, debitis.
            </p>
          </div>
          {/* <!-- section 4 --> */}
          <div class="flex flex-col gap-4 px-6">
            <p class="font-semibold text-2xl font-inter">
              What would your advice be to young people looking to get their
              foot in the door?
            </p>
            <p class="font-normal text-base s font-inter text-black/60 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolor ex quia minus voluptatibus animi asperiores commodi in,
              ipsum molestias doloremque libero laboriosam dolore debitis odit
              accusantium eos. Ab, debitis.
            </p>
          </div>
          {/* <!-- qoutes --> */}
          <div class="py-8 px-6 bg-[linear-gradient(to_right,var(--color-slate-100),var(--color-slate-50),var(--color-white))]">
            <p class="font-medium font-inter text-4xl italic leading-16">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              autem molestiae culpa consequatur"
            </p>
          </div>
          {/* <!-- section 5 --> */}
          <div class="flex flex-col gap-4 px-6">
            <p class="font-semibold text-2xl font-inter">
              What is the biggest misconception that people have about being a
              professional chef?
            </p>
            <p class="font-normal text-base font-inter text-black/60 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolor ex quia minus voluptatibus animi asperiores commodi in,
              ipsum molestias doloremque libero laboriosam dolore debitis odit
              accusantium eos. Ab, debitis.
            </p>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div class="w-1/3 pr-10">
          <div class="share flex flex-col items-center gap-8">
            <div class="sub-title">
              <h2 class="font-semibold font-inter text-sm">SHARE THIS ON:</h2>
            </div>
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
        </div>
      </div>
    </div>
  )
}
