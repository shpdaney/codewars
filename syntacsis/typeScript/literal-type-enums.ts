// Types
type typeEnv = 'development' | 'production' | 'staging'
function setEnv(env: typeEnv): typeEnv {
    return env
}
setEnv('staging')


// Unums
enum enumEnv {
    Dev = 'development',
    Prod = 'production',
    Stag = 'staging',
}