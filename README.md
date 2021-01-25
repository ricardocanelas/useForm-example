# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See the example - https://ricardocanelas.github.io/useForm-example/

## Example

```js
import useForm from './useForm'

function MyComponent() {
  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    initialValues: {
      firstname: '',
    },
    schema: {
      firstname: {
        required: 'This field is required',
        maxLength: 10,
        validate: (value) => {
          return value.length <= 4 ? 'The field must be at least 5 characters.' : true
        },
      },
    },
    onSubmit: () => {
      console.log('Ready to send to the backend...', { values })
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label>First Name:</label>
        <input type="text" name="firstname" value={values.firstname} onChange={handleChange} />
        {errors.firstname && touched.firstname && <span className="invalid">{errors.firstname}</span>}
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default MyComponent
```
