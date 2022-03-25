function candySalesToObject(array) {
    return {
        item: array[0],
        price: array[1],
        quantity: array[2]
    }
}


module.exports = {
    candySalesToObject,
    //salesDayToObject,
    //allSalesToArray
};
