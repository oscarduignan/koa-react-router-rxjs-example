var Rx = require('rx');

module.exports = function (defaults) {

    var a = new Rx.BehaviorSubject(defaults.a || 1);
    var b = new Rx.Subject();

    setTimeout(() => {
        b.onNext(2);
    }, 5000);

    return {
        state: Rx.Observable.
            combineLatest(
                a,
                b,
                (a, b) => { return { a: a, b: b }; }
            )
    };

};