function panggilForEach() {
  var kalimat = "Saya ingin belajar bersama";
  var kalimatSplit = kalimat.split(" ");
  //   console.log(kalimatSplit);

  kalimatSplit.forEach(function (item, index) {
    console.log("Item :", item, "Index ke", index);
  });
}

panggilForEach();
