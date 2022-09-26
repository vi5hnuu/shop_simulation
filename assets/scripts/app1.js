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
        "price": "50.00",
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
class Cart {
    #cartItemsMp
    constructor() {
        this.#cartItemsMp = new Map()
    }
    addToCart(product) {
        if (this.#cartItemsMp.has(product.pid)) {
            const pdt = this.#cartItemsMp.get(product.pid)
            pdt.quantity = pdt.quantity + 1
            this.#cartItemsMp.set(product.pid, pdt)
        } else {
            this.#cartItemsMp.set(product.pid, { pName: product.name, pPrice: product.price, quantity: 1 })
        }
    }
    cartTotal() {
        let total = 0.0
        for (const [, pdt] of this.#cartItemsMp.entries()) {
            console.log(pdt);
            total += (pdt.quantity * pdt.pPrice)
        }
        return total;
    }
    cartSummary() {
        let res = []
        this.#cartItemsMp.forEach((val, key, mp) => {
            res.push({ name: val.pName, price: val.pPrice, qty: val.quantity })
        })
        return res
    }
}
class Shop extends Cart {
    constructor(products = []) {
        super()
        this.products = products
        document.querySelector('.btn-order').addEventListener('click', () => {
            this.order()
        })
        document.querySelector('.btn-confirm').addEventListener('click', () => {
            this.#toggleShowModal()
        })
    }
    addProduct(product) {
        this.products.push(product)
        this.renderProduct(product)
    }

    removeProduct(productId) {
        this.products.forEach((prod, index, prodts) => {
            if (prod.pid == productId) {
                this.products.splice(index, 1);
            }
        })
    }
    renderProduct(product) {
        const productEl = product.getProductHtmlEl()
        const productsEl = document.querySelector('.products')
        productsEl.appendChild(productEl)

        //addListener to button
        const addcartBtn = productEl.querySelector('.btn')
        addcartBtn.addEventListener('click', () => {
            const amtEl = document.querySelector('.cart-total span')
            const newAmt = parseFloat(amtEl.innerHTML) + product.price
            amtEl.innerHTML = newAmt.toFixed(2)
            this.addToCart(product)
        })

        //addListener to deleteButton
        const dlButton = productEl.querySelector('.delete-product')
        dlButton.addEventListener('click', () => {
            productsEl.removeChild(productEl)
            const deletedItem = this.products.splice(this.products.indexOf(product), 1)
            // console.log(deletedItem);
        })
    }

    #toggleShowModal() {
        const backdrop = document.querySelector('.backdrop')
        const modal = document.querySelector('.reciet')
        backdrop.classList.toggle('hidden')
        modal.classList.toggle('hidden')
    }
    order() {
        this.#toggleShowModal()
        const modal = document.querySelector('.reciet')
        for (const item of this.cartSummary()) {
            const ht = `
            <div class="info-block">
                <p>${item.name} x ${item.qty}</p>
                <p>$${item.price}</p>
                <p>$${item.price * item.qty}</p>
            </div>
            `
            modal.querySelector('.info').insertAdjacentHTML('beforeEnd', ht)
        }
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

    getProductHtmlEl() {
        const productEl = document.createElement("div")
        productEl.classList.add('product')
        productEl.dataset.id = this.pid
        productEl.insertAdjacentHTML('beforeEnd', `
                <div class="delete-product">x</div>
                <img src="${this.imgUrl}" alt="${this.name}">
                <h2 class="item-name">${this.name}</h2>
                <p class="price">$${this.price.toFixed(2)}</p>
                <p class="description">${this.description}</p>
                <Button class="btn btn-addToCart">Add to cart</Button>
        `)
        return productEl;
    }

}



////////////
const shop = new Shop()
const cart = new Cart()
defaultProducts.forEach((obj) => {
    const pdt = new Product(obj.name, obj.imgUrl, parseFloat(obj.price), obj.description)
    shop.addProduct(pdt)
})
//////////////////


const btnOrder = document.querySelector('.btn-order')
btnOrder.addEventListener('click', () => {
    //
})

