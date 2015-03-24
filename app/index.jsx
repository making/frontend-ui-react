var React = require('react');
var App = require('./components/App.jsx');
var Router = require('react-router');

//React.render(
//    <App />,
//    document.getElementById('example')
//);

Router.run(App.routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('example'));
});
