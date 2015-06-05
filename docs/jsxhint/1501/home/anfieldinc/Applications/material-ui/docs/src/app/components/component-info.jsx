var React = require('react');
var mui = require('mui');

var $__0=    mui.Styles,Typography=$__0.Typography,Spacing=$__0.Spacing,Colors=$__0.Colors;
var $__1=   mui.Mixins,StyleResizable=$__1.StyleResizable,StylePropable=$__1.StylePropable;

var ComponentInfo = React.createClass({displayName: "ComponentInfo",

  mixins: [StyleResizable, StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    name: React.PropTypes.string.isRequired,
    infoArray: React.PropTypes.array.isRequired
  },

  getStyles: function() {
    var desktopGutter = Spacing.desktopGutter;
    var borderColor = this.context.muiTheme.palette.borderColor;
    var styles = {
      root: {
        //.mui-font-style-subhead-1
        fontSize: '15px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        lineHeight: '24px',
        paddingTop: '3px',
        marginBottom: '13px',
        color: Typography.textDarkBlack,
        width: '100%'
      },
      table: {
        borderCollapse: 'collapse',
        borderSpacing: '0'
      },
      td: {
        padding: '16px 0',
        verticalAlign: 'top'
      },
      name: {
        position: 'absolute',
        fontWeight: Typography.fontWeightMedium
      },
      type: {
        color: Typography.textLightBlack,
        paddingRight: desktopGutter + 'px'
      },
      header: {
        paddingTop: '0'
      },
      desc: {
        width: '100%',
        paddingTop: '48px',
        borderBottom: 'solid 1px ' + borderColor
      },
      p: {
        margin: '0'
      },
      h3: {
        //mui-font-style-title
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightMedium,
        color: Typography.textDarkBlack
      },
      nameWhenMedium: {
        position: 'inherit',
        paddingRight: desktopGutter + 'px'
      },
      descWhenMedium :{
        paddingTop: '16px'
      },
      tdWhenLarge: {
        padding: '32px 0'
      },
      nameWhenLarge: {
        minWidth: '128px'
      },
      descWhenLarge :{
        paddingTop: '32px'
      },
      descWhenLastChild: {
        borderBottom: 'none'
      }
    };

    styles.header = this.mergeStyles(styles.root, styles.header);

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      styles.name = this.mergeStyles(styles.name, styles.nameWhenMedium);
      styles.desc = this.mergeStyles(styles.desc, styles.descWhenMedium);
    } 

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.td = this.mergeStyles(styles.td, styles.tdWhenLarge);
      styles.name = this.mergeStyles(styles.name, styles.nameWhenLarge);
      styles.desc = this.mergeStyles(styles.desc, styles.descWhenLarge);
    }

    styles.name = this.mergeStyles(styles.td, styles.name);
    styles.desc = this.mergeStyles(styles.td, styles.desc);
    styles.header = this.mergeStyles(styles.p, styles.header);

    Object.keys(styles).forEach(function (currentKey) {
      styles[currentKey].boxSizing = 'border-box';
    });

    return styles;
  },

  render: function() {
    var propElements = [],
      typesSpan;

    var styles = this.getStyles();
    this.props.infoArray.forEach(function(info, i) {

      if (info.type) typesSpan = React.createElement("span", {style: styles.type}, info.type);

      if (i == this.props.infoArray.length - 1) {
        styles.desc = this.mergeStyles(styles.desc, styles.descWhenLastChild);
      }

      propElements.push(
        React.createElement("tr", {key: i}, 
          React.createElement("td", {style: styles.name}, info.name), 
          React.createElement("td", {style: styles.desc}, 
            React.createElement("p", {style: styles.header}, typesSpan, info.header), 
            React.createElement("p", {style: styles.p}, info.desc)
          )
        )
      );
    }, this);

    return (
      React.createElement("div", {style: this.mergeAndPrefix(styles.root, this.props.style)}, 
        React.createElement("h3", {style: styles.h3}, this.props.name), 
        React.createElement("table", {style: styles.table}, 
          React.createElement("tbody", null, 
            propElements
          )
        )
      )
    );
  }
});

module.exports = ComponentInfo;
