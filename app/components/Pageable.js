var Pageable = {
    changeLocation: function (page, size) {
        var routes = this.context.router.getCurrentRoutes();
        var route = routes[routes.length - 1];
        this.context.router.transitionTo(route.path,
            this.context.router.getCurrentParams(),
            {
                'page': page,
                'size': size
            });
    }
};

module.exports = Pageable;