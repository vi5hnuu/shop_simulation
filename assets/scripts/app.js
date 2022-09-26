// class ProductItem {
//     #title;
//     #imageUrl;
//     #description;
//     #price;
//     static className = 'ProductItem'
//     constructor(title, imageUrl, description, price, owner) {
//         this.#title = title
//         this.#imageUrl = imageUrl
//         this.#description = description
//         this.#price = price
//         this.owner = owner
//     }
//     get getTitle() {
//         return this.#title
//     }
//     get getImageUrl() {
//         return this.#imageUrl
//     }
//     get getDescription() {
//         return this.#description
//     }
//     get getPrice() {
//         return this.#price
//     }
//     get getOwner() {
//         return this.owner
//     }

//     formatProduct() {
//         return `
//         ${this.getTitle}
//         ${this.getImageUrl}
//         ${this.getDescription}
//         ${this.getPrice}
//         ${this.getOwner}
//         `
//     }
// }

// class ProductList {
//     constructor(pList = []) {
//         this.productList = pList
//     }

//     addProduct(pduct) {
//         this.productList.push(pduct)
//     }
//     displyItems() {
//         for (const product of this.productList) {
//             console.log(product.formatProduct());
//         }
//     }
// }

// const pList = new ProductList()
// pList.addProduct(new ProductItem('hey', 'www.com', 'ok', 12, 'vishnu'))
// pList.addProduct(new ProductItem('hey', 'www.com', 'ok', 19, 'krishan'))
// pList.displyItems()
// console.log(ProductItem.className);
// const { className } = ProductItem
// console.log(className);

/////////////////////////////
const defaultProducts = [
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "60.00",
        "imgUrl": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": ".00",
        "imgUrl": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "55.00",
        "imgUrl": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "150",
        "imgUrl": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "75.50",
        "imgUrl": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "120.00",
        "imgUrl": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        "name": "Chair",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using m ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "price": "90.00",
        "imgUrl": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
]
/////////////////////////////


class ProductList {
    constructor(products = []) {
        this.products = products
    }
    addProduct(product) {
        this.products.push(product)
        this.renderProduct(product)
    }

    #getProductHtmlEl(product) {
        const productEl = document.createElement("div")
        productEl.classList.add('product')
        productEl.dataset.id = product.pid
        productEl.insertAdjacentHTML('beforeEnd', `
                <div class="delete-product">x</div>
                <img src="${product.imgUrl}" alt="${product.name}">
                <h2 class="item-name">${product.name}</h2>
                <p class="price">$${product.price}</p>
                <p class="description">${product.description}</p>
                <Button class="btn btn-addToCart">Add to cart</Button>
        `)
        return productEl;
    }


    renderProduct(product) {
        const productEl = this.#getProductHtmlEl(product)
        const productsEl = document.querySelector('.products')
        productsEl.appendChild(productEl)

        //addListener to button
        const addcartBtn = productEl.querySelector('.btn')
        addcartBtn.addEventListener('click', () => {
            const amtEl = document.querySelector('.cart-total span')
            const newAmt = parseFloat(amtEl.innerHTML) + product.price
            amtEl.innerHTML = newAmt.toFixed(2)
        })

        //addListener to deleteButton
        const dlButton = productEl.querySelector('.delete-product')
        dlButton.addEventListener('click', () => {
            productsEl.removeChild(productEl)
            const deletedItem = this.products.splice(this.products.indexOf(product), 1)
            // console.log(deletedItem);
        })
    }
    removeProduct(productId) {
        this.products.forEach((prod, index, prodts) => {
            if (prod.pid == productId) {
                this.products.splice(index, 1);
            }
        })
    }
}

class Product {
    static id = 0
    constructor(name, imgUrl, price, description) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
        this.description = description
        this.pid = Product.id++
    }
}

const productList = new ProductList()
defaultProducts.forEach((obj) => {
    productList.addProduct(new Product(
        obj.name, obj.imgUrl, parseFloat(obj.price), obj.description
    ))
})




/////////////////////////
// const person = {
//     name: 'vishnu',
//     age: 45
// }
// person.name = 'Xyz'
// console.log(Object.getOwnPropertyDescriptors(person));
// Object.defineProperty(person, 'name', {
//     configurable: true,
//     enumerable: true,
//     writable: false
// })
// person.name = 'Vishnu'
// // delete person.name //deleted
// console.log(Object.getOwnPropertyDescriptors(person));
// Object.defineProperty(person, 'name', {
//     configurable: false,
//     enumerable: true,
//     writable: false
// })
// delete person.name
// console.log(Object.getOwnPropertyDescriptors(person));
//


// Object.defineProperty(person, 'name', {
//     configurable: false,
//     enumerable: false,
//     writable: false
// })
// for (key in person)
//     console.log(key);