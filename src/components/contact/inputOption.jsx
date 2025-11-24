export default function InputOption() {
  return (
    <>
      <div class="border border-black/10 py-4 pl-5 rounded-2xl">
        <select
          id="enquiry-type"
          class="font-normal focus:outline-none text-sm w-11/12 bg-white"
        >
          <option value="Advertising">Advertising</option>
          <option value="Option1">Option1</option>
          <option value="Option2">Option2</option>
          <option value="Option3">Option3</option>
        </select>
      </div>
    </>
  )
}
