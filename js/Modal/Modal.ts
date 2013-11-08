///<reference path="../Typings/handlebars.d.ts"/>
///<reference path="../Typings/jquery.d.ts"/>
///<reference path="../Typings/bootstrap.d.ts"/>

class Modal {
    public static show(title, message, icon){
        var model = { title: title, body: message, icon: icon};
        var html = Handlebars.templates.modal(model);
        $('#popup').html(html);
        $('#modal-popup').modal();
    }
}