
let restaurant = {
        name: 'ASB',
        guestCapacity: 75,
        guessCount: 0,
        checkAvailability: function (partySize) {
            //console.log(this)
            let seatsLeft = this.guestCapacity - this.guessCount
            return partySize <= seatsLeft
        },

        seatParty: function (seatNumber) {
            this.guessCount += seatNumber
        },

        removeParty: function (leftNumber) {
            this.guessCount -= leftNumber
        }
};


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))





