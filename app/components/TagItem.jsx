var React = require('react');


var TagItem = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {
        var url = 'http://blog.ik.am/#/tags/' + this.props.tagName + '/entries';
        return (
            <li>
                <a href={url}>{this.props.tagName}</a>
            </li>
        );
    }

});
module.exports = TagItem;
