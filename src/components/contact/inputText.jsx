export default function InputText({ type, id, placeholder }) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        class="font-normal text-sm font-inter leading-6 w-full border border-black/10 p-4 rounded-2xl"
      />
    </>
  )
}
