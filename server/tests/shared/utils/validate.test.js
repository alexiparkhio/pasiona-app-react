const { utils: { validate } } = require('../../../shared');
const { floor, random } = Math;
const { expect } = require('chai');
const { ContentError } = require('../../../shared/errors');

describe('validate should', () => {
    const RANDOM_VALUES = [random(), [], {}, function () { }];

    it('not throw an error if the passed value is a string on validate.string', () => {
        const validatedValue = validate.string('a string', 'a string');

        expect(validatedValue).to.be.undefined;
    });

    it('throw an error on validate.string if the passed value is not a string', () => {
        const randomInvalidValue = RANDOM_VALUES[floor(random() * RANDOM_VALUES.length)];
        try {
            validate.string(randomInvalidValue, 'expected string');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`expected string ${randomInvalidValue} is not a string`);
        }
    });

    it('throw an error on validate.string if the passed value is an empty string', () => {
        try {
            validate.string('', 'expected string');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(ContentError);
            expect(error.message).to.equal(`expected string is empty`);
        }
    });

    it('not throw an error on validate.type if the type matches the expected type', () => {
        let validatedValue = validate.type(0, 'a number', Number);
        expect(validatedValue).to.be.undefined;

        validatedValue = validate.type(0, 'a number', Number);
        expect(validatedValue).to.be.undefined;

        validatedValue = validate.type([], 'an array', Array);
        expect(validatedValue).to.be.undefined;

        validatedValue = validate.type({}, 'an object', Object);
        expect(validatedValue).to.be.undefined;
    });

    it('throw an error on validate.type if the type does not match the expected type', () => {
        try {
            validate.type('string', 'expected number', Number);
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`expected number string is not a number`);
        }

        try {
            validate.type(NaN, 'expected number', Number);
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`expected number NaN is not a number`);
        }

        try {
            validate.type('string', 'expected number', Object);
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`expected number string is not a Object`);
        }

        try {
            validate.type('string', 'expected number', Array);
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`expected number string is not a Array`);
        }
    })
});