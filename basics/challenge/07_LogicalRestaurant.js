let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Ofter up vegan dishes")
} else if( isGuestOneVegan || isGuestTwoVegan){
    console.log("Ofter up some vegan options")
} else {
    console.log("Ofter up anything on the menu")
}