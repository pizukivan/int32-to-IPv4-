function int32ToIp(int32) {
    //left pad binary string so that it is always 32int with padStart()
    var bits = int32.toString(2).padStart(32, '0');
    let final = [];
    let byte = 8;

    //create array with 8bits each element
    for (let i = 0; i < 4; i++) {
        final[i] = bits.slice(byte - 8, byte);
        byte += 8;
        if (!final[i]) {
            final[i] = '0';
        }
    }
    //create final array with parsed binary and then join() to return 
    let ip = [];
    final.forEach(element => ip.push(parseInt(element, 2)));
    return (ip.join('.'))
}
int32ToIp(2149583361);
