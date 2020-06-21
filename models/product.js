const product = 
{

    fakedb : [],

    initDB()
    {

            this.fakedb.push({
                title : "Blackberry",
                descrition : "Outdated",
                price : "70",
                featured: false,
                imgPath : "1.jpg"

            });

            
            this.fakedb.push({
                title : "Samsung S10",
                descrition : "Cool phone",
                price : "700",
                featured: true,
                imgPath : "2.jpg"
            })

            
            this.fakedb.push({
                title : "IPhone X",
                descrition : "Very cool evice",
                price : "1100",
                featured: false,
                imgPath : "3.jpg"
            })


            
            this.fakedb.push({
                title : "Samsung S10+",
                descrition : "Cool phone",
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


    }


}

product.initDB();
module.exports = product;