   
    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a> La persona " + model.firstName+"  "+model.lastName +"  nació el "+model.birthdate+"y se ha registrado en nuestro sistema. </div>";;
         }, 
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });