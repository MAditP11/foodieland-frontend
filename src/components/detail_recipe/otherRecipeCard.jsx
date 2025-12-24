export default function OtherRecipeCard({ Img, Title, Author }) {
  return (
    <div class="flex gap-4 items-center">
      <div class="img">
        <img src={Img} alt="" />
      </div>
      <div class="flex flex-col gap-3">
        <div class="">
          <p class="font-semibold font-inter text-base leading-4.5">{Title}</p>
        </div>
        <div class="">
          <p class="font-medium font-inter text-xs text-black/60">
            By {Author}
          </p>
        </div>
      </div>
    </div>
  )
}
