const initialState = {
    statusLogin: false,
    admin : [
        {
            username: "admin",
            password: "admin",
        }
    ],
    dataLogin: {},
}

const authReducer = (state = initialState, action) => {
    console.log("State : ", state)
    console.log("Action : ", action)

    switch (action.type) {
        case "LOGIN":
            return {
                statusLogin: true,
                admin: action.payload.admin,
                dataLogin: action.payload.dataLogin,
            }
        case "LOGOUT":
            return {
                statusLogin: false,
                admin: action.payload,
                dataLogin: {},
            }
        default:
            return initialState
    }
}

export default authReducer