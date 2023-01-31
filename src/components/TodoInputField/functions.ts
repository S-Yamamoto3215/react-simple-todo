type inputOnChangeType = (e: React.ChangeEvent<HTMLInputElement>, isError: boolean, setIsError: (isError: boolean) => void, setInputValue: (inputValue: string) => void) => void
export const inputOnChange: inputOnChangeType = (e, isError, setIsError, setInputValue) => {
  isError && setIsError(false)
  setInputValue(e.target.value)
}

type handleKeyDownType = (e: React.KeyboardEvent<HTMLInputElement>, inputValue: string, setIsError: (isError: boolean) => void, addTodo: (inputValue: string) => void, setInputValue: (inputValue: string) => void) => void
export const handleKeyDown: handleKeyDownType = (e, inputValue, setIsError, addTodo, setInputValue) => {
  if (e.key === 'Enter') {
    onClickAddButton(inputValue, setIsError, addTodo, setInputValue)
  }
}

type onClickAddButtonType = (inputValue: string, setIsError: (isError: boolean) => void, addTodo: (inputValue: string) => void, setInputValue: (inputValue: string) => void) => void
export const onClickAddButton: onClickAddButtonType = (inputValue, setIsError, addTodo, setInputValue) => {
  if (inputValue === '') {
    setIsError(true)
  } else {
    addTodo(inputValue)
    setInputValue('')
    setIsError(false)
  }
}
