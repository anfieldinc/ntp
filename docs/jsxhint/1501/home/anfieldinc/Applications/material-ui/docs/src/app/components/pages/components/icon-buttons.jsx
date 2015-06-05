var React = require('react');
var mui = require('mui');
var IconButton = mui.IconButton;
var NavigationMenu = mui.Icons.NavigationMenu;
var ComponentDoc = require('../../component-doc.jsx');
var ActionGrade = require('../../svg-icons/action-grade.jsx');
var ActionHome = require('../../svg-icons/action-home.jsx');
var FontIcon = mui.FontIcon;

var ____Classa=React.Component;for(var ____Classa____Key in ____Classa){if(____Classa.hasOwnProperty(____Classa____Key)){IconButtonsPage[____Classa____Key]=____Classa[____Classa____Key];}}var ____SuperProtoOf____Classa=____Classa===null?null:____Classa.prototype;IconButtonsPage.prototype=Object.create(____SuperProtoOf____Classa);IconButtonsPage.prototype.constructor=IconButtonsPage;IconButtonsPage.__superConstructor__=____Classa;function IconButtonsPage(){"use strict";if(____Classa!==null){____Classa.apply(this,arguments);}}

  Object.defineProperty(IconButtonsPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    var code =
        '//Method 1: muidocs-icon-github is defined in a style sheet.\n' +
        '<IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>\n\n' +
        '//Method 2: ActionGrade is a component created using mui.SvgIcon.\n' +
        '<IconButton tooltip="Star" touch={true}>\n' +
        '  <ActionGrade/>\n' +
        '</IconButton>\n\n' +
        '//Method 3: Manually creating a mui.FontIcon component within ' +
        'IconButton\n' +
        '<IconButton tooltip="Sort" disabled={true}>\n' +
        '  <FontIcon className="muidocs-icon-custom-sort"/>\n' +
        '</IconButton>';

    var desc = (
      React.createElement("p", null, 
        "This component generates a button element and all props." + ' ' +
        "Also, focus styles will happen on tab but not on click." + ' ' +
        "There are three ways to add an icon:", 
        React.createElement("br", null), 
        React.createElement("ol", null, 
          React.createElement("li", null, 
            "For stylesheets: Set the prop \"iconClassName\" to the" + ' ' +
            "classname for you icon."
          ), 
          React.createElement("li", null, 
            "For svg icons: Insert the svg component as a child of icon" + ' ' +
            "buttons. This is the method we are using. ", React.createElement("a", {title: "Source" + ' ' +
            "code for ActionGrade", href: "https://github.com/mmrtnz/material-ui/blob/font-icon-components/docs/src/app/components/svg-icons/action-grade.jsx"}, 
            "View our source"), " to see how ActionGrade was created" + ' ' +
            "using mui.SvgIcon."
          ), 
          React.createElement("li", null, 
            "Alternative: You can also insert a ", React.createElement("a", {title: "Redirect to" + ' ' +
            "Material UI's FontIcon component", href: "#/components/icons"}, 
            "FontIcon"), " component as a child of IconButton. This is" + ' ' +
            "similiar to how the iconClassName prop from method 1 is" + ' ' +
            "handled."
          )
        )
      )
    );

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'iconClassName',
            type: 'string',
            header: 'optional',
            desc: 'If you are using a stylesheet for your icons, enter the ' +
                  'class name for the icon to be used here.'
          },
          {
            name: 'iconStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the icon element.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s root element.'
          },
          {
            name: 'tooltip',
            type: 'string',
            header: 'optional',
            desc: 'The tooltip text to show.'
          },
          {
            name: 'touch',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, this component will render the touch sized tooltip.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onBlur',
            header: 'IconButton.onBlur(e)',
            desc: 'Callback function for when the component loses focus.'
          },
          {
            name: 'onFocus',
            header: 'IconButton.onFocus(e)',
            desc: 'Callback function for when the component gains focus.'
          }
        ]
      }
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Icon Buttons", 
        code: code, 
        desc: desc, 
        componentInfo: componentInfo}, 

        React.createElement(IconButton, {iconClassName: "muidocs-icon-custom-github", tooltip: "GitHub"}), 

      React.createElement(IconButton, {tooltip: "Star", touch: true}, 
          React.createElement(ActionGrade, null)
        ), 

        React.createElement(IconButton, {tooltip: "Sort", disabled: true}, 
          React.createElement(FontIcon, {className: "muidocs-icon-custom-sort"})
        )

      )
    );

  }});



module.exports = IconButtonsPage;
