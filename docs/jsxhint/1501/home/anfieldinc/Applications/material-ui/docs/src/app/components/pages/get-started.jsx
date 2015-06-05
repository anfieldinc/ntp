var React = require('react');
var mui = require('mui');
var CodeBlock = require('../code-example/code-block.jsx');
var FullWidthSection = require('../full-width-section.jsx');
var $__0=   mui.Styles,Spacing=$__0.Spacing,Typography=$__0.Typography;

var ____Classl=React.Component;for(var ____Classl____Key in ____Classl){if(____Classl.hasOwnProperty(____Classl____Key)){GetStarted[____Classl____Key]=____Classl[____Classl____Key];}}var ____SuperProtoOf____Classl=____Classl===null?null:____Classl.prototype;GetStarted.prototype=Object.create(____SuperProtoOf____Classl);GetStarted.prototype.constructor=GetStarted;GetStarted.__superConstructor__=____Classl;function GetStarted(){"use strict";if(____Classl!==null){____Classl.apply(this,arguments);}}

  Object.defineProperty(GetStarted.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      root: {
        paddingTop: Spacing.desktopKeylineIncrement
      },
      fullWidthSection: {
        maxWidth: '650px',
        margin: '0 auto'      
      },
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
        color: '#f00'//Typography.textDarkBlack
      },
      codeExample: {
        backgroundColor: this.context.muiTheme.palette.canvasColor,
        marginBottom: '32px'
      }
    };
  }});

  Object.defineProperty(GetStarted.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var usageCode =
          '/** MyAwesomeReactComponent.jsx */\n\n' +
          'var React = require(\'react\'),\n' +
          '  mui = require(\'material-ui\'),\n' +
          '  RaisedButton = mui.RaisedButton;\n\n' +
          'var SomeAwesomeComponent = React.createClass({\n\n' +
          '  render: function() {\n' +
          '    return (\n' +
          '        <RaisedButton label="Default" />\n' +
          '    );\n' +
          '  }\n\n' +
          '});\n\n' +
          'module.exports = MyAwesomeReactComponent;\n\n\n',

      customizationCode =
        '@import "node_modules/material-ui/src/less/scaffolding.less";\n\n' +
        '//Define a custom less file to override\n//any variables defined in scaffolding.less\n' +
        '@import "my-custom-overrides.less";\n\n' +
        '@import "node_modules/material-ui/src/less/components.less";',

      usageNotesCode =
        'var injectTapEventPlugin = require("react-tap-event-plugin");\n\n' +
        '//Needed for onTouchTap\n' +
        '//Can go away when react 1.0 release\n' +
        '//Check this repo:\n' +
        '//https://github.com/zilverline/react-tap-event-plugin\n' +
        'injectTapEventPlugin();\n';

    var styles = this.getStyles();

    return (
      React.createElement("div", {style: styles.root}, 
        React.createElement(FullWidthSection, {style: styles.FullWidthSection}, 

          React.createElement("h2", {style: styles.headline}, "Prerequisites"), 
          React.createElement("p", null, 
            "We recommend that you get started with the ", React.createElement("a", {href: "http://facebook.github.io/react/"}, "React Library"), " before diving into" + ' ' +
            "material-ui for a better understanding. Should you choose to skip this, don't worry, we'll explain relevant React concepts as" + ' ' +
            "they come along."
          ), 


          React.createElement("h2", {style: styles.headline}, "Installation"), 
          React.createElement("p", null, 
            "Material-UI is available as an ", React.createElement("a", {href: "https://www.npmjs.org/package/material-ui"}, "npm package"), "." + ' ' +
            "Use ", React.createElement("a", {href: "http://browserify.org/"}, "browserify"), " and ", React.createElement("a", {href: "https://github.com/andreypopp/reactify"}, "reactify"), " for" + ' ' +
            "dependency management and JSX transformation." 
          ), 

          React.createElement("h3", {style: styles.title}, "React-Tap-Event-Plugin"), 
          React.createElement("p", null, 
            "Some components use ", React.createElement("a", {href: "https://github.com/zilverline/react-tap-event-plugin"}, "react-tap-event-plugin"), " to" + ' ' +
            "listen for touch events. This dependency is temporary and will go away once react v1.0 is released. Until then, be" + ' ' +
            "sure to inject this plugin at the start of your app."
          ), 
          React.createElement(mui.Paper, {style: styles.codeExample}, 
            React.createElement(CodeBlock, null, usageNotesCode)
          ), 

          React.createElement("h3", {style: styles.title}, "Roboto Font"), 
          React.createElement("p", null, 
            "Be sure to include the ", React.createElement("a", {href: "http://www.google.com/fonts/specimen/Roboto"}, "Roboto"), " font" + ' ' +
            "in your project. Here are ", React.createElement("a", {href: "http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500"}, "some instructions"), " on how to include it in your project."
          ), 

          React.createElement("h2", {style: styles.headline}, "Usage"), 
          React.createElement("p", null, 
            "Once material-ui is included in your project, you can use the components this way:"
          ), 
          React.createElement(mui.Paper, {style: styles.codeExample}, 
            React.createElement(CodeBlock, null, usageCode)
          ), 

          React.createElement("h2", {style: styles.headline}, "Customization"), 
          React.createElement("p", null, "Material-UI components have their styles defined inline. There are two approaches to overriding these styles:"), 
          React.createElement("li", null, React.createElement("a", {href: "#/customization/inline-styles"}, "Override individual component styles via the style prop")), 
          React.createElement("li", null, React.createElement("a", {href: "#/customization/themes"}, "Define a Theme to apply overarching style changes")), 
          React.createElement("p", null, 
            "This allows you to override any variables used without having to modify material-ui source files directly."
          ), 

          React.createElement("h2", {style: styles.headline}, "Examples"), 
          React.createElement("p", null, 
            "There are 2 projects that you can look at to help you get started. The first project can be found" + ' ' +
            "in the ", React.createElement("a", {href: "https://github.com/callemall/material-ui/tree/master/example"}, "example folder"), ". This" + ' ' +
            "is a basic project that shows how you can consume material-ui components in your own project."
          ), 
          React.createElement("p", null, 
            "The second project is this documentation site. This is a more complex project but will give" + ' ' +
            "examples of every component. Check out the ", React.createElement("a", {href: "https://github.com/callemall/material-ui/tree/master/docs"}, "docs folder"), " for" + ' ' +
            "build instructions."
          )

        )
      )
    );
  }});



GetStarted.contextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = GetStarted;
