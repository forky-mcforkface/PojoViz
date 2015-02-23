/**
 * Created by mauricio on 2/17/15.
 */
module.exports = [{
  label: 'PojoViz',
  entryPoint: 'pojoviz',
  alwaysDirty: true,
  additionalForbiddenTokens: 'global:pojoviz.InspectedInstances.pojoviz.analyzer.items',
  analyzerConfig: {
    levels: 3,
    visitArrays: false
  }
}, {
  entryPoint: 't3'
}];