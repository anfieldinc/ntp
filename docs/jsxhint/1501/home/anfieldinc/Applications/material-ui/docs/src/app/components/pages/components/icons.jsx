var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');
var ActionHome = require('../../svg-icons/action-home.jsx');

var Typography = mui.Styles.Typography;
var $__0=   mui,ClearFix=$__0.ClearFix,FontIcon=$__0.FontIcon;

var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){FontIconPage[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;FontIconPage.prototype=Object.create(____SuperProtoOf____Classb);FontIconPage.prototype.constructor=FontIconPage;FontIconPage.__superConstructor__=____Classb;function FontIconPage(){"use strict";if(____Classb!==null){____Classb.apply(this,arguments);}}

  Object.defineProperty(FontIconPage.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      //mui-font-style-subhead-2
      fontSize: '15px',
      letterSpacing: '0',
      fontWeight: Typography.fontWeightNormal,
      color: Typography.textDarkBlack,
      lineHeight: '24px',
      paddingTop: '3px',
      marginBottom: '13px'
    };
  }});

	Object.defineProperty(FontIconPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var fontIconCode =
      '<FontIcon className="muidocs-icon-action-home"/>';

    var svgIconCode =
      '/** action-home.jsx */\n' +
      'var React = require(\'react\');\n' +
      'var mui = require(\'mui\');\n' +
      'var SvgIcon = mui.SvgIcon;\n\n' +
      'var ActionHome = React.createClass({\n' +
      '  render: function() {\n' +
      '    return (\n' +
      '      <SvgIcon {...this.props}>\n' +
      '        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>\n' +
      '      </SvgIcon>\n' +
      '    );\n' +
      '  }\n' +
      '});\n\n' +
      'module.exports = ActionHome;\n\n\n' +
      '/** Some other component. */\n' +
      'var ActionHome = require(\'./path/to/action-home.jsx\');\n' +
      '...\n' +
      '<ActionHome/>\n' +
      '...';

    var fontIconDesc = (
      React.createElement("p", {style: this.getStyles()}, 
        "This component will render any icon defined in any style sheets included in your" + ' ' +
        "project. We are using ", React.createElement("a", {title: "Google's Material Design Icons GitHub", 
        href: "https://github.com/google/material-design-icons"}, "Google's Material Design" + ' ' +
        "Icons"), " for our documentation site along with some custom icons. You can use" + ' ' +
        "sites like ", React.createElement("a", {title: "Icomoon website", href: "https://icomoon.io/"}, "IcoMoon"), " for" + ' ' +
        "generating custom font files. To use FontIcons, add your stylesheet to your project" + ' ' +
        "and reference the icon's className in the \"className\" prop."
      )
    );

    var svgIconDesc = (
      React.createElement("p", {style: this.getStyles()}, 
        "Alternatively, it is possible to include svg icons using mui.SvgIcon to" + ' ' +
        "create a custom svg component. Here we are creating the ActionHome" + ' ' +
        "SvgIcon for this docs site, and using it in some seperate component." + ' ' +
        "Custom SvgIcon components can be included as children for other Material" + ' ' +
        "UI components that use icons such as ", React.createElement("a", {title: "Example of SvgIcon usage", 
        href: "#/components/icon-buttons"}, "IconButtons"), "."
      )
    );

    var componentInfo = [
      {
        name: 'Properties',
        infoArray: [
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'If you are using a stylesheet for your icons, enter the ' +
                  'class name for the icon to be used here.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the icon\'s root element.'
          },
          {
            name: 'hoverColor',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline hover color of the icons\'s root element.'
          }
        ]
      },
      {
        name: 'Properties',
        infoArray: [],
      }
    ];

    return (
      React.createElement("div", null, 
        React.createElement(ComponentDoc, {
          name: "Font Icons", 
          code: fontIconCode, 
          desc: fontIconDesc, 
          componentInfo: componentInfo.slice(0,1)}, 
            React.createElement(FontIcon, {className: "muidocs-icon-action-home"})
        ), 
        React.createElement(ComponentDoc, {
          name: "SVG Icons", 
          code: svgIconCode, 
          desc: svgIconDesc, 
          componentInfo: componentInfo.slice(1,2)}, 
            React.createElement(ActionHome, null)
        )
      )
		);
	}});



module.exports = FontIconPage;
