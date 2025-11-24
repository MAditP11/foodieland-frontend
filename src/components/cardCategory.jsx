export default function CardCategory({ src, name }) {
  return (
    <div class="card-content flex flex-col gap-8 rounded-3xl bg-[linear-gradient(to_bottom,var(--color-white),var(--color-gray-100),var(--color-slate-200))] items-center py-5 px-10">
      <img src={src} alt="" />
      <p class="font-semibold text-lg font-inter">{name}</p>
    </div>
  )
}
