let pricelist = [ //model
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

//treba ispisati slijedeće:
/*
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : "2020-03-02 do 2020-05-15
*/

function logPricelist(pricelist) {
    let model = prepareData(pricelist)
    printData(model)
  }

function prepareDataa(pricelist) {
    let model = {};
    pricelist.forEach((priceData)=>{
        model[priceData.price] = (model[priceData.price] || [])
        model[priceData.price].push([priceData.from, priceData.to])
    });
    return model;
}
function prepareData(pricelist) {
    return pricelist.reduce((accumulator, currentvalue)=>{
        accumulator[currentvalue.price] = (accumulator[currentvalue.price] || [])
        accumulator[currentvalue.price].push([currentvalue.from, currentvalue.to])
        return accumulator;
    },{})
}

function printData(model) {
    Object.getOwnPropertyNames(model).sort().forEach((price) => {
      let datesOut = model[price]
        .map((from_to) => from_to.join(" do ")).join(" , ")
      console.log(price, " : ", datesOut)
    })
  }

logPricelist(pricelist)