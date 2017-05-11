/**
 * Created by nalantianyi on 2017/5/11.
 */
function *f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        console.log('reset:',reset);
        if (reset) {
            i = -1;
        }
    }
}
var g=f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));