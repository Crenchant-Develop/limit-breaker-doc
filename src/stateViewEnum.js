import { useDispatch, useSelector } from 'react-redux';

//Enum 선언
export const stateViewEnum = {
    intro: 0,
    system: 1,
    stage: 2,
    gimmick: 3,
    gui: 4,
    art: 5,
    story: 6,
    settings: 7,
};

export var CurrentView = { value : 0 };

export function OnChangeView(state = CurrentView.value, action) {

    if(action.type === 1){
        CurrentView.value = action.type;
        console.log(state);
        return CurrentView.value;
    }
    return CurrentView.value;
}

// export function OnChangeView(state = { value: 0 })
// {
//     return;
// }

export function NextView(dispatch) {
    dispatch({ type: CurrentView.value++ })
    return;
}