import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        handleLogout(){
            $.get("http://localhost:9000/logout").done(()=>{
                console.log("should transition no homo")
                this.transitionToRoute("login")
            })
        }
    },


});
