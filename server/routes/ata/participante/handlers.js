const eh = require('common/error-handler')

const {
    obterTodos,
    vincular,
    desvincular
} = require('controllers/ata/participante')

module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos(request.params.ataId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.vincular = async function (request, reply) {
    try {
        const result = await vincular(
            request.auth.credentials,
            request.params.ataId,
            request.params.participanteId,
            request.payload.presente
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.desvincular = async function (request, reply) {
    try {
        const result = await desvincular(request.params.ataId, request.params.participanteId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}