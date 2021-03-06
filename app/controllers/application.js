import Controller from '@ember/controller';

export default Controller.extend({
    
    actions: {

        handleLogout() {
            this.set("loginButton", false);
            $.get("http://localhost:9000/logout").done(() => {
                this.transitionToRoute("login");
            });
        },
    },
});
