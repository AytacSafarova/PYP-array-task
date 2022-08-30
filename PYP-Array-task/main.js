
//reverse
const result_reverse = []
function reversed(arr) {
  for (i = (arr.length - 1); i > -1; i--) {
    result_reverse.push(arr[i])
  }


  console.log(result_reverse)

}
reversed([1, 2, 3, 4, 5])


//include
let arr = ["a", "b", "c"]
function include(word) {
  arr.forEach(item => {
    if (item == word) {
      console.log(true)
    }

    console.log(false)

  })
}
include("a")





//filter
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filter(word){
    fruits.forEach(element => {
      if(element==word){
        console.log(fruits.indexOf(element))
      }
      
      else{
        console.log("element is not found")
      }
    });
 
  
}
 filter("banana")
