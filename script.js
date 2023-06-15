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
        this.do_list()
        this.cancel()
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
    
    do_list(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''
        
        for(let i = 0; i < this.products.length; i++){
            let tr = tbody.insertRow()
            
            let td_id = tr.insertCell()
            let td_name = tr.insertCell()
            let td_price = tr.insertCell()
            let td_delete = tr.insertCell()

            td_id.innerText = this.products[i].id
            td_name.innerText = this.products[i].name
            td_price.innerText = this.products[i].price
            let image = document.createElement('img')
            image.src = 'del.png'
            image.setAttribute('onclick','product.delete('+this.products[i].id+')')
            td_delete.appendChild(image)

        }
    }
    cancel(){
        document.getElementById('item').value = ''
        document.getElementById('ite_price').value = ''
    }

    delete(id){
       let tbody = document.getElementById('tbody')
       for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id == id){
                this.products.splice(i,1)
                tbody.deleteRow(i)
            }
       }
       alert('delete item sucess')
    }

}
let product = new Product()