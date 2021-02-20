import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

        deleteGuitar() { 
      
        this.get('model').destroyRecord().then(()=>{
            alert("Deleted")
            this.transitionToRoute("guitars")
        });
    }
         
        
        
    }
});

         
    