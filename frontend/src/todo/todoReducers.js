const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}