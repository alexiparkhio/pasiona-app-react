const { utils: { sanitize } } = require('../../../shared');
const { expect } = require('chai');

describe('sanitize should', () => {
    let mockedArray = [];

    beforeEach(() => {
        for (let i = 0; i < 10; i++) {
            mockedArray.push({
                title: `title-${i}`,
                description: `description-${i}`,
                created: new Date(),
                _id: Math.random().toString(),
                __v: 0
            });
        }
    });

    it('remove the unnecessary fields and sanitize the id', () => {
        const sanitizedArray = sanitize(mockedArray);

        expect(sanitizedArray).to.exist;
        expect(sanitizedArray).to.be.instanceOf(Array);

        sanitizedArray.forEach(({ _id, __v, id }) => {
            expect(_id).to.be.undefined;
            expect(__v).to.be.undefined;
            expect(id).to.exist;
        });
    });

    it('return the value unmodified if it is not an array', () => {
        const sanitizedValue = sanitize(0);

        expect(sanitizedValue).to.exist;
        expect(typeof sanitizedValue).to.equal('number');
    });

    afterEach(() => {
        mockedArray = [];
    });
});