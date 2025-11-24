export default function LinkCustom({ href, name }) {
  return (
    <a class="font-medium text-base font-inter hover:font-bold" href={href}>
      {name}
    </a>
  )
}
