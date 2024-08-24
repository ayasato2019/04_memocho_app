"use strict";

export default function recording() {
    const recordListALL = document.getElementById('all-area');
    const recordListMinus = document.getElementById('minus-area');
    const recordListPlus = document.getElementById('plus-area');    
    const recordButton = document.getElementById('record');
    const recordDate = document.getElementById('record-date');
    const recordTitle = document.getElementById('record-title');
    const recordPrice = document.getElementById('record-price');
    const recordType = document.getElementById('record-type');
    const clearButtonHtml = '<button class="clear-button"><svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 20px; height: 20px; opacity: 1;" xml:space="preserve"><g><path class="st0" d="M88.594,464.731C90.958,491.486,113.368,512,140.234,512h231.523c26.858,0,49.276-20.514,51.641-47.269l25.642-335.928H62.952L88.594,464.731z M329.183,221.836c0.357-5.876,5.4-10.349,11.277-9.992c5.877,0.357,10.342,5.409,9.993,11.277l-10.129,202.234c-0.357,5.876-5.4,10.342-11.278,9.984c-5.876-0.349-10.349-5.4-9.992-11.269L329.183,221.836z M245.344,222.474c0-5.885,4.772-10.648,10.657-10.648c5.885,0,10.656,4.763,10.656,10.648v202.242c0,5.885-4.771,10.648-10.656,10.648c-5.885,0-10.657-4.763-10.657-10.648V222.474zM171.531,211.844c5.876-0.357,10.92,4.116,11.278,9.992l10.137,202.234c0.357,5.869-4.116,10.92-9.992,11.269c-5.869,0.357-10.921-4.108-11.278-9.984l-10.137-202.234C161.182,217.253,165.654,212.201,171.531,211.844z" style="fill: rgb(65, 46, 63);"></path><path class="st0" d="M439.115,64.517c0,0-34.078-5.664-43.34-8.479c-8.301-2.526-80.795-13.566-80.795-13.566l-2.722-19.297C310.388,9.857,299.484,0,286.642,0h-30.651H225.34c-12.825,0-23.728,9.857-25.616,23.175l-2.721,19.297c0,0-72.469,11.039-80.778,13.566c-9.261,2.815-43.357,8.479-43.357,8.479C62.544,67.365,55.332,77.172,55.332,88.38v21.926h200.66h200.676V88.38C456.668,77.172,449.456,67.365,439.115,64.517z M276.318,38.824h-40.636c-3.606,0-6.532-2.925-6.532-6.532s2.926-6.532,6.532-6.532h40.636c3.606,0,6.532,2.925,6.532,6.532S279.924,38.824,276.318,38.824z" style="fill: rgb(65, 46, 63);"></path></g></svg></button>';

    // 登録
    recordButton.addEventListener('click', () => {
        const date = recordDate.value;
        const title = recordTitle.value;
        const price = recordPrice.value;
        const type = recordType.value;
		if (!date || !title || !price) {
			alert("入力していない項目があります。");
		} else {
			const uniqueId = Date.now();  // 一意のIDを生成
			const newItem = document.createElement('li');
			const newItemType = document.createElement('li');
			newItem.classList.add('record-item');
			newItem.classList.add(`record-${uniqueId}`);
			newItem.innerHTML = `${date}  ${title}  ${price}円 ${clearButtonHtml}`;
			newItem.dataset.id = uniqueId;

			const jpType = type === "plus" ? "収入" : "支出";
			newItemType.classList.add('record-item');
			newItemType.classList.add(`record-${uniqueId}`);
			newItemType.innerHTML = `${jpType}  ${date}  ${title}  ${price}円 ${clearButtonHtml}`;
			newItemType.dataset.id = uniqueId;

			if (type === "plus") {
				recordListPlus.appendChild(newItem);
				recordListALL.appendChild(newItemType);
			} else {
				recordListMinus.appendChild(newItem);
				recordListALL.appendChild(newItemType);
			}

			// localStorageに追加
			let records = JSON.parse(localStorage.getItem('records')) || {};
			records[uniqueId] = { date, title, price, type };
			localStorage.setItem('records', JSON.stringify(records));

			recordDate.value = '';
			recordTitle.value = '';
			recordPrice.value = '';
		}
    });

    // 削除
    document.addEventListener('DOMContentLoaded', () => {
        const displayAreas = document.querySelectorAll('.display-area');
        for (let i = 0; i < displayAreas.length; i++) {
            displayAreas[i].addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                    const displayItem = e.target.closest('li');
                    if (displayItem) {
                        const itemId = displayItem.dataset.id;
                        // 同じIDを持つ全てのアイテムを削除
                        document.querySelectorAll(`.record-${itemId}`).forEach(item => item.remove());

                        // localStorageから削除
                        let records = JSON.parse(localStorage.getItem('records')) || {};
                        delete records[itemId];
                        localStorage.setItem('records', JSON.stringify(records));
                    }
                }
            });
        }
    });
}
