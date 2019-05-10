function capitalize(str: String) {
    return str.replace(/(^|\s)([a-z])/g, function(p1: String, p2: String) {
        return p1 + p2.toUpperCase().toString();
    });
}

module.exports = capitalize;