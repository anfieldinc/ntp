var React = require('react');
var mui = require('mui');
var Classable = mui.Mixins.Classable;
var CodeExample = require('./code-example/code-example.jsx');
var ComponentInfo = require('./component-info.jsx');
var Typography = mui.Styles.Typography;
var StylePropable = mui.Mixins.StylePropable;
var ClearFix = mui.ClearFix;

var ComponentDoc = React.createClass({displayName: "ComponentDoc",

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    code: React.PropTypes.string.isRequired,
    desc: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ]),
    name: React.PropTypes.string.isRequired,
    componentInfo: React.PropTypes.array.isRequired
  },

  getStyles: function() {
    var borderColor = this.context.muiTheme.palette.borderColor;
    return {
      desc: {
        borderBottom: 'solid 1px ' + borderColor,
        paddingTop: '8px',
        paddingBottom: '40px',
        marginBottom: '24px',
        //mui-font-style-subhead-1
        fontSize: '15px',
        letterSpacing: '0',
        lineHeight: '24px',
        color: Typography.textDarkBlack
      },
      ol: {
        fontSize: '13px',
        paddingLeft: '48px'
      },
      componentInfo: {
        borderTop: 'solid 1px ' + borderColor,
        paddingTop: '24px',
        marginTop: '24px'
      },
      componentInfoWhenFirstChild: {
        borderTop: 'none',
        marginTop: '0',
        paddingTop: '0'
      },
      headline: {
        //headline
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      }
    };
  },

  render: function() {
    var styles = this.getStyles();

    var componentInfo = this.props.componentInfo.map(function(info, i) {
      var infoStyle = styles.componentInfo;
      if (i === 0) infoStyle = this.mergeStyles(infoStyle, styles.componentInfoWhenFirstChild);
      return (
        React.createElement(ComponentInfo, {
          key: i, 
          name: info.name, 
          style: infoStyle, 
          infoArray: info.infoArray})
      );
    }, this);

    var desc = null;

    if (this.props.desc) {
      if ((typeof this.props.desc) == "string") {
        desc = React.createElement("p", {style: styles.desc}, this.props.desc)
      } else {
        desc = React.createElement("div", {style: styles.desc}, this.props.desc)
      }
    }

    var header;
    if (this.props.name.length > 0) {
      header = React.createElement("h2", {style: styles.headline}, this.props.name)
    }

    return (
      React.createElement(ClearFix, null, 
        
        header, 

        React.createElement(CodeExample, {code: this.props.code}, 
          this.props.children
        ), 

        desc, 

        React.createElement("div", null, 
          componentInfo
        )

      )
    );
  }

});

module.exports = ComponentDoc;
