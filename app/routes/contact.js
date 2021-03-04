import Route from '@ember/routing/route';

$.ajaxSetup({
    corsWithCredentials: true,
    crossDomain: true,
    xhrFields: { withCredentials: true },
});

export default Route.extend({

    beforeModel() {
        $.get("http://localhost:9000/checkSession").done(() => {
            this.replaceWith("contact");
        }).fail(() => {
            this.replaceWith("login");
        });
    },
});