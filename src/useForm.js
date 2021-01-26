import { useState } from 'react'
import { isInvalid } from './Validation'

const useForm = ({ schema, initialValues, onSubmit }) => {
  const [state, setState] = useState(initialValues || {})
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = (name, value) => {
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
    }

    return temp
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (!name) return null
    setValue(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTouched(
      Object.keys(state).reduce((acc, curKey) => {
        acc[curKey] = true
        return acc
      }, {})
    )

    if (getErrors().length === 0) {
      setIsSubmitting(true)
      onSubmit({ setIsSubmitting, reset }, e)
    }
  }

  const reset = () => {
    setState(initialValues)
    setTouched({})
    setErrors({})
    setIsSubmitting(false)
  }

  return {
    values: state,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    setValue,
    reset,
    handleChange,
    handleSubmit,
  }
}

export default useForm
