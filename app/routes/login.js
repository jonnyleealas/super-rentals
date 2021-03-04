import Route from '@ember/routing/route';

$.ajaxSetup({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
});

export default Route.extend({

    actions: {

        submitEmail() {
            let obj = {
                email: this.get("controller.email"),
                password: this.get("controller.password"),
            };

            $.post("http://localhost:9000/login", JSON.stringify(obj)).done(() => {
                this.replaceWith("guitars");
            }).fail(e => {
                alert(e.responseJSON.errors);
            });
        },
    },

});
