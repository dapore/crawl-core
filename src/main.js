import {
  length,
  prop,
  omit
} from '@meltwater/phi'
import createLogger from './util/logger'
import createActionRunners from './actions'
import createController from './control'

export default browser => async config => {
  const log = createLogger('core:crawl')
  const { id: taskId, actions: actionDefinitions = [] } = config
  log('TaskId', taskId, length(actionDefinitions))
  let context = { browser, config, result: {}, errors: [] }
  for (const actionDefinition of actionDefinitions) {
    console.log('actionDefinition ', actionDefinition)
    const actionRunners = createActionRunners(context)
    const controller = createController(context)
    const { control, actionName } = actionDefinition
    const { shudSkip } = controller(control)
    if (shudSkip) break
    const runner = prop(actionName, actionRunners)
    context = await runner(context)(actionDefinition)
  }
  return omit(['browser'], context)
}
