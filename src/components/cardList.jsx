import { Timer, Utensils } from 'lucide-react'

export default function CardList({ src, nameRecipe, duration, category }) {
  return (
    <div class="card flex flex-col items-center gap-5 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))] pb-7 pt-3 rounded-3xl">
      <div class="img-recipe">
        <img class="rounded-3xl" src={src} alt="" />
      </div>
      <div class="name-recipe pl-5">
        <h3 class="font-semibold font-inter text-2xl leading-8">
          {nameRecipe}
        </h3>
      </div>
      <div class="etc flex w-full pl-5 gap-7">
        <div class="duration flex gap-2 items-center">
          <Timer color="black" size={20} />
          <p className="font-inter font-medium text-sm text-black/60">
            {duration}
          </p>
        </div>
        <div class="category flex gap-3">
          <Utensils color="black" size={20} />
          <p className="font-inter font-medium text-sm text-black/60">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
}
