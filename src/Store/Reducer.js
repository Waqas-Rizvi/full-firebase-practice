const INITIAL_STATE = {
    name: "Waqas",
    user: "",
    students: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER":
            return ({
                ...state,
                user: action.user
            })
        case "STUDENTDATA":
            return ({
                ...state,
                students: action.students
            })
        default:
            return state
    }
}