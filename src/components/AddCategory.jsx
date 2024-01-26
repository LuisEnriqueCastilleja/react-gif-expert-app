import { useState, } from "react"

//Aqui se recibe lo de las props
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //Para limpiar el input
        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={inputValue || ""}
                type="text"
                placeholder="Buscar gifs"
                onChange={onInputChange} />
        </form>
    )
}
//Podemos evitar escribirlo asi ya que siempre se envia
//el event de igual manera
// onChange={(event) => onInputChange(event)} />
