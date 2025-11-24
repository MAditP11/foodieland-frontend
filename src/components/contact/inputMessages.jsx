export default function InputMessages({ id, rows, placeholder }) {
  return (
    <>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        class="font-normal text-sm font-inter leading-6 w-full border border-black/10 p-4 rounded-2xl"
      ></textarea>
    </>
  )
}
