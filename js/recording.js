"use strict";

export default function recording() {
	const recordListALL = document.getElementById('all-area');
	const recordListMinus = document.getElementById('minus-area');
	const recordListPlus = document.getElementById('plus-area');	
    const recordButton = document.getElementById('record');
    const clearButton = document.getElementById('clear');
    const recordDate = document.getElementById('record-date');
    const recordTitle = document.getElementById('record-title');
    const recordPrice = document.getElementById('record-price');
	const recordType = document.getElementById('record-type');

	//登録
    recordButton.addEventListener('click', () => {
		const date = recordDate.value;
        const title = recordTitle.value;
        const price = recordPrice.value;
		const type = recordType.value;

		const newItem = document.createElement('li');
		const newItemType = document.createElement('li');
		newItem.classList.add('record-item');
		newItemType.classList.add('record-' + type);
		newItem.textContent = `${date}  ${title}  ${price}円`;

		const jpType = type === "plus" ? "収入" : "支出";
		newItemType.textContent = `${jpType}  ${date}  ${title}  ${price}円`;

		if (type === "plus") {
			recordListPlus.appendChild(newItem);
			recordListALL.appendChild(newItemType);
		} else {
			recordListMinus.appendChild(newItem);
			recordListALL.appendChild(newItemType);
		}
		// console.log(type);

        localStorage.setItem("recordDate", recordDate.value);
        localStorage.setItem("recordTitle", recordTitle.value);
        localStorage.setItem("recordPrice", recordPrice.value);
        alert("登録しました。");

            recordDate.value = '';
            recordTitle.value = '';
            recordPrice.value = '';
			recordType.value = 'plus';
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
        alert("削除しました。");
    });
}
