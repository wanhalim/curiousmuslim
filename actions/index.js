import fire from '../fb'



export function DisplayQuestionFiqh(){
    return(dispatch) => {

        dispatch({
            type:"BLOGS_LOADING_STATUS",
            payload:true
        })

        fire.database().ref('/fiqh').on('value', snapshot => {
                    dispatch({
                        type:"BLOGS_FETCH",
                        payload:snapshot.val()
                    })

                    dispatch({
                        type:"BLOGS_LOADING_STATUS",
                        payload:false
                    })
              
        })

       
                               
    }
}

export function DisplayQuestionQuranHadith(){
    return(dispatch) => {

        dispatch({
            type:"BLOGS_LOADING_STATUS",
            payload:true
        })

        fire.database().ref('/quranhadith').on('value', snapshot => {
                    dispatch({
                        type:"BLOGS_FETCH",
                        payload:snapshot.val()
                    })

                    dispatch({
                        type:"BLOGS_LOADING_STATUS",
                        payload:false
                    })
              
        })

       
                               
    }
}

export function DisplayQuestionTawheed(){
    return(dispatch) => {

        dispatch({
            type:"BLOGS_LOADING_STATUS",
            payload:true
        })

        fire.database().ref('/tawheed').on('value', snapshot => {
                    dispatch({
                        type:"BLOGS_FETCH",
                        payload:snapshot.val()
                    })

                    dispatch({
                        type:"BLOGS_LOADING_STATUS",
                        payload:false
                    })
              
        })

       
                               
    }
}


export function askquestiontawheed(question){
    return (dispatch) => {
        fire.database().ref('/tawheed').push({question})
    }
}

export function askquestionfiqh(question){
    return (dispatch) => {
        fire.database().ref('/fiqh').push({question})
    }
}

export function askquestionquranhadith(question){
    return (dispatch) => {
        fire.database().ref('/quranhadith').push({question})
    }
}


export function deletefiqh(key){
    return (dispatch) => {
        fire.database().ref(`/fiqh/${key}`).remove()
    }
}

export function deletequranhadith(key){
    return (dispatch) => {
        fire.database().ref(`/quranhadith/${key}`).remove()
    }
}

export function deletetawheed(key){
    return (dispatch) => {
        fire.database().ref(`/tawheed/${key}`).remove()
    }
}

export function AnswerQuestionFiqh(answer, key){
    return (dispatch) => {
        fire.database().ref(`/fiqh`).child(key).update({answer})
    }
}

export function AnswerQuestionQuranHadith(answer, key){
    return (dispatch) => {
        fire.database().ref(`/quranhadith`).child(key).update({answer})
    }
}

export function AnswerQuestionTawheed(answer, key){
    return (dispatch) => {
        fire.database().ref(`/tawheed`).child(key).update({answer})
    }
}



