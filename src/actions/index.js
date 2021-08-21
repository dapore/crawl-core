import createNoop from './noop'

export default browser => ({
  noop: createNoop(browser)
})
