import Component from '@ember/component';

export default Component.extend({

    actions: {


        onFocusOut(){
            let input = this.$("input");
            let newValue = input.val();
            newValue = isNaN(newValue) ? "0" : newValue;
        
            if (this.get("maxValue")) {
                if (Number(newValue) > Number(this.get("maxValue"))) {
                    newValue = this.get("maxValue");
                }
            }

            if(this.get("minValue")) {
                if (Number(newValue) < Number(this.get("minValue"))) {
                    newValue = this.get("minValue");
                }
            }
            this.set("valueToShow", newValue);
        }
    }
});
