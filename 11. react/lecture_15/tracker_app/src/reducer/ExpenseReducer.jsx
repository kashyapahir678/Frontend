export const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADDED":
      return {
        ...state,
        expenses: [...state.expenses,
        {
          id: Date.now(),
          description: action.payload.description,
          amount: action.payload.amount,
          category: action.payload.category,
        },
        ],

      }
    case "REMOVE":
      return {
        ...state, expenses: [...state.expenses.filter((item) => item.id !== action.id)]
      }

    case "EDIT":
      return { 
        ...state, 
        expenses: state.expenses.map((expense) => expense.id === action.payload.id ? {...expense,...action.payload} : expense )
      }
    default:
      throw new Error(`unhandle type ${action.type}`)
  }
}