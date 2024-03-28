const initState = {
    themeId: 1,
}

export const themeReducer = (state: StateType = initState, action: ActionTypes): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}

        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type StateType = typeof initState

type ActionTypes = ReturnType<typeof changeThemeId>