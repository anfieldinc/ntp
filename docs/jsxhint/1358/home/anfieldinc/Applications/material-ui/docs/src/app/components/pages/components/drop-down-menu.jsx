var React = require('react');
var mui = require('mui');
var DropDownMenu = mui.DropDownMenu;
var ComponentDoc = require('../../component-doc.jsx');

var ____Class9=React.Component;for(var ____Class9____Key in ____Class9){if(____Class9.hasOwnProperty(____Class9____Key)){DropDownMenuPage[____Class9____Key]=____Class9[____Class9____Key];}}var ____SuperProtoOf____Class9=____Class9===null?null:____Class9.prototype;DropDownMenuPage.prototype=Object.create(____SuperProtoOf____Class9);DropDownMenuPage.prototype.constructor=DropDownMenuPage;DropDownMenuPage.__superConstructor__=____Class9;function DropDownMenuPage(){"use strict";if(____Class9!==null){____Class9.apply(this,arguments);}}

  Object.defineProperty(DropDownMenuPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    var menuItems = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' },
      { payload: '3', text: 'Weeknights' },
      { payload: '4', text: 'Weekends' },
      { payload: '5', text: 'Weekly' },
    ];

    var code =
      "var menuItems = [\n" +
      "   { payload: '1', text: 'Never' },\n" +
      "   { payload: '2', text: 'Every Night' },\n" +
      "   { payload: '3', text: 'Weeknights' },\n" +
      "   { payload: '4', text: 'Weekends' },\n" +
      "   { payload: '5', text: 'Weekly' },\n" +
      "];\n\n" +
      "<DropDownMenu menuItems={menuItems} />";

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'autoWidth',
            type: 'bool',
            header: 'default: true',
            desc: 'The width will automatically be set according to the items ' +
              'inside the menu. To control this width in Css instead, set this ' +
              'prop to false.'
          },
          {
            name: 'menuItems',
            type: 'array',
            header: 'required',
            desc: 'JSON data representing all menu items in the dropdown.'
          },
          {
            name: 'menuItemStyle',
            type: 'array',
            header: 'required',
            desc: 'Overrides the inline-styles of the MenuItems when the ' + 
                  'DropDownMenu is expanded.'
          },
          {
            name: 'selectedIndex',
            type: 'number',
            header: 'default: 0',
            desc: 'Index of the item selected.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of DropDownMenu\'s root element.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onChange',
            header: 'function(e, selectedIndex, menuItem)',
            desc: 'Fired when a menu item is clicked that is not the one currently ' +
              'selected.'
          }
        ]
      }
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Drop Down Menu", 
        code: code, 
        componentInfo: componentInfo}, 

        React.createElement(DropDownMenu, {menuItems: menuItems})

      )
    );
  }});



module.exports = DropDownMenuPage;
