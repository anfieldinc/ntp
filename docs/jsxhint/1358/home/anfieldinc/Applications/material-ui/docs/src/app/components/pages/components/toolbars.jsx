var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');

var $__0=         mui,DropDownIcon=$__0.DropDownIcon,DropDownMenu=$__0.DropDownMenu,FontIcon=$__0.FontIcon,RaisedButton=$__0.RaisedButton,Toolbar=$__0.Toolbar,ToolbarGroup=$__0.ToolbarGroup,ToolbarSeparator=$__0.ToolbarSeparator,ToolbarTitle=$__0.ToolbarTitle;

var ____Classi=React.Component;for(var ____Classi____Key in ____Classi){if(____Classi.hasOwnProperty(____Classi____Key)){ToolbarPage[____Classi____Key]=____Classi[____Classi____Key];}}var ____SuperProtoOf____Classi=____Classi===null?null:____Classi.prototype;ToolbarPage.prototype=Object.create(____SuperProtoOf____Classi);ToolbarPage.prototype.constructor=ToolbarPage;ToolbarPage.__superConstructor__=____Classi;function ToolbarPage(){"use strict";if(____Classi!==null){____Classi.apply(this,arguments);}}

  Object.defineProperty(ToolbarPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    var code =
      'var filterOptions = [\n' +
      '  { payload: \'1\', text: \'All Broadcasts\' },\n' +
      '  { payload: \'2\', text: \'All Voice\' },\n' +
      '  { payload: \'3\', text: \'All Text\' },\n' +
      '  { payload: \'4\', text: \'Complete Voice\' },\n' +
      '  { payload: \'5\', text: \'Complete Text\' },\n' +
      '  { payload: \'6\', text: \'Active Voice\' },\n' +
      '  { payload: \'7\', text: \'Active Text\' },\n' +
      '];\n' +
      'var iconMenuItems = [\n' +
      '  { payload: \'1\', text: \'Download\' },\n' +
      '  { payload: \'2\', text: \'More Info\' }\n' +
      '];\n\n' +
      '<Toolbar>\n' +
      '  <ToolbarGroup key={0} float="left">\n' +
      '    <DropDownMenu menuItems={filterOptions} />\n' +
      '  </ToolbarGroup>\n' +
      '  <ToolbarGroup key={1} float="right">\n' +
      '    <ToolbarTitle text="Options" />\n' +
      '    <FontIcon className="mui-icon-sort" />\n' +
      '    <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />\n' +
      '    <ToolbarSeparator/>\n' +
      '    <RaisedButton label="Create Broadcast" primary={true} />\n' +
      '  </ToolbarGroup>\n' +
      '</Toolbar>';

    var desc = 'Toolbars are collections of components stacked horizontally ' +
               'against each other. Toolbars provide greater versatility than ' +
               'appBars. AppBars are a subset of toolbars. The following ' + 
               'toolbar components can help organize your layout. Note that ' +
               'every component listed here (including Toolbar) have a style ' +
               'prop which overrides the inline-styles of their root element.'

    var componentInfo = [
      {
        name: 'ToolbarGroup',
          infoArray: [
            {
              name: 'Description',
              desc: 'Toolbar Group contains a collection of components for you. ' +
                    'It is recommended that all components in a Toolbar are ' +
                    'contained within a ToolbarGroup.'
            },
            {
              name: 'float',
              type: 'string',
              header: 'optional',
              desc: 'Optional pull "left" or "right"'
            }
          ]
      },
      {
        name: 'ToolbarSeparator',
          infoArray: [
            {
              name: 'Description',
              desc: 'A vertical bar used to separate groups of components. It ' +
                    'is used to easily organize components.'
            }
          ]
      },
      {
        name: 'ToolbarTitle',
          infoArray: [
            {
              name: 'Description',
              desc: 'Simply a string of text that is displayed in the Toolbar.'
            },
            {
              name: 'text',
              type: 'string',
              header: 'optional',
              desc: 'The text to be displayed for the element.'
            }
          ]
      },
    ];

    var filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
    ];
    var iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Toolbars", 
        code: code, 
        desc: desc, 
        componentInfo: componentInfo}, 

        React.createElement(Toolbar, null, 
          React.createElement(ToolbarGroup, {key: 0, float: "left"}, 
            React.createElement(DropDownMenu, {menuItems: filterOptions})
          ), 
          React.createElement(ToolbarGroup, {key: 1, float: "right"}, 
            React.createElement(ToolbarTitle, {text: "Options"}), 
            React.createElement(FontIcon, {className: "muidocs-icon-custom-sort"}), 
            React.createElement(DropDownIcon, {iconClassName: "muidocs-icon-navigation-expand-more", menuItems: iconMenuItems}), 
            React.createElement(ToolbarSeparator, null), 
            React.createElement(RaisedButton, {label: "Create Broadcast", primary: true})
          )
        )

      )
    );
  }});



module.exports = ToolbarPage;
