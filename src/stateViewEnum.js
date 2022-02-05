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
    const setCurrentView = async function ()
    {        
        CurrentView.value = await state;
        console.log("현재 상태: " + state);
    }
    if(action.type === 1){
        state = action.type;
        setCurrentView();
        return state;
    }
    return state;
}

export function SetChangeViewState(dispatch, state)
{
    dispatch({ type: state });
    return;
}

export function NextView(dispatch) {
    let state = { type: CurrentView.value++ };
    dispatch(state);
    console.log("NextView 호출. 현재 상태: "+(state.type));
    return;
}