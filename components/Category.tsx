import classNames from "classnames"

export type CategoryProps = {
  onChange: (e: any) => void
  value: string
  currentValue?: string
  label: React.ReactNode
}

export const Category = ({
  onChange,
  value,
  currentValue,
  label,
}: CategoryProps) => {
  return (
    <label
      className={classNames(
        "b3 block cursor-pointer whitespace-nowrap rounded-md border-2 p-3 text-center !font-semibold transition-all md:w-full md:p-4",
        value === currentValue
          ? "border-blurple-500 bg-blurple-500 text-white hover:border-blurple-600 hover:bg-blurple-600 focus-visible-within:border-blurple-600 focus-visible-within:bg-blurple-600"
          : "border-blurple-500 bg-white text-blurple-500 hover:border-blurple-600 hover:text-blurple-600"
      )}
    >
      <input
        className="sr-only"
        type="radio"
        name="apps-selection"
        id=""
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

export default Category
