import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PatchIsLikeRecipe, { GetAllRecipes } from '../../api/recipeApi'

import { Timer, Utensils } from 'lucide-react'
import { FaHeart } from 'react-icons/fa'

export default function ListContainer() {
  const [recipes, setRecipes] = useState([])
  const [like, setLike] = useState({})
  useEffect(() => {
    GetAllRecipes().then(setRecipes).catch(console.error)
    if (recipes) {
      const initial = {}
      recipes.forEach((r) => {
        initial[r.id] == r.is_like
      })
      setLike(initial)
    }
  }, [recipes])
  return (
    <div className="list-recipes flex flex-col items-center gap-16 w-full py-5 px-12">
      <div className="sub-title flex flex-col gap-5 items-center w-3/4">
        <h1 className="font-semibold font-inter text-5xl">
          Simple and tasty recipes
        </h1>
        <p className="font-normal text-base font-inter text-black/60 leading-7 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          consectetur repellendus enim commodi alias cupiditate. Dolorem
          dignissimos odit exercitationem. Ad.
        </p>
      </div>

      <div className="content grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div className="relative" key={recipe.id}>
            <button
              onClick={async (e) => {
                e.preventDefault()
                e.stopPropagation()

                const current = like[recipe.id]

                // PATCH FormData
                const success = await PatchIsLikeRecipe(recipe.id, current)

                if (success) {
                  setLike((prev) => ({ ...prev, [recipe.id]: !current }))

                  setRecipes((prev) =>
                    prev.map((r) => {
                      if (r.id === recipe.id) {
                        const newLike = !r.is_like // toggle dari state TERBARU

                        const formData = new FormData()
                        formData.append('is_like', newLike)

                        fetch(`http://localhost:8080/api/recipe/${recipe.id}`, {
                          method: 'PATCH',
                          body: formData,
                        })

                        return { ...r, is_like: newLike }
                      }

                      return r
                    })
                  )
                }
              }}
              className="absolute top-7 right-8 p-2 bg-white rounded-full"
            >
              <FaHeart
                className={`w-5 h-5 transition-all duration-200 ${
                  recipe.is_like
                    ? 'text-option scale-125'
                    : 'text-[#DBE2E5] scale-100'
                }`}
              />
            </button>
            <Link
              to={`/recipe_detail/${recipe.id}`}
              className="card flex flex-col px-4 gap-5 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))] pb-7 pt-3 rounded-3xl"
            >
              <div className="img-recipe">
                <img
                  className="rounded-3xl"
                  src={`http://localhost:8080/${recipe.image}`}
                  alt=""
                />
              </div>
              <div className="name-recipe pl-2">
                <h3 className="font-semibold font-inter text-2xl leading-8">
                  {recipe.title}
                </h3>
              </div>
              <div className="etc flex w-full pl-2 gap-7">
                <div className="duration flex gap-2 items-center">
                  <Timer color="black" size={20} />
                  <p className="font-inter font-medium text-sm text-black/60">
                    {recipe.cook_time}
                  </p>
                </div>
                <div className="category flex gap-3">
                  <Utensils color="black" size={20} />
                  <p className="font-inter font-medium text-sm text-black/60">
                    {recipe.category}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/*             
            <CardList
              src={ImgCardList}
              nameRecipe={'Big and Juicy Wagyu Beef Cheesburger'}
              duration={'30 minues'}
              category={'Snack'}
            ></CardList> */}
      </div>
    </div>
  )
}
