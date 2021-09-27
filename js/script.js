'use strict'
class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { num: 1, title: 'Shirt', price: 150 },
        { num: 2, title: 'Socks', price: 50 },
        { num: 3, title: 'Jacket', price: 350 },
        { num: 4, title: 'Shoes', price: 250 },
    ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.num, good.img, good.title, good.price);
            listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}
class GoodsItem {
    constructor(num, title, price) {
        this.num = num;
        this.title = title;
        this.price = price;
    }
    render() {
      return `<div class="goods-item">
      <img width="180" height="180" src="img/small-pic-${this.num}.jpg" alt="photo${this.num}">
      <h3 class="title">${this.title}</h3>
      <p class="price">${this.price}</p>
      <button class="by_btn">Добавить</button>
      </div>`;
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();