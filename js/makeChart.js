"use strict";

export default function makeChart() {
    const recordButton = document.getElementById('record');
    const recordTitle = document.getElementById('record-title');
    const recordPrice = document.getElementById('record-price');
    const recordType = document.getElementById('record-type');

    let labels = ["サンプル"]; // 初期状態のラベル
    let dataList = ["100"]; // 初期状態のデータ
	let isFirstClick = true;

    // チャートの描画
    var ctx = document.getElementById("pieChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels, // 初期状態の labels
            datasets: [{
                backgroundColor: [
                    "#6b5991",
                    "#A6639F",
                    "#EEC1E9",
                    "#8B6E88",
                    "#D2A1CD",
                    "#c270af",
                    "#AD84A9",
                    "#bbb2c9"
                ],
                data: dataList, // 初期状態のデータ
            }]
        },
    });

    recordButton.addEventListener('click', () => {
        const title = recordTitle.value;
        const price = recordPrice.value;
        const type = recordType.value;

        if (type === "minus") {
			if (isFirstClick) {
                // 初回クリック時にサンプルデータを削除
                labels = [];
                dataList = [];
                isFirstClick = false; // フラグを更新して初回クリック処理をスキップ
            }
            // labels に title を追加し、dataList に price を追加
            labels.push(title);
            dataList.push(price);

            // チャートを更新
            myPieChart.data.labels = labels; // 更新された labels
            myPieChart.data.datasets[0].data = dataList; // 更新されたデータ
            myPieChart.update(); // チャートを再描画
        }

        console.log(labels.length); // 追加された項目の数を確認
        console.log(dataList.length);
    });
}
