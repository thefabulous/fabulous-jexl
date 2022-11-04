const Jexl = require('./Jexl')
const { MissedVariableError } = require('./errors')

module.exports = new Jexl()
module.exports.Jexl = Jexl

module.exports.MissedVariableError = MissedVariableError
