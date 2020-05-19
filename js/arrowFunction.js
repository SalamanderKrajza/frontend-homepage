const arrowFunctionWithoutReturn = (arg1, arg2) => {
    console.log(`1. This function have more rows of content
    For example this are args: ${arg1}; ${arg2}`)
}
arrowFunctionWithoutReturn(1,2)

const arrowFunctionWithReturn = (arg1, arg2) => {
    return `2. My args are ${arg1} and ${arg2}`
}
console.log(arrowFunctionWithReturn(1,2))


const onelinerWhichReturns = (arg1, arg2) => `3. To jest arg1: ${arg1}; a to jest arg2: ${arg2}`
console.log(onelinerWhichReturns(`Gruszka`, `Cytryna`))
