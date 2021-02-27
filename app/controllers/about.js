import Controller from '@ember/controller';

export default Controller.extend({
    
    actions: {
        
        startNewGuitar () {
            let newGuitar = this.store.createRecord("guitar");
            this.set("newGuitar", newGuitar);
            // console.log("new guitar", this.get("newGuitar"));
            console.log("what is this",newGuitar.id)
        },
        submitNewGuitar () {
            this.get("newGuitar").save().then(() => {
                console.log("THis is submit guitar")
                this.set("newGuitar", null)
                alert("Successfully Added Guitar")
            })
        },
        
    }
});
