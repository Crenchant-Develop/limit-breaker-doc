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

export let CurrentView = 0;

export function OnChangeView(currentView = CurrentView, action)
{
    console.log(action);
    switch(action.type)
    {
        case 'next':
            return CurrentView++;
        case 'prev':
            return CurrentView--;
    }

    return CurrentView++;
}

//nextView는 람다 함수임
export function NextView(dispatch) {
    dispatch( {type : 'next'} );
    return;
}