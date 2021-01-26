import useForm from './useForm'

function App() {
  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    initialValues: {
      firstname: '',
      lastname: '',
    },
    schema: {
      firstname: {
        required: 'This is a custom message. This field is required',
        maxLength: 10,
        validate: (value) => {
          return value.length <= 4 ? 'The field must be at least 5 characters.' : true
        },
      },
    },
    onSubmit: () => {
      console.log('Ready to send to backend...', { values })
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>First Name:</label>
          <input type="text" name="firstname" value={values.firstname} onChange={handleChange} />
          {errors.firstname && touched.firstname && <span className="invalid">{errors.firstname}</span>}
        </div>
        <div className="flex flex-col">
          <label>Last Name:</label>
          <input type="text" name="lastname" value={values.lastname} onChange={handleChange} />
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="debug">
        <div>
          <span>Errors:</span>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </div>
        <div>
          <span>Touched:</span>
          <pre>{JSON.stringify(touched, null, 2)}</pre>
        </div>
        <div>
          <span>Values:</span>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

export default App
