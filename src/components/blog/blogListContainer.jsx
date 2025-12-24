import BlogCard from '../components/blog/blogCard'
import ImgBlog from '../assets/blog/Mask Group (1).png'
import ImgOtherRecipe1 from '../assets/details/other-recipe/Mask Group.png'
import ImgAds from '../assets/details/other-recipe/Ads.png'
import OtherRecipeCard from '../components/recipe/otherRecipeCard'

export default function BlogListContainer() {
  return (
    <div class="blog-article flex flex-col pt-14 gap-14 items-center">
      <div class="sub-title flex flex-col gap-6 items-center">
        <h1 class="font-semibold text-6xl font-inter">Blog & Article</h1>
        <p class="font-normal font-inter text-base leading-7 text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          aspernatur?
        </p>
      </div>
      <div class="search w-1/2 flex gap-6 pr-2 pl-5 py-2 bg-white rounded-2xl border border-black/10">
        <input
          type="text"
          placeholder="Search article, news or recipe..."
          class="text-sm font-medium font-inter flex-1 bg-transparent border-none outline-none"
        />
        <button class="text-white text-sm font-semibold font-inter bg-black px-8 py-3 rounded-xl">
          search
        </button>
      </div>
      <div class="content flex gap-6 px-8 w-full">
        {/* LEFT CONTENT */}
        <div class="flex flex-col w-5/6 gap-8">
          <BlogCard
            Img={ImgBlog}
            Title={'Crochet Projects for Noodle Lovers'}
            Paragraf={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore commodi dignissimos enim fugiat, magni beatae blanditiis'
            }
            Author={'Wade Warren'}
            Date={'12 November 2021'}
          />
          <BlogCard
            Img={ImgBlog}
            Title={'Crochet Projects for Noodle Lovers'}
            Paragraf={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore commodi dignissimos enim fugiat, magni beatae blanditiis'
            }
            Author={'Wade Warren'}
            Date={'12 November 2021'}
          />
          <BlogCard
            Img={ImgBlog}
            Title={'Crochet Projects for Noodle Lovers'}
            Paragraf={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore commodi dignissimos enim fugiat, magni beatae blanditiis'
            }
            Author={'Wade Warren'}
            Date={'12 November 2021'}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div class="w-1/3 flex flex-col px-4 gap-16">
          <div class="other-recipe flex flex-col gap-6">
            <div class="sub-title">
              <h2 class="font-semibold font-inter text-3xl">Tasty Recipe</h2>
            </div>
            <div class="flex flex-col gap-5">
              <OtherRecipeCard
                Img={ImgOtherRecipe1}
                Title={'Chicken Meatball with Creamy Chess...'}
                Author={'Andreas Pauls'}
              />
              <OtherRecipeCard
                Img={ImgOtherRecipe1}
                Title={'Chicken Meatball with Creamy Chess...'}
                Author={'Andreas Pauls'}
              />
              <OtherRecipeCard
                Img={ImgOtherRecipe1}
                Title={'Chicken Meatball with Creamy Chess...'}
                Author={'Andreas Pauls'}
              />
            </div>
          </div>

          <div class="ads">
            <img src={ImgAds} alt="" />
          </div>
        </div>
      </div>
      <div class="pagination flex gap-3">
        <div class="flex font-inter font-bold text-lg justify-center items-center h-11 w-11 border border-black/10 rounded-xl">
          1
        </div>
        <div class="flex font-inter font-bold text-lg justify-center items-center h-11 w-11 border border-black/10 rounded-xl">
          2
        </div>
        <div class="flex font-inter font-bold text-lg justify-center items-center h-11 w-11 border border-black/10 rounded-xl">
          3
        </div>
        <div class="flex font-inter font-bold text-lg justify-center items-center h-11 w-11 border border-black/10 rounded-xl">
          ...
        </div>
        <div class="flex font-inter font-bold text-lg justify-center items-center h-11 w-11 border border-black/10 rounded-xl">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  )
}
