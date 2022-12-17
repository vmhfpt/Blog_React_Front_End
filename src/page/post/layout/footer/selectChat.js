
export const  getDataChat = (state) => {
    return state.chat.messengers;
}
export const  getDataAlert = (state) => {
    return state.chat.totalAlert;
}
export const  getDataShowTab = (state) => {
    return state.chat.showTab;
}
export const getIsOnline = (state) => {
    return state.chat.isOnline;
}