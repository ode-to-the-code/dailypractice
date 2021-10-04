

// Write a simple JavaScript program that you can run using Node that takes in a list of strings that are grocery items. If milk and eggs are not there, print “Remember to get milk and eggs!.” (future assignment)
    -

class GroceryTrip {
    constructor(){
        this.groceries = ["milk", "bread", "eggs"]
    }

    // let array1 = [1, 3];




checkMilkAndEggs(array){
    if (array.includes('milk') && array.includes('eggs')) {
        console.log("great, time to go get some groceries")
    }
    else {
        console.log("Remember to get milk and eggs!")
    }
}

}


let newTrip = new GroceryTrip
console.log(newTrip.groceries.includes('milk'))

// newTrip.checkMilkAndEggs(this.groceries)
newTrip.checkMilkAndEggs(newTrip.groceries)


// general-
// overall it's good practice for fluency i think. it wasn't too easy bc it's harder to do from scratch. If i did lots of small programs like this, i'd get more skilled quickly. Only issue is when I ran into an issue, I had to just do trial and error. i guess that's a js thing, but if i don't know what to look for to learn how to solve the problem, i'm kind of stymied. 

// issues-
// -tried to do it without a class, but had syntax problems. 
// -still have issues with declaring the array outside the constructor, that's why I just put it in the constructor eventually. 
// -an error got me stuck for a while, i wasn't sure how to proceed. It seemed to be saying that array wasn't valid. Like in 'array.include'. 
// -if/then gave me trouble, till i googled and realized that there's no 'end' in the js version of if/then.
// -In the end I had to change "// newTrip.checkMilkAndEggs(this.groceries)" to "newTrip.checkMilkAndEggs(newTrip.groceries)" when calling the program in Node. 