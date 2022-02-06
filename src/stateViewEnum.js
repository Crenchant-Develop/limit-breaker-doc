import { createStore, compose } from "redux";

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

export const store = createStore(OnChangeView, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

export function OnChangeView(state = stateViewEnum.intro, action) 
{
    if(Number.isInteger(action.type))
    {
        state = action.type;
        return state;
    }
    return state;
}

export function SetChangeViewState(value)
{
    sessionStorage.setItem('currentPage', value);
    store.dispatch({ type: value });
    console.log("SetChangeViewState 호출. 현재 상태: " + (value));
    return;
}

export function NextView(value)
{
    value++;
    SetChangeViewState(value);
    console.log("NextView 호출. 현재 상태: " + (value));
    return;
}
