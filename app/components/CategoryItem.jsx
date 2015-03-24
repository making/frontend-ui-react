var React = require('react');


var CategoryItem = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {
        var separator = '::';
        var ret = [], buf = [];
        this.props.categoryName.forEach(function (c) {
            buf.push(c);
            ret.push('<a href="#/categories/' + buf.join(separator) + '/entries">' + c + '</a>');
        });
        return (
            <li dangerouslySetInnerHTML={{__html: ret.join(separator)}}></li>
        );
    }
});
module.exports = CategoryItem;
