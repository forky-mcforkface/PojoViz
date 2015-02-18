/**
 * Created by mauricio on 2/17/15.
 */
/*jshint loopfunc: true */
var expect = require('chai').expect;
var Q = require('q');
var pojoviz = require('../../src/');
var utils = require('../../src/util/');

describe('Known configuration schemas', function () {
  it('should be processed without errors', function (done) {
    this.timeout(3 * 60 * 1000);

    var promises = [];
    var schemas = pojoviz.schemas;
    utils.notification = function () {};
    for (var k in schemas) {
      if (schemas.hasOwnProperty(k)) {
        schemas[k].forEach(function (cfg) {
          cfg.debug = true;
          if (cfg.src) {
            promises.push(
              pojoviz.setCurrentInspector(cfg)
                .then(function () {
                  console.time('process');
                  console.log('processing: ', cfg.displayName || cfg.entryPoint);
                  pojoviz.process(pojoviz.getCurrentInspector());
                  console.timeEnd('process');
                })
            );
          }
        });
      }
    }

    Q.all(promises)
      .then(function () {
        done();
      })
      .done(null, done);
  });
});

module.exports = pojoviz;