import Controller from '@ember/controller';


export default Controller.extend({

    actions: {

        deletePerson() {
            this.get('model').destroyRecord().then( () => {
                alert("Deleted");
                this.transitionToRoute("people");
            });
        },

        isEditing() {
            this.set("isEditing", true); 
        },

        updatePerson() {
            this.get("model").save().then( () => {
                this.set("isEditing", false);
                alert("Update Complete");
                this.transitionToRoute("people");
            });
        },

        cancelEdit() {
            this.get('model').rollbackAttributes();
            this.set("isEditing", false);
        },

        modalButton() {
            let modalBg = document.querySelector(".modal-bg");
            modalBg.classList.add("bg-active");
        },

        modalClose() {
            let modalBg = document.querySelector(".modal-bg");
            modalBg.classList.remove("bg-active");
        },
    }
});


