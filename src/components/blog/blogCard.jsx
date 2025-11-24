import { User, Timer } from 'lucide-react'

export default function BlogCard({ Img, Title, Paragraf, Author, Date }) {
  return (
    <div class="card-article flex gap-8">
      <div class="img-card w-1/3 flex">
        <img src={Img} alt="" />
      </div>
      <div class="card-detail py-2 flex w-2/3 flex-col justify-between">
        <div class="card-sub-title flex flex-col gap-3">
          <p class="font-semibold text-2xl font-inter">{Title}</p>
          <p class="font-normal font-inter text-base leading-7 text-black/60">
            {Paragraf}
          </p>
        </div>
        <div class="card-publish flex items-center pb-1.5">
          <div class="user flex items-center gap-3 pr-6 border-r border-black/10">
            <div class="img-user rounded-full border-2">
              <User color="black" size={24} />
            </div>
            <div class="data-user">
              <p class="font-semibold text-base font-inter">{Author}</p>
            </div>
          </div>
          <div class="date pl-6">
            <p class="font-medium font-inter text-sm text-black/60">{Date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
