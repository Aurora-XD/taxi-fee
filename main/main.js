/**
 * 我们考虑出租车计价问题，出租车的运价是每公里0.8元，八公里起会加收50%的每公里运价，起步价是两公里以内6块，停车等待时加收每分钟0.25元，最后计价的时候司机会四舍五入只收整块钱
 * @param kilometer
 * @param minute
 * @returns {number}
 */
module.exports = function main(kilometer, minute) {
    let totalPrice = 6.0;
    const timesOverBaseKilometer = 0.5;
    const baseKilometer = 2;
    const separateKilometer = 8;
    const pricePerKilometer = 0.8;
    const pricePerWaitMinute = 0.25;

    if (kilometer > 2 && kilometer <= 8) {
        totalPrice += pricePerKilometer * (kilometer - baseKilometer)
    }
    if (kilometer > 8) {
        totalPrice += pricePerKilometer * (separateKilometer - baseKilometer) + pricePerKilometer * (1 + timesOverBaseKilometer) * (kilometer - separateKilometer);
    }
    totalPrice += pricePerWaitMinute * minute;
    return Math.round(totalPrice);
};