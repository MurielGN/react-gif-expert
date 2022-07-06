import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const OnInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmint = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmint}>
        <input
            type="text"
            placeholder="Find your Gifs"
            value={ inputValue }
            onChange={OnInputChange}
        />
    </form>
    
  )
}
//preventDefault()