var word = "bookkeeper larry"

// uniqueArray = wprd.filter(function(item, pos){
// return word.indexOf(item) == pos;
// })
word =Array.from(new Set(word.split(','))).toString();

return word