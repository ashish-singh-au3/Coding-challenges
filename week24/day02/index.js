function bobTest(num) {
    num = num.split(' ');

    var positions = [[], []];

    for (var i = 0; i < num.length; i++) {
        positions[num[i] % 2].push(i + 1);
    }

    if(positions[0].length === 1) return positions[0][0];
    if(positions[1].length === 1) return positions[1][0];

    return 0;


}

console.log(bobTest("2 4 7 8 10"));
console.log(bobTest("1 2 1 1"));
