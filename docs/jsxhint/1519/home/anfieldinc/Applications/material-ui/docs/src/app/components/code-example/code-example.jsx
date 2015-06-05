var React = require('react');
var mui = require('mui');
var CodeBlock = require('./code-block.jsx');

var $__0=   mui,ClearFix=$__0.ClearFix,Paper=$__0.Paper;
var $__1=    mui.Styles,Colors=$__1.Colors,Spacing=$__1.Spacing,Typography=$__1.Typography;

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){CodeExample[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;CodeExample.prototype=Object.create(____SuperProtoOf____Class2);CodeExample.prototype.constructor=CodeExample;CodeExample.__superConstructor__=____Class2;function CodeExample(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}

  Object.defineProperty(CodeExample.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    var borderColor = this.context.muiTheme.palette.borderColor;
    var canvasColor = this.context.muiTheme.palette.canvasColor;
    return {
      root: {
        backgroundColor: canvasColor,
        marginBottom: '32px'
      },
      exampleLabel: {
        color: borderColor,
        padding: '8px',
        marginBottom: '0',
        //mui-font-style-menu
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0',
        textTransform: 'uppercase',
        fontWeight: Typography.fontWeightMedium
      },
      exampleBlock: {
        borderRadius: '0 0 2px 0',
        padding: Spacing.desktopGutter,
        margin: '0'
      }
    };
  }});

  Object.defineProperty(CodeExample.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    return (
      React.createElement(mui.Paper, {style: styles.root}, 
          React.createElement("div", {style: styles.exampleLabel}, "example"), 
          React.createElement(ClearFix, {style: styles.exampleBlock}, 
            this.props.children
          ), 
          React.createElement(CodeBlock, null, this.props.code)
      )
    );
  }});


CodeExample.propTypes = {
  code: React.PropTypes.string.isRequired
};

CodeExample.contextTypes = {
  muiTheme: React.PropTypes.object
}

module.exports = CodeExample;
