const initialState = {
    
  }
  
  const User = (state, action) => {
    switch (action.type) {
      case 'login': {
        // const { user } = action.payload;
        return {
          ...state,
          ...action.payload,
        }
      }
      case 'logout': {
        return {
          ...state,
          user: null,
        }
      }
      default:
        return initialState;
    }
  }
  export const selectToken = (state) => state.userState.token;
  export default User;