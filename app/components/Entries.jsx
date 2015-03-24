var React = require('react');
var EntryItem = require('./EntryItem.jsx');
var Pager = require('react-pager');
var EntriesModel = require('../models.jsx').EntriesModel;


var Entries = React.createClass({
    mixins: [],
    propTypes: {},
    getInitialState: function () {
        return {
            content: [],
            totalPage: 10,
            number: 0
        };
    },
    componentDidMount: function () {
        EntriesModel.findAll()
            .then(function (x) {
                this.setState(x);
            }.bind(this));
    },
    handlePageChanged: function (newPage) {
        EntriesModel.findAll(newPage, this.state.size)
            .then(function (x) {
                this.setState(x);
            }.bind(this));
        window.scroll(0, 0);
    },
    render: function () {
        var param = '?page=' + this.state.number + '&size=' + this.state.size;
        console.log(param);
        var entries = this.state.content.map(function (entry) {
            return (
                <EntryItem key={entry.entryId} entry={entry}/>
            );
        });
        return (
            <div>
            {entries}
                <Pager total={this.state.totalPages}
                    current={this.state.number}
                    visiblePages={5}
                    onPageChanged={this.handlePageChanged} />
            </div>
        );
    }

});
module.exports = Entries;
