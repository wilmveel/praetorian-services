
var assert = require('assert');
var Helper = require('../Helper');
var AccessService = require('../../src/AccessService');

describe('AccessService', function () {

    var helper = new Helper(this);

    var service;
    
    var accessAddress;

    before(function (done) {
        helper.init(done)
    });

    before(function (done) {
        helper.deploy(function (err, contract) {
            if (err) return done(err)
            service = new AccessService(contract);
            done();
        });
    });
    
    // it('should return a hexidecimal zero', function(done){
    //     service.find(function(err, address){
    //         if(err) return done(err);
    //         assert(address.toString('hex') === '0x0000000000000000000000000000000000000000');
    //         done();
    //     })
    // })
    
    it('should create an access contract', function(done){
        service.find(function(err, address){
            if(err) return done(err);
            console.log(address);
            accessAddress = address;
            assert(address.toString('hex') !== '0x0000000000000000000000000000000000000000');
            done();
        })
    });
    
    it('should give the access contract', function(done){
        service.find(function(err, access){
            if(err) return done(err);
            assert(accessAddress.toString('hex') === access.toString('hex'));
            done();
        })
    });
    
    
    
})