// const user = {
//     name:'Tanima', 
//     cities:['Jersey City','Hoboken', 'New York'],
//     placesLived() {
//         return this.cities.map((city) => `${this.name} have lived in ${city + '!'}` )
        
//     }
// }

// console.log(user.placesLived());

// const multipliers = {
//     numbers:[1,2,3,4,5],
//     multiplier:2,
//     multiply() {
//        return this.numbers.map((number) => number * this.multiplier)
//     }

// }

// console.log(multipliers.multiply())



// let count = 0
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count=0;
//     renderCounterApp()
// }


// const renderCounterApp = () => {

//         const templateNum = (<div><h2>Count: {count}</h2>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//             </div>
//         );
        
// ReactDOM.render(templateNum, document.querySelector('#temp'))
// }

// renderCounterApp();

console.log("In Todo JS")

const React = require('react')
const ReactDOM = require('react-dom')

let visibility = false

const changeButtonTitle = () => {
    visibility = !visibility

    // console.log(buttonTitle)
    renderVisibility()
}

const renderVisibility = () => {
    
    const templateNum = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={changeButtonTitle}>
        
        {visibility ? 'Hide Details' : 'Show Details'}
        
        </button>
        {visibility && <p>Show some data here </p>}
        </div>        
        )
    ReactDOM.render(templateNum, document.querySelector('#temp'))
}

renderVisibility()

