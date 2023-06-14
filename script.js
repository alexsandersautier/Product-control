class Product{

    constructor(){
        this.id = 1
        this.products = []
    }

    insert(){
        let product = this.read_date()
        if(this.validate(product) == true){
            this.save(product)
        }
    }

    read_date(){
        let product = {}

        product.id = this.id;
        product.name = document.getElementById('item').value
        product.price =  document.getElementById('ite_price').value

        return product
    }

    validate(product){
        let msg = ''

        if(product.name == ''){
            msg += 'Please, insert value in name of product \n'
        }
        if(product.price == ''){
            msg += 'Please, insert value in price of product \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    save(product){
        this.products.push(product)
        this.id++
    }

}
let product = new Product()