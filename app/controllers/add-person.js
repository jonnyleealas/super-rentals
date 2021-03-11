import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

        startNewPerson() {
            let newPerson = this.store.createRecord("person");
            console.log(newPerson)
            this.set("newPerson", newPerson);
        },

        submitNewPerson() {
            this.get("newPerson").save().then(() => {
                this.set("newPerson", null);
                alert("Successfully Added Person");
                this.transitionToRoute("people");
            });
        },
    },
});
