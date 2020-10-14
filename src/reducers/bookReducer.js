export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK': {
            const {author, title, id} = action.book
            return [...state, {author, title, id}]
        }             
        case 'REMOVE_BOOK': {
            const { id } = action;
            return state.filter(book => book.id !== id);
        }
        default: {
        return state;
        }
    }
}