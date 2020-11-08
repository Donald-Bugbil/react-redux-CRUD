


export const addCard = card =>{
    return {
        type: 'ADD_CARD', 
        payload: card
        }
}

export const deleteCard = cardDetail =>{
    return {
        type: 'DELETE_CARD',
        payload: cardDetail
    }
}

export const addUpdateCard = updateInfo =>{
    return {
        type: 'ADD_UPDATE',
        payload: updateInfo
    }
}

export const makeChangesToCard = change =>{
    return {
        type: 'MAKE_CHANGE',
        payload: change
    }
}
