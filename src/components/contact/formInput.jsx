import InputText from './inputText'
import InputOption from './inputOption'
import InputMessages from './inputMessages'

export default function FormInput({
  labelFor,
  labelName,
  type,
  id,
  placeholder,
  isOption = false,
  rows,
}) {
  return (
    <div class="flex flex-col gap-2">
      <label for={labelFor} class="font-medium text-xs font-inter leading-5">
        {labelName}
      </label>
      {type ? (
        <InputText type={type} id={id} placeholder={placeholder} />
      ) : isOption ? (
        <InputOption />
      ) : (
        <InputMessages id={id} rows={rows} placeholder={placeholder} />
      )}
    </div>
  )
}
