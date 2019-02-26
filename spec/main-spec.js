const main = require('../main/main');
const assert = require('assert');

describe('taxi fee', function () {
    it('return Math.round(6) = 6', function () {
        let kilometer = 2;
        let minute = 0;
        let ret = 6;
        assert.equal(ret, main(kilometer, minute));
    }),
        it('return Math.round(6+0.8*(5-2)=8.4) = 8', function () {
            let kilometer = 5;
            let minute = 0;
            let ret = 8;
            assert.equal(ret, main(kilometer, minute));
        }),
        it('return Math.round(6+(8-2)*0.8+1*(1+0.5)*0.8=12) = 12', function () {
            let kilometer = 9;
            let minute = 0;
            let ret = 12;
            assert.equal(ret, main(kilometer, minute));
        }),
        it('return Math.round(6+0.25*12=9) = 9', function () {
            let kilometer = 2;
            let minute = 12;
            let ret = 9;
            assert.equal(ret, main(kilometer, minute));
        }),
        it('return Math.round(6+0.8*(5-2)+0.25*12=11.4) = 11.4', function () {
            let kilometer = 5;
            let minute = 12;
            let ret = 11;
            assert.equal(ret, main(kilometer, minute));
        }),
        it('return Math.round(6+0.8*(8-2)+0.8*(1+0.5)*(9-8)+0.25*12=15) = 15', function () {
            let kilometer = 9;
            let minute = 12;
            let ret = 15;
            assert.equal(ret, main(kilometer, minute));
        })
});