import { useDispatch, useSelector } from 'react-redux';

//Enum 선언
export const stateViewEnum = {
    intro: -1,
    main: 0,
    system: 1,
    stage: 2,
    gimmick: 3,
    gui: 4,
    art: 5,
    story: 6,
    settings: 7,
};

export function OnChangeView(state = stateViewEnum.intro, action) 
{
    for(let i = stateViewEnum.intro; i < 7; i++)
    {
        if(action.type == i)
        {
            state = action.type;
            return state;
        }
    }
    return state;
}

export function SetChangeViewState(dispatch, state)
{
    dispatch({ type: state });
    return;
}

export function NextView(dispatch, value)
{
    dispatch({ type: ++value });
    console.log("NextView 호출. 현재 상태: " + (value));
    return;
}