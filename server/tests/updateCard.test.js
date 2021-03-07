require('dotenv').config();
const { MONGODB_URL_TEST } = process.env;

const { expect } = require('chai');
const { random, floor } = Math;
const { mongoose, models: { Card } } = require('../../db');
const { errors: { NotFoundError } } = require('../shared');
const { updateCard } = require('../services');


describe('updateCard should', () => {
    let title, description, cardId;

    before(async () => {
        await mongoose.connect(MONGODB_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
        await Card.deleteMany();
    });

    beforeEach(async () => {
        title = `title-${random()}`;
        description = `description-${random()}`;

        await Card.create({ title, description });
        const { id } = await Card.findOne({ title, description });
        cardId = id.toString();
    });

    it('succeed to update an existing Card when a title and description are provided', async () => {
        await updateCard({ cardId, data: { title: 'updated-title', description: 'updated-description' } });

        const card = await Card.findById(cardId);

        expect(card).to.exist;
        expect(card.title).to.equal('updated-title');
        expect(card.description).to.equal('updated-description');
        expect(card.created).to.exist;
        expect(card.created).to.be.instanceOf(Date);
        expect(card.updated).to.exist;
        expect(card.updated).to.be.instanceOf(Date);
        expect(card._id).to.exist;
        expect(card._id.toString()).to.equal(cardId);
    });

    it('fail to update an existing Card if the Card is not found on the database', async () => {
        await Card.deleteMany();

        try {
            await updateCard({ cardId, data: { title, description } });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal(`Card with id ${cardId} not found`);
        }
    });

    it('fail to update an existing Card on invalid data', async () => {
        try {
            await updateCard({ cardId: 0, data: { title, description } });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`cardId 0 is not a string`);
        }

        try {
            await updateCard({ cardId, data: { title: 0, description } });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`title 0 is not a string`);
        }

        try {
            await updateCard({ cardId, data: { title, description: 0 } });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal(`description 0 is not a string`);
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