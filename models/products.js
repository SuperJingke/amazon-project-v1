const product = 
{

    fakedb : [],

    initDB()
    {

            this.fakedb.push({
                title : "Blackberry",
                description : "Outdated",
                price : "70",
                featured: false,
                imgPath : "1.jpg"

            });

            
            this.fakedb.push({
                title : "Samsung S10",
                description : "Cool phone",
                price : "700",
                featured: true,
                imgPath : "2.jpg"
            })

            
            this.fakedb.push({
                title : "IPhone X",
                description : "Very cool evice",
                price : "1100",
                featured: false,
                imgPath : "3.jpg"
            })


            
            this.fakedb.push({
                title : "Samsung S10+",
                description : "Cool phone",
                price : "900",
                featured: false,
                imgPath : "4.jpg"
            })


    },


    getAllProducts()
    {

        return this.fakedb;
    },


    getFeaturedProducts()
    {
        let featuredProduct = [];
        let storage = this.fakedb;
        let i = 0
        for (i <= temp.length; i++;) {
            if (storage[i].featured === true){
                featuredProduct.push(storage[i])
            }
        }

        return this.featuredProduct;
    }


}

product.initDB();
module.exports = product;