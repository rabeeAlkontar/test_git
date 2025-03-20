//testing arry.from

// const str = "hello world"

// const arry = Array.from(str)

// console.log(arry);
const items = Array.from({ length: 120 }, (_, index) => {
    return index
});

const pages = 8
const itemsPerPage = Math.ceil(items.length / pages)


const arr = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    //we did the addition because the second arg is the index where to end not like splice where we spscifiy how many items to delete
    const shown = items.slice(start, start + itemsPerPage)

    return shown
})

console.log(arr);