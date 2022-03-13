"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                ;
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
}
exports.Sorter = Sorter;
;
