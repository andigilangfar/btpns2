const initialState = {
    dataUser: [{
        nama:"Human Capital",
        email:"HC@admin.com",
        password:"123",
        roletype: 0
    }, {
        nama:"CEO",
        email:"CEO@admin.com",
        password:"123",
        roletype: 1
    }]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addUser":
            return {
                ...state,
                dataUser: action.payload.dataUser,
            }
        default:
            return state
    }
}

export default dataReducer