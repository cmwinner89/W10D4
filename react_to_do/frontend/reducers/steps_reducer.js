import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS} from '../actions/step_actions'

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEP: 
            return nextState[action.step.id] = action.step;
        case RECEIVE_STEPS: 
            const newerState = {};
            action.steps.forEach((step) => {
                newerState[step.id] = step;
            });
            return newerState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
}

export default stepsReducer;