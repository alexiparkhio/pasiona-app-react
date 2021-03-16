require('dotenv').config();
const { MONGODB_URL_TEST } = process.env;

const { expect } = require('chai');
const { random, floor } = Math;
const { mongoose, models: { Card } } = require('../../db');
const { errors: { NotAllowedError } } = require('../../shared');
const { createCard } = require('../../services');


describe('createCard should', () => {
    let title, description;

    before(async () => {
        await mongoose.connect(MONGODB_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
        await Card.deleteMany();
    });

    beforeEach(() => {
        title = `title-${random()}`;
        description = `description-${random()}`;
    });

    it('succeed to create a new Card when a title and description are provided', async () => {
        await createCard({ title, description });

        const card = await Card.findOne({ title, description });

        expect(card).to.exist;
        expect(card.title).to.equal(title);
        expect(card.description).to.equal(description);
        expect(card.created).to.exist;
        expect(card.created).to.be.instanceOf(Date);
        expect(card._id).to.exist;
    });

    it('fail to create a new Card if a Card with the exact same matches exist on the DB', async () => {
        await Card.create({ title, description });

        try {
            await createCard({ title, description });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(NotAllowedError);
            expect(error.message).to.equal('A Card with that exact same information already exists on the database');
        }
    });

    it('fail to create a new Card on invalid data', async () => {
        try {
            await createCard({ title: 0, description });

        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal('title 0 is not a string');
        }

        try {
            await createCard({ title, description: 0 });

        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal('description 0 is not a string');
        }
    });

    afterEach(async () => {
        await Card.deleteMany();
    });

    after(async () => {
        await Card.deleteMany();
        await mongoose.disconnect();
    });
});