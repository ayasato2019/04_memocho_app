"use strict";

export default function makeChart() {
    const minusItems = document.querySelectorAll('.record-minus');

	minusItems.forEach(item => {
        各アイテムからタイトルと価格を抽出する
        const textContent = item.textContent;
        
        正規表現を使ってタイトルと価格を抽出する例
        const regex = /(.+?) (\d+)円/;
        const match = textContent.match(regex);
        
        if (match) {
            const title = match[1]; // タイトル
            const price = match[2]; // 価格
            
            console.log(`タイトル: ${title}`);
            console.log(`価格: ${price}`);
        }
    });


	// const jpType = type === "plus" ? "収入" : "支出";
	// if(jpType == "支出") {	

	// } else {

	// }

	var ctx = document.getElementById("pieChart");
	var myPieChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ["", "", "", ""],
		datasets: [{
			backgroundColor: [
				"#6b5991",
				"#c270af",
				"#AD84A9",
				"#bbb2c9"
			],
			data: [38, 31, 21, 10]
		}]
		},
	});
}