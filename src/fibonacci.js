/**
 * Created by nalantianyi on 2017/5/11.
 */
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 10000000000000000000000) break;
    console.log(n);
}