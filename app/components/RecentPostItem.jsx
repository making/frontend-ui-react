var React = require('react');


var RecentPostItem = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {
        var styles = {};

        return (
            <li>
                <a href={this.props.entry.entryId}>{this.props.entry.title}</a>
            </li>
        );
    }

});
module.exports = RecentPostItem;
