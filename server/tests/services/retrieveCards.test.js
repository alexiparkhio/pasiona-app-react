require('dotenv').config();
const { MONGODB_URL_TEST } = process.env;

const { expect } = require('chai');
const { mongoose, models: { Card } } = require('../../db');
const { retrieveCards } = require('../../services');


describe('retrieveCards should', () => {
    before(async () => {
        await mongoose.connect(MONGODB_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
        await Card.deleteMany();
    });

    it('succeed to retrieve all cards from database', async () => {
        for (let i = 0; i < 10; i++) {
            await Card.create({ title: `title-${i}`, description: `description-${i}` });
        }

        const cards = await retrieveCards();

        expect(cards).to.exist;
        expect(cards).to.be.instanceOf(Array);
        expect(cards).to.have.length(10);

        cards.forEach((card, index) => {
            expect(card).to.exist;
            expect(card.title).to.equal(`title-${index}`);
            expect(card.description).to.equal(`description-${index}`);
            expect(card.created).to.exist;
            expect(card.created).to.be.instanceOf(Date);
            expect(card._id).to.be.undefined;
            expect(card.__v).to.be.undefined;
            expect(card.id).to.exist;
        });
    });

    it('retrieve an empty array if no Cards are found on the database', async () => {
        await Card.deleteMany();

        const cards = await retrieveCards();

        expect(cards).to.exist;
        expect(cards).to.be.instanceOf(Array);
        expect(cards).to.have.length(0);
    });

    afterEach(async () => {
        await Card.deleteMany();
    });

    after(async () => {
        await Card.deleteMany();
        await mongoose.disconnect();
    });
});