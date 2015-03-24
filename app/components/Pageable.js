var Pageable = {
    changeLocation: function (page, size) {
        var idx = window.location.hash.indexOf('?');
        var currentPath = idx > 0 ? window.location.hash.substring(0, idx) : window.location.hash;
        window.location.hash = (currentPath + '?page=' + page + '&size=' + size);
    }
};

module.exports = Pageable;