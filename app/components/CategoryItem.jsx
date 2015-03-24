var React = require('react');


var CategoryItem = React.createClass({
    mixins: [],
    propTypes: {},
    render: function () {
        var name = this.props.categoryName.join('::');
        return (
            <li>
                <a>{name}</a>
            </li>
        );
    }
});
module.exports = CategoryItem;
