export default function CardCategory({ src, name, gradient }) {
  const gradientStyle = {
    background: `linear-gradient(to bottom, #ffffff, rgba(${gradient}, 0), rgba(${gradient}, 0.1))`,
  }

  return (
    <div
      style={gradientStyle}
      className="card-content flex flex-col gap-8 rounded-3xl items-center py-5 px-10"
    >
      <img src={src} alt={name} />
      <p className="font-semibold text-lg font-inter">{name}</p>
    </div>
  )
}
