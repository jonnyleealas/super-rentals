import Controller from '@ember/controller';


export default Controller.extend({

    actions: {

        deleteGuitar() {

            this.get('model').destroyRecord().then(() => {
                alert("Deleted")
                this.transitionToRoute("guitars")
            });
        },

        isEditing() {
            this.set("isEditing", true)
        },

        updateGuitar() {
            this.get("model").save().then(() => {
                this.set("isEditing", false)
            })

        },

        cancelEdit() {
            this.get('model').rollbackAttributes();
            this.set("isEditing", false);

        },

        modalButton() {
            let modalBg = document.querySelector(".modal-bg");
            modalBg.classList.add("bg-active")

        },

        modalClose() {
            let modalBg = document.querySelector(".modal-bg");
            modalBg.classList.remove("bg-active")

        },


    }
});


