export default function CardCategory({ src, name, gradient }) {
  return (
    <div
      className={`card-content flex flex-col gap-8 rounded-3xl bg-[linear-gradient(to_bottom,#ffffff,rgba(${gradient},0),rgba(${gradient},0.1))] items-center py-5 px-10`}
    >
      <img src={src} alt="" />
      <p className="font-semibold text-lg font-inter">{name}</p>
    </div>
  )
}
