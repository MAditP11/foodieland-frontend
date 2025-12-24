import Breakfast from '../../assets/home/categories/breakfast.png'
import Vegan from '../../assets/home/categories/vegan.png'
import Meat from '../../assets/home/categories/meat.png'
import Desert from '../../assets/home/categories/dessert.png'
import Lunch from '../../assets/home/categories/lunch.png'
import Chocolate from '../../assets/home/categories/chocolate.png'
import CardCategory from '../../components/cardCategory'

export default function CategoriesContainer() {
  return (
    <div className="categories flex flex-col gap-10 w-full py-5 px-12">
      <div className="content-top flex justify-between">
        <div className="sub-title font-semibold font-inter text-5xl">
          Categories
        </div>
        <a
          href="#"
          className="button-view bg-primary rounded-2xl px-5 py-4 flex items-center"
        >
          <p className="font-semibold text-base">View All Categories</p>
        </a>
      </div>

      <div className="card-container flex gap-10">
        <CardCategory
          src={Breakfast}
          name={'Breakfast'}
          gradient={'112,130,70'}
        ></CardCategory>
        <CardCategory
          src={Vegan}
          name={'Vegan'}
          gradient={'108,198,63'}
        ></CardCategory>
        <CardCategory
          src={Meat}
          name={'Meat'}
          gradient={'204,38,27'}
        ></CardCategory>
        <CardCategory
          src={Desert}
          name={'Desert'}
          gradient={'240,158,0'}
        ></CardCategory>
        <CardCategory
          src={Lunch}
          name={'Lunch'}
          gradient={'0,0,0'}
        ></CardCategory>
        <CardCategory
          src={Chocolate}
          name={'Chocolate'}
          gradient={'0,0,0'}
        ></CardCategory>
      </div>
    </div>
  )
}
