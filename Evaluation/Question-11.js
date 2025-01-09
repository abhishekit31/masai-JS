let book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
};

for (let ttl in book) {
  console.log(`${ttl}:${book[ttl]}`);
}
