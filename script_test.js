function test() {
  let a = 3;
  let result
  if (a == 3) {
    result = "OK";
  }
  console.log(`안녕 ${result}`)
  return {
    result
  };
}
let res = test()
console.log(res);
