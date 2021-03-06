import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, 0, -5]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("asdafsjihlghjkrtko'n.cv");

// const sorter = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-5);
linkedList.add(-45);
linkedList.add(15);

// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();