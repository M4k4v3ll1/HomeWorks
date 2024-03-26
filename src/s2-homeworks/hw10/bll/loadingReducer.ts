const initState = {
    isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: LoadingActionType): StateType => {
    switch (action.type) {
        case ('CHANGE_LOADING'): {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)

type StateType = typeof initState