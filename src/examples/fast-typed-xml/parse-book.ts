import * as tx from "fast-typed-xml";

const book = tx.object({
  copies: tx.number("copies", "element"),
});

const result = book.parse("<book><copies>3</copies></book>");
console.log(result); // { copies: 3 }
