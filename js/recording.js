"use strict";

export default function recording() {
	const recordList = document.querySelector('.display-area');
    const recordButton = document.getElementById('record');
    const clearButton = document.getElementById('clear');
    const recordDate = document.getElementById('record-date');
    const recordTitle = document.getElementById('record-title');
    const recordPrice = document.getElementById('record-price');

	//登録
    recordButton.addEventListener('click', () => {
		const date = recordDate.value;
        const title = recordTitle.value;
        const price = recordPrice.value;

		const newItem = document.createElement('li');
		newItem.classList.add('record-item');
		newItem.textContent = `${date} - ${title} - ${price}円`;
		recordList.appendChild(newItem);

        localStorage.setItem("recordDate", recordDate.value);
        localStorage.setItem("recordTitle", recordTitle.value);
        localStorage.setItem("recordPrice", recordPrice.value);
        alert("登録しました。");

            recordDate.value = '';
            recordTitle.value = '';
            recordPrice.value = '';
    });

	//削除
	clearButton.addEventListener('click', () => {
        // 各入力フィールドの値を取得してlocalStorageに保存
        localStorage.removeItem("recordDate", recordDate.value);
        localStorage.removeItem("recordTitle", recordTitle.value);
        localStorage.removeItem("recordPrice", recordPrice.value);

		while (recordList.firstChild) {
            recordList.removeChild(recordList.firstChild);
        }
        alert("全て削除しました。");
    });
}
