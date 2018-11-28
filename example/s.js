console.log("object");

console.log("object");


// console.log(111dddd);

// this = "2222"

console.log(jj);

function isT(val, type) {
    /** @type {string} */
    var name = Object.prototype.toString.call(val).substring(8).replace("]", "");
    return type ? name === type : name;
}

console.log(isT([1, 2, 3], "Array"));


console.log(Object.prototype.toString.call([1,2,3]));




 function pick(count) {
     return 1 === count || 1 === Math.ceil(Math.random() * count);
 }

 console.log(pick(1));


 function reTwo(n,m){
    return n,m;
 }

 console.log(reTwo(1,2));


 function uu() {
     var partPos;
     var right;

     var i = 20;

     var arr = new Array(i);
     //转换成 36 进制
     var objs = Date.now().toString(36).split("");
     for (; i-- > 0;) {
         /** @type {string} */
         right = (partPos = 36 * Math.random() | 0).toString(36);
         /** @type {string} */
         arr[i] = partPos % 3 ? right : right.toUpperCase();
     }
     /** @type {number} */
     var j = 0;
     for (; j < 8; j++) {
         arr.splice(3 * j + 2, 0, objs[j]);
     }
     return arr.join("");
 }

 console.log(uu());




  function en(data, utf8) {
      try {
          /** @type {string} */
          data = utf8 ? encodeURIComponent(data).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(data);
      } catch (n) {}
      return data;
  }

  console.log(en('%28ddsdfk%29sdfsdf', 1));

 