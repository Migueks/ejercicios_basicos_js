const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(duplicates) {
  let noduplicates = duplicates.filter((item, index) => {
    return duplicates.indexOf(item) === index;
  });
  console.log(noduplicates);
}

removeDuplicates(duplicates);
