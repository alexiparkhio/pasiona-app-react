require('dotenv').config();
const { MONGODB_URL_TEST } = process.env;

const { expect } = require('chai');
const { random, floor } = Math;
const { mongoose, models: { Card } } = require('../../../db');
const { errors: { NotFoundError } } = require('../../shared');
const { deleteCard } = require('../../services');


describe('deleteCard should', () => {
    let title, description, cardId;

    before(async () => {
        await mongoose.connect(MONGODB_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        await Card.deleteMany();
    });

    beforeEach(async () => {
        title = `title-${random()}`;
        description = `description-${random()}`;

        await Card.create({ title, description });
        const { id } = await Card.findOne({ title, description });
        cardId = id.toString();
    });

    it('succeed to delete an existing Card when the ID is provided', async () => {
        await deleteCard({ cardId });

        const card = await Card.findById(cardId);

        expect(card).to.be.null;
    });

    it('fail to delete an existing Card if the Card does not exist on the database', async () => {
        await Card.deleteMany();

        try {
            await deleteCard({ cardId });
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal(`Card with id ${cardId} not found`);
        }
    });

    it('fail to create a new Card on invalid data', async () => {
        try {
            await deleteCard({ cardId: 0 });

        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(TypeError);
            expect(error.message).to.equal('cardId 0 is not a string');
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