const getRuleMessage = (rule, defaultMessage) => {
  if (typeof rule === 'string') {
    return rule
  } else if (typeof rule === 'object' && rule.hasOwnProperty('message')) {
    return rule.message
  }

  return defaultMessage
}

const getRuleValue = (rule, defaultValue) => {
  if (typeof rule === 'string' || typeof rule === 'number') {
    return rule
  } else if (typeof rule === 'object' && rule.hasOwnProperty('value')) {
    return rule.value
  }

  return defaultValue
}

const validations = {
  required: (value, rule) => {
    return value === '' ? getRuleMessage(rule, 'The field field is required') : true
  },
  minLength: (value, rule) => {
    return value.length < getRuleValue(rule, 1)
      ? getRuleMessage(rule, `This field must be at least ${getRuleValue(rule, 1)} characters.`)
      : true
  },
  maxLength: (value, rule) => {
    return value.length > getRuleValue(rule, 1)
      ? getRuleMessage(rule, `This field may not be greater than ${getRuleValue(rule, 1)} characters.`)
      : true
  },
}

export const isInvalid = (rules, value) => {
  const errors = []
  let result = undefined

  Object.keys(rules).forEach((ruleName) => {
    const rule = rules[ruleName]
    if (typeof rule === 'function') {
      result = rule(value)
      if (result === false || typeof result === 'string') {
        errors.push(result)
      }
    } else if (validations.hasOwnProperty([ruleName])) {
      result = validations[ruleName](value, rule)
      if (result === false || typeof result === 'string') {
        errors.push(result)
      }
    }
  })

  return errors.length ? errors[0] : undefined
}
