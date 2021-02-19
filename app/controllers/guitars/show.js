import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

        // deleteGuitar() { 
        //     console.log("delete guitar")
        //     let destroyId = this.store.findRecord('model', model.id) 
        //     console.log("destroyed id:::::",guitar.id)
        //     let game = this.get('model.id').findById('id', destroyId)  
        //     game.destroyRecord() 
        //   },

            deleteGuitar () {
            // alert("deleted a guitar")
            let destroyGuitar = this.get('model')
            console.log("destroyed id:::::", destroyGuitar)
            // let destroyId = this.store.findRecord('guitar', guitars.guitar_id);
            destroyGuitar.destroyRecord();
        },
        
       
        updateGuitar () {
        
            // alert("Guitar Updated");
        }
    }
});

         
    