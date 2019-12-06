const chai = require('chai');
const expect = chai.expect;
const math = require('./math');

describe('Test chai',()=>{
    it('should compare thing by expect', ()=>{
expect(1).to.equal(1);
    });
    it('should compare another things by expect', ()=>{
        expect(5>8).to.be.false;
        expect({name: 'kob'}).to.deep.equal({name: 'kob'});
        expect({name: 'kob'}).to.have.property('name').to.equal('kob');
        expect({}).to.be.a('object');
        expect(1).to.be.a('number');
        expect('kob').to.be.a('string');
        expect('kob'.length).to.be.equal(3);
        expect('kob').to.be.lengthOf(3);
        expect([1,2,3]).to.be.lengthOf(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.be.exist;

            });
});


describe('Math module',()=>{

    context('fun add',()=>{
        if('ส้งค่ากลับเป็นnum', ()=>{
            expect(math.add(0,0)).to.be.a('number');
        });
        if('ส้งค่ากลับ', ()=>{
            expect(math.add(1,1)).to.equal(2);
        });
    });


    
    
});
