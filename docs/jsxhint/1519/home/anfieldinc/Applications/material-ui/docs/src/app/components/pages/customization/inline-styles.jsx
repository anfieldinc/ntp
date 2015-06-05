var React = require('react');
var mui = require('mui');
var CodeBlock = require('../../code-example/code-block.jsx');
var CodeExample = require('../../code-example/code-example.jsx');
var Checkbox = mui.Checkbox;
var Typography = mui.Styles.Typography;

var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){InlineStyles[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;InlineStyles.prototype=Object.create(____SuperProtoOf____Classk);InlineStyles.prototype.constructor=InlineStyles;InlineStyles.__superConstructor__=____Classk;function InlineStyles(){"use strict";if(____Classk!==null){____Classk.apply(this,arguments);}}

  Object.defineProperty(InlineStyles.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightMedium,
        color: Typography.textDarkBlack
      }
    }
  }});

	Object.defineProperty(InlineStyles.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var codeOverrideStyles = 
      '<Checkbox\n' +
      '  id="checkboxId1"\n' +
      '  name="checkboxName1"\n' +
      '  value="checkboxValue1"\n' +
      '  label="went for a run today"\n' +
      '  style={{\n' +
      '    width: \'50%\',\n' +
      '    margin: \'0 auto\'\n' +
      '  }}\n' +
      '  iconStyle={{\n' +
      '    fill: \'#FF4081\'\n' +
      '  }}/>';
    var codeMixStyles = 
      '<Checkbox\n' +
      '  id="checkboxId1"\n' +
      '  name="checkboxName1"\n' +
      '  value="checkboxValue1"\n' +
      '  label="went for a run today"\n' +
      '  className="muidocs-checkbox-example"\n' +
      '  iconStyle={{\n' +
      '    fill: \'#FF9800\'\n' +
      '  }}/>\n\n' + 
      '/* In our CSS file */\n' +
      '.muidocs-checkbox-example { \n' +
      '  border: 2px solid #0000FF;\n' +
      '  background-color: #FF9800;\n' +
      '}';

      var styles = this.getStyles();

		return (
      React.createElement("div", null, 
        React.createElement("h2", {style: styles.headline}, "Inline Styles"), 
        React.createElement("p", null, 
          "All Material-UI components have their styles defined inline. You" + ' ' + 
          "can read our ", React.createElement("a", {href: "https://github.com/callemall/material-ui/issues/30"}, 
          "discussion thread"), " regarding this change as well as ", React.createElement("a", {href: "https://speakerdeck.com/vjeux/react-css-in-js"}, 
          "this presentation"), " discussing CSS in JS."
        ), 

        React.createElement("h3", {style: styles.title}, "Overriding Inline Styles"), 
        React.createElement(CodeExample, {code: codeOverrideStyles}, 
          React.createElement(Checkbox, {
            id: "checkboxId1", 
            name: "checkboxName1", 
            value: "checkboxValue1", 
            label: "Checked the mail", 
            style: {
              width: '50%',
              margin: '0 auto'
            }, 
            iconStyle: {
              fill: '#FF4081'
            }})
        ), 
        React.createElement("p", null, 
          "If you would like to override a style property that has been defined" + ' ' + 
          "inline, define your override via the style prop as demonstrated in" + ' ' + 
          "the example above. The style prop is an object that applies its" + ' ' + 
          "properties to the ", React.createElement("b", null, "root/outermost element"), " of the component. Some" + ' ' + 
          "components provide additional style properties for greater styling" + ' ' + 
          "control. If you need to override the inline styles of an element" + ' ' + 
          "nested deep within a component and there is not a style property" + ' ' + 
          "available to do so, please ", React.createElement("a", {href: "https://github.com/callemall/material-ui/issues"}, 
          "submit an issue"), " requesting to have one added."
        ), 

        React.createElement("h3", {style: styles.title}, "Mixing Inline and CSS Styles"), 
        React.createElement(CodeExample, {code: codeMixStyles}, 
          React.createElement(Checkbox, {
            id: "checkboxId1", 
            name: "checkboxName1", 
            value: "checkboxValue1", 
            label: "Currently a UTD student", 
            className: "muidocs-checkbox-example", 
            iconStyle: {
              fill: '#FF9800'
            }})
        ), 
        React.createElement("p", null, 
          "If you would like to add additional styling via CSS, pass in the" + ' ' + 
          "class name via the className prop. The className prop is similiar to" + ' ' + 
          "the style prop in that it only applies to the root element. Note that" + ' ' + 
          "CSS properties defined inline are given priority over those defined" + ' ' + 
          "in a CSS class. Take a look at a component's ", React.createElement("code", null, "getStyles"
          ), " function to see what properties are defined inline."
        )


      )
		);
	}});



module.exports = InlineStyles;
