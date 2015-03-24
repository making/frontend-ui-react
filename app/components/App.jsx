var React = require('react');
var Entries = require('./Entries.jsx');
var EntriesByCategory = require('./EntriesByCategory.jsx');
var EntriesByTag = require('./EntriesByTag.jsx');
var Tags = require('./Tags.jsx');
var Categories = require('./Categories.jsx');
var RecentPosts = require('./RecentPosts.jsx');
var Links = require('./Links.jsx');

// Router
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {

        return (
            <div>
                <h1>
                    <Link to="app">Blog</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="tags">All Tags</Link>
                    </li>
                    <li>
                        <Link to="categories">All Categories</Link>
                    </li>
                </ul>
                <RouteHandler/>
                <h3>Recent Posts</h3>
                <RecentPosts />
                <h3>Links</h3>
                <Links />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="entriesByCategory" path="categories/:category/entries" handler={EntriesByCategory}/>
        <Route name="categories" handler={Categories}/>
        <Route name="entriesByTag" path="tags/:tagName/entries" handler={EntriesByTag}/>
        <Route name="tags" handler={Tags}/>
        <DefaultRoute handler={Entries}/>
    </Route>
);

App.routes = routes; // to export

module.exports = App;
