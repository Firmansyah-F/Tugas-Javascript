class Chain{
  constructor(){
      this.obj=[]
      this.disc=0
  }

  addItem({item_id,price,quantity}){

      if(quantity==undefined){
          this.obj.push({item_id,price,quantity:1})
      } else {
          this.obj.push({item_id,price,quantity})
      }
      return this;
  }

  removeItem({item_id}){
    //   const rm = this.obj.filter((a) => {
    //       return a.item_id == item_id
          
    //   })
    //   console.log(rm)
    //   console.log(this.obj)
    //   const index = this.obj.indexOf((rm[0]),1)
    //   this.obj.splice(index,1)
      
        const result = this.obj.map((e,i) => {
            if (e.item_id == item_id) {
                this.obj.splice(i,1)
            }
        })
    return this  
  }

  addDiscount(disc){
      this.disc = parseInt(disc)
      return this
  }

  totalItem(){
      let sumItem = 0
      for (let i = 0; i < this.obj.length; i++) {
          sumItem += 1
      }
      console.log(`Total Item : ${sumItem}`)
  }

  totalQuantity(){
      let sumQuantity = 0
      for (let i = 0; i < this.obj.length; i++) {
          sumQuantity += this.obj[i]['quantity']
      }
      console.log(`Quantity : ${sumQuantity}`)
  }

  totalPrice(){
      let price=0
      for (let i = 0; i < this.obj.length; i++) {
          price += this.obj[i]['price'] * this.obj[i]['quantity']   
      }
      if(this.disc==0){
          price=price
      } else {
          price -= price*(this.disc/100)
      }
      console.log(`Price : ${price}`)
  }

  showAll(){
      console.log(this.obj)
  }
}

const chain= new Chain();

console.log(chain.addItem({item_id:1, price:30000, quantity:3})
                 .addItem({item_id:2, price:10000})
                 .addItem({item_id:3, price:5000, quantity:2})
                 .removeItem({item_id:2})
                 .addItem({item_id:4, price:400, quantity:6})
                 .addDiscount("50%")
)
chain.totalItem();
chain.totalQuantity();
chain.totalPrice();
chain.showAll();