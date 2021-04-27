export const initialState = {
    open: false,
    message: 'holaaaaa '
}

const openSnackbarReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'OPEN-SNAKBAR':
        return { 
            ...state, open: action.open, message: action.message
        }

    default:
        return state
    }
}; 

export default openSnackbarReducer;
