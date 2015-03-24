var React = require('react');

var EntryItem = React.createClass({
    mixins: [],
    propTypes: {},
    getInitialState: function () {
        return {
            contentsVisible: 'invisible',
            buttonVisible: 'visible'
        };
    },
    handleClick: function () {
        this.setState({
            contentsVisible: 'visible',
            buttonVisible: 'invisible'
        });
    },
    render: function () {
        return (
            <article>
                <h2>{this.props.entry.title}</h2>
                <button className={this.state.buttonVisible}
                    onClick={this.handleClick}>Read this article</button>
                <div className={this.state.contentsVisible}
                    dangerouslySetInnerHTML={{__html: this.props.entry.contents}} />
            </article>
        );
    }

});
module.exports = EntryItem;
