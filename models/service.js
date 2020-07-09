class ServiceDB
{
    services = [];

    constructor()
    {
        this.services.push('Web Development');
        this.services.push('Mobile Development');
        this.services.push('Database Administration')
    }


    getServices()
    {
        return this.services;
    }
}

//module default = ServiceDB // ES6 modules sytax