var React = require('react');
var mui = require('mui');
var SvgIcon = mui.SvgIcon;

var ActionHome = React.createClass({displayName: "ActionHome",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props), 
        React.createElement("path", {d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})
      )
    );
  }

});

module.exports = ActionHome;