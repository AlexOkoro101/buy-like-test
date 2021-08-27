const initialState = {
    token: "",
};

const User = (state, action) => {
    switch (action.type) {
        case "login": {
            // const { user } = action.payload;
            return {
                ...state,
                ...action.payload,
                token: state.token,
            };
        }
        case "logout": {
            return {};
        }
        default:
            return initialState;
    }
};
export const selectToken = (state) => state.userState;
export default User;
