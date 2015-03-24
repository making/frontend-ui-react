var React = require('react');
var Link = require('react-router').Link;

var CategoryItem = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {
        var separator = '::';
        var ret = [], buf = [];
        this.props.categoryName.forEach(function (c) {
            buf.push(c);
            ret.push(<Link to="entriesByCategory" params={{category: buf.join(separator)}}>{c}</Link>);
            ret.push(separator);
        });
        ret.pop();
        return (
            <li>{ret}</li>
        );
    }
});
module.exports = CategoryItem;
