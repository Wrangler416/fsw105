var shopper = {
    state: "Nevada", 
    city: "Las Vegas",
    age: 45,
    isVegetarian: true, 
    groceryCart: ["lettuce", "tomato", "onion"], 
    fullAddress: function() {
        return this.city + " " + this.state;
    }
}; 
console.log(shopper); 
console.log(shopper.fullAddress()); 