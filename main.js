/**
 * boolean: true | false
 */
var isLogin = false;


// == : so sánh bằng
var num_1 = 5;
var num_2 = "5";

var result__12 = num_1 == num_2;
console.log(result__12);
// ===: so sánh bằng ( so sánh giá trị và kiểu dữ liệu)
var num_3 = 8;
var num_4 = "8";
var result__34 = num_3 === num_4;
console.log(result__34);


// != : so sánh khác
var num_5 = 4;
var num_6 = 10;

var result__56 = num_5 != num_6;
console.log(result__56);

//!== : So sánh khác (so sánh giá trị và kiểu dữ liệu)
var num_7 = 6;
var num_8 = 5;

var result__78 = num_7 !== num_8;
console.log(result__78);

// >: so sánh lớn
var num_9 = 10;
var num_10 = 6;
console.log(num_9 > num_10);

// >= : so sánh lớn hơn hoặc bằng
var num_11 = 5;
var num_12 = 4;
console.log(num_11 >= num_12);


// < : so sánh bé
// <= : so sánh bé hơn hoặc băng


/**
 * &&
 * - Nếu đúng = > tất cả đều đúng
 * - Nếu sqi = > có q
 */
var bt1 = true;
var bt2 = false;
var bt3 = true
var bt2 = true;

var bt12 = bt1 && bt2;
console.log(bt12);
console.log(3 > 4 && 1 == 1 && 10 > 2);


/**
 * ||: hoặc
 */
var bt5 = true;
var bt6 = false;
var bt7 = false;

var bt56 = bt5 || bt6;
console.log(4 < 9 || 2 > 5 || 4 === 4);

/**
 * Cấu trúc điều kiện
 * if
 */
if (5 < 10) {
  console.log("Hello T");
}


console.log("Bao");

/**
 * chuyển số âm = > dương
 */
// if (d < 0) {
//   d = d * (-1);
// }
// console.log(d);


if (n = 500000) {
  n = 0;
}
console.log(n);

var creditCard = 5000;
var payment = 2000;
var penalty = 0;


var balance = creditCard - payment;
if (balance > 0) {
  penalty = (balance * 1.5) / 100;
}
console.log(penalty);

/**
 * Câu trúc điều kiện
 * if else
 */
if (4 === 4) {
  console.log("hanh dong 1");

} else {
  console.log("hanh dong 2");
}

// Toán tử điều kiện ( toán tử 3 ngôi )
// dk ? "Đúng" : "Sai"
4 === "4" ? console.log("hanh dong 1") : console.log("hand dong 2");

document.getElementById("btnKq").onclick = function () {
  var nb1 = document.getElementById("nb1").value * 1;
  var nb2 = document.getElementById("nb2").value * 1;
  var bigger = nb1 > nb2 ? nb1 : nb2;
  var kq = "";
  kq += "<p> SLN là: " + bigger + "</p>";
  document.getElementById("infoSLN").innerHTML = kq;
}

document.getElementById("btnTienluong").onclick = function () {
  var giolam = document.getElementById("giolam").value * 1;
  var luong = document.getElementById("luong").value * 1;
  var tongluong = 0;
  if (giolam > 40) {
    tongluong = 40 * luong + (giolam - 40) * luong * 1.5;

  } else {
    tongluong = giolam * luong;
  }
  var result = "";
  result += "<p>Tổng lương là: " + tongluong + "</p>"
  document.getElementById("infoLuong").innerHTML = result;
}


var so = 1;
if (so === 1) {
  console.log("Day la so 1");
} else if (so === 2) {
  console.log("Day la so 2");
} else if (so === 3) {
  console.log("Day la so 3");
} else {
  console.log("Khong biet doc");
}

/**
 * Đầu vào:
 * Tên hàng: tenhang
 * Đơn giá: gia
 * Số lượng: so luong
 * Tổng tiền:
 * Xử lí:
 * soluong < 50, tongtien = gia*soluong
 * nguoc lai:-
 */
