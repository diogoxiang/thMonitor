/**
 * 获取sr 与 dp
 */
function userAgent() {
    return {
        sr: `${window.screen.height}x${window.screen.width}`,
        dp: window.devicePixelRatio,
    }
}

export default userAgent;