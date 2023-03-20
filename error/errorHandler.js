class Errorhandler{
    constructor(status,meassage){
        this.status= status,
        this.meassage= meassage

    }


static invalidapikey(meassage=' Invalid Header '){
    return new Errorhandler(422,meassage)

}

}

module.exports= Errorhandler