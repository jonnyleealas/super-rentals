import Controller from '@ember/controller';

export default Controller.extend({
    
    actions: {
        
        startNewGuitar () {
            let newGuitar = this.store.createRecord("guitar");
            this.set("newGuitar", newGuitar);
        
        },
        submitNewGuitar () {
            this.get("newGuitar").save().then(() => {
                this.set("newGuitar", null)
                alert("Successfully Added Guitar")
                this.transitionToRoute("guitars")
            })
        },
        
    }
});
