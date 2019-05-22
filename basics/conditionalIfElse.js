let isAccountLocked = false
let userRole = 'admin'
// if (isAccountLocked){
//     //true block
//     console.log('Is account locked')
// } else {
//     console.log('Welcome!')
// }

if (isAccountLocked){
    console.log('Is account locked')
} else if(userRole === 'admin'){
    console.log('Welcome admin')
} else {
    console.log('Welcome!')
}