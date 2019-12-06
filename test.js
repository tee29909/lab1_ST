const assert = require('assert');
const math = require('./math');
describe('file to be tested', ()=>{
    context('function to be tested' , ()=>{



        it('should do something', ()=>{
            assert.equal(1, 1);
        });

        it('should do another thing', ()=>{
            assert.deepEqual([1,2,3], [1,2,3]);
            assert.deepEqual({name: 'kob'},{name: 'kob'});
        });

        

    });
    
});

describe('file math', ()=>{
    context('function add' , ()=>{

        

        it('should do add(1+1)', ()=>{
           assert.equal(math.add(1,1), 2);
        });
        it('should do add2(5+1)', ()=>{
            assert.equal(math.add2(5,1), 6);
         });
         it('should do add3(10+29)', ()=>{
            assert.equal(math.add2(10,29), 39);
         });

       

        

    });
    
});


