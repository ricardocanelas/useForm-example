import { useState } from 'react'
import { isInvalid } from './Validation'

const useForm = ({ schema, initialValues, onSubmit }) => {
  const [state, setState] = useState(initialValues || {})
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const setValue = (name, value) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
    setState((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: isInvalid(schema[name], value),
    }))
  }

  const getErrors = () => {
    const temp = Object.keys(schema)
      .map((schemaName) => {
        return { name: schemaName, error: isInvalid(schema[schemaName], state[schemaName]) }
      })
      .filter((item) => Boolean(item.error))

    if (temp.length) {
      setErrors(
        temp.reduce((acc, cur) => {
          acc[cur.name] = cur.error
          return acc
        }, {})
      )
      setTouched((prev) => ({
        ...prev,
        ...temp.reduce((acc, cur) => {
          acc[cur.name] = true
          return acc
        }, {}),
      }))
    }

    return temp
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValue(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (getErrors().length === 0) {
      onSubmit(e)
    }
  }

  return {
    values: state,
    errors,
    touched,
    setValue,
    handleChange,
    handleSubmit,
  }
}

export default useForm
