/**
 * Created by nalantianyi on 2017/5/11.
 */
function * helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw=helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* gen() {
    yield  123 + 456;
    return ;
}
var ge=gen();
console.log(ge.next());
console.log(ge.next());