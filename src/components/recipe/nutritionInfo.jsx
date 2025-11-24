export default function NutritionInfo({ name, count }) {
  return (
    <div class="flex justify-between py-4 border-b border-black/10">
      <p class="font-medium font-inter text-lg text-black/60">{name}</p>
      <p class="font-medium font-inter text-lg">{count}</p>
    </div>
  )
}
