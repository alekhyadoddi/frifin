// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    customerName: "Ahmed",
    photolink: "https://goop.com/wp-content/uploads/1990/03/Banff-Hero-AUR0018949-1735x1153.jpg",
    scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    customerName: "al",
    photolink: "https://goop.com/wp-content/uploads/1990/03/Banff-Hero-AUR0018949-1735x1153.jpg",
    scores:[
      2,
      2,
      4,
      4,
      3,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    customerName: "ale",
    photolink: "https://goop.com/wp-content/uploads/1990/03/Banff-Hero-AUR0018949-1735x1153.jpg",
    scores:[
      1,
      5,
      3,
      4,
      3,
      1,
      2,
      5,
      4,
      1
    ]
  }
];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
