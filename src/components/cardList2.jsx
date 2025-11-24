import { Timer, Utensils } from 'lucide-react'

export default function CardList2({ src, nameRecipe, duration, category }) {
  return (
    <div class="card flex flex-col items-center gap-4 pb-5 rounded-3xl">
      <div class="img-recipe">
        <img class="rounded-3xl" src={src} alt="" />
      </div>
      <div class="name-recipe">
        <h3 class="font-semibold text-lg font-inter leading-6">{nameRecipe}</h3>
      </div>
      <div class="etc flex w-full gap-6">
        <div class="duration flex gap-2">
          <Timer color="black" size={20} />
          <p className="font-inter font-medium text-sm text-black/60">
            {duration}
          </p>
        </div>
        <div class="category flex gap-2">
          <Utensils color="black" size={20} />
          <p className="font-inter font-medium text-sm text-black/60">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
}
