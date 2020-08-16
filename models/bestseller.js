const bestsell =
{
    best: [],

    bestsell()
    {
        this.best.push({
            id: "kk1",
            name: "Auto GPS",
            image:"5.jpg"
        });

        this.best.push({
            id: "kk2",
            name: "UNIX Wooden desk",
            image:"6.jpg"

        });
        this.best.push({
            id: "kk3",
            name: "Yamaho Guitar",
            image:"8.jpg"

        });
        this.best.push({
            id:"4",
            name:"Pajama",
            image:"4.jpg"
        })

    },

    getProducts()
    {
        return this.best;
    }
}
bestsell.bestsell();
module.exports=bestsell;