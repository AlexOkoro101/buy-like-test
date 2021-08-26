const initialState = {
    user: null
  }
  
  const User = (state, action) => {
    switch (action.type) {
      case 'login': {
        const { user } = action.payload;
        return {
          ...state,
          user,
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
  
  export default User;