/**
 * 这里公司一些项目的参数获取
 */
const project = window.localStorage.getItem('project');
let wxLogin = window.localStorage.getItem(project + "wxLogin");

try {
    wxLogin = JSON.parse(wxLogin)
} catch (error) {

}

let userinfo = {
    userToken: wxLogin.userToken,
    barData: window.sessionStorage.getItem(project + "barcodeData")
}


export default userinfo