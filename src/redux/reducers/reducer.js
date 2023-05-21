const INIT_STATE = {
  carts: [],
};
export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        //이미 카트에 제품이 있으면
        const newState = JSON.parse(JSON.stringify(state.carts));
        newState[ItemIndex].qnty += 1;
        return {
          ...state,
          carts: [...newState],
        };
      } else {
        //카트에 등록한 제품이 없으면 새로 등록함
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const ItemIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const newState = JSON.parse(JSON.stringify(state.carts));
        newState[ItemIndex_dec].qnty -= 1;
        return {
          ...state,
          carts: [...newState],
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload); //삭제해라
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
