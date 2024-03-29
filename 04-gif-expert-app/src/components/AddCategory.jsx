import { useState } from "react"

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState( '' )

  const onInputChange = event => {
    const valor = event.target.value;
    setInputValue( valor )
  }

  const onSubmit = event => {
    event.preventDefault()

    if ( inputValue.trim().length <= 1) return;

    setCategories( categories => [ inputValue, ...categories ])
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}

export default AddCategory