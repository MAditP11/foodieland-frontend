export default function MainDishList({ paragraf }) {
  return (
    <div class="flex gap-5 py-6 border-b border-black/10 w-full items-center">
      <div class="p-2.5 border border-[#DBE2E5] rounded-full"></div>
      <div class="font-normal font-inter text-lg">{paragraf}</div>
    </div>
  )
}
