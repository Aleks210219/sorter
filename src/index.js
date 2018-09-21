class Sorter {
  constructor() {
    // your implementation
      this.arr = [];
      this.function = function(a, b) {
        return a - b;
      }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];

  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var endArr = [];
    indices.sort(function(a, b) { return a - b;});

    for(var i = 0; i < indices.length; i++) {
      endArr.push(this.arr[indices[i]]);
    }

      endArr.sort(this.function);
      for (var i = 0; i < indices.length; i++) {
          this.arr[indices[i]] = endArr[i];
      }
    
 
  }

  setComparator(compareFunction) {
    // your implementation
   this.function = compareFunction;
  }
}

module.exports = Sorter;