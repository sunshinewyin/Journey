window.ClientRouter = Backbone.Router.extend({

    routes: {
        '': 'home',
        'viewJourney': 'viewJourney',
        // 'viewJourney/:id': 'viewJourney'
        //'viewJourney/:id': 'viewJourney',
        'profile/:id': 'viewProfile',
        'about': 'about'
    },

    home: function() {

        // var appView = new AppView();
        // $(".mainContent").html(appView.el);
    },

    viewJourney: function(model) {

        $("#mainContent").empty();

        var journeyView = new JourneyView({
            model: model
        });
    },

    viewProfile : function(id) {
        var profileModel = new ProfileModel(id);

        this.listenTo(profileModel, 'RecievedData', function() {
            $('#mainContent').empty();
            var profileView = new ProfileView( { model : profileModel } );
        });
    },

    about: function() {
        console.log('got to about');
        $("#mainContent").empty();

        var aboutUsCollection = new AboutUsCollection(aboutUsData);
        var aboutUsCollectionView = new AboutUsCollectionView( { collection: aboutUsCollection } );

        console.log('aboutUsCollection', aboutUsCollection);
        console.log('aboutUsCollectionView', aboutUsCollectionView);
    }
});

window.clientRouter = new ClientRouter();
Backbone.history.start();
