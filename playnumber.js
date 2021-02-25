class play {
    result
    cross(a,b){
        this.result = a*b
        return this
    }
    sum (x){
        this.result += x
        return this
    }
}
const testing = new play
console.log (testing.cross(3,4).sum(5))