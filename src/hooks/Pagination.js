const nextPage = (HomePageDyn, prev4, next4, count) => {
    if (HomePageDyn.length > next4) {
        prev4 += count
        next4 += count
    }
    return { prev4, next4 }
}

const prevPage = () => {}

const refreshPage = () => {}

const sliceData = () => {

}

export { nextPage, prevPage, refreshPage, sliceData }