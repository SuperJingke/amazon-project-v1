const product = 
{
    fakedb = [];
    featurelst = [];

    initDB()
    {

            this.fakedb.push({
                id:"1",
                title : "Blackberry",
                description : "Outdated",
                price : "$70",
                featured: false,
                imgPath : "1.jpg"

            });

            
            this.fakedb.push({
                id:"2",
                title : "Samsung S10",
                description : "Cool phone",
                price : "$700",
                featured: true,
                imgPath : "2.jpg"
            });

            
            this.fakedb.push({
                id:"3",
                title : "IPhone X",
                description : "Very cool evice",
                price : "$1100",
                featured: false,
                imgPath : "3.jpg"
            });
            
            this.fakedb.push({
                id:"4",
                title : "Samsung S10+",
                description : "Cool phone",
                price : "$900",
                featured: true,
                imgPath : "4.jpg"
            });
            this.fakedb.push({
                id:"5",
                title : "Samsung S10+",
                description : "Cool phone",
                price : "$900",
                featured: false,
                imgPath : "5.jpg"
            });
            this.fakedb.push({
                id:"6",
                title : "Samsung S10+",
                description : "Cool phone",
                price : "$900",
                featured: true,
                imgPath : "6.jpg"
            });
            this.fakedb.push({
                id:"7",
                title : "Samsung S10+",
                description : "Cool phone",
                price : "$900",
                featured: true,
                imgPath : "7.jpg"
            });
            this.fakedb.push({
                id:"8",
                title : "Samsung S10+",
                description : "Cool phone",
                price : "$900",
                featured: true,
                imgPath : "8.jpg"
            })



    },


    getAllProducts()
    {

        return this.fakedb;
    },


   
    featuredproduct()
    {
        this.fakedb.forEach(element => {
            if(element.featured)
            {
                this.featurelst.push(element)
            }
            
        });
    },


    
    getFeaturedProduct()
    {
        if(this.featurelst.length == 0){
            this.featuredproduct()
        }
        
        return this.featurelst    
    }
}

product.initDB();
module.exports = product;