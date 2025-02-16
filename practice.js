const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    raiting: 8.38,
};

for(const genres in book) {
    console.log(genres);
}