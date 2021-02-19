import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteGuitar () {
            alert("deleted a guitar")
            let destroyId = this.get('destroyId');
            let destroyGuitar = this.get('model').findById('id', destroyId)
            destroyGuitar.destroyRecord();
        },
        
        updateGuitar () {
            alert("Guitar Updated");
        }
    }
});
