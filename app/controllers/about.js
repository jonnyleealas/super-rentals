import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onSubmit(){console.log("some shit in onSubmit")},
        startNewGuitar () {
            let newGuitar = this.store.createRecord("guitar");
            this.set("newGuitar", newGuitar);
            console.log("new guitar", this.get("newGuitar"));
        },
        submitNewGuitar () {
            this.get("newGuitar").save().then(() => {
                this.set("newGuitar", null)
                alert("Successfully Added Guitar")
            })
        },
       
    }
});
