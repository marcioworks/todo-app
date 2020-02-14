import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: () => ({
        description: 'ler livro',
        list: [{
            _id: 1,
            description: 'pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'reunião com equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'consulta medica depois do almoço',
            done: false
        }]
    })
})

export default rootReducers
