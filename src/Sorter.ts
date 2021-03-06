interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
};

export abstract class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // 完全等同於上面兩行
  // constructor(public collection: Sortable) {}
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        };

        // 只會對 number[] 進行處理
        // 如果 collection 是一個 number[]
        // 物件類別的 Type Guard
        // if (this.collection instanceof Array) {
        // this.collection === number[]
          // if (this.collection[j] > this.collection[j + 1]) {
          //   const leftHand = this.collection[j];
          //   this.collection[j] = this.collection[j + 1];
          //   this.collection[j + 1] = leftHand;
          // }
        // }

        // 只會對 string 進行處理
        // 如果 collection 是一個純 string，ex："red"
        // 除了物件類別以外的 Type Guard，ex：string, number, boolean, symbol
        // if (typeof this.collection === "string") {}
      }
    }
  }
};