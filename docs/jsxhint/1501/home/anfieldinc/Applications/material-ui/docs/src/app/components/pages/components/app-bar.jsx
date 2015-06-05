var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');

var $__0=   mui,AppBar=$__0.AppBar,DropDownMenu=$__0.DropDownMenu;

var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){AppBarPage[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;AppBarPage.prototype=Object.create(____SuperProtoOf____Class5);AppBarPage.prototype.constructor=AppBarPage;AppBarPage.__superConstructor__=____Class5;

  function AppBarPage(props) {"use strict";
    ____Class5.call(this,props);

    this.code = 
          '<AppBar title=\'Title\' iconClassNameRight="muidocs-icon-navigation-expand-more"/>';

    this.desc = 'App bars are a collection of components placed as a static ' +
                'header for an application. It is used for navigation, search ' +
                'branding, and actions. An app bar is also referred to as the ' +
                'primary toolbar or action bar for Android.';

    this.componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'iconClassNameLeft',
            type: 'string',
            header: 'optional',
            desc: 'The classname of the icon on the left of the app bar. If you ' +
                  'are using a stylesheet for your icons, enter the class name ' +
                  'for the icon to be used here.'
          },
          {
            name: 'iconClassNameRight',
            type: 'string',
            header: 'optional',
            desc: 'Similiar to the iconClassNameLeft prop except that is applies ' +
                  'to the icon displayed on the right of the app bar.'
          },
          {
            name: 'iconElementLeft',
            type: 'element',
            header: 'optional',
            desc: 'The custom element to be displayed on the left side of the ' +
                  'app bar such as an SvgIcon.'
          },
          {
            name: 'iconElementRight',
            type: 'element',
            header: 'optional',
            desc: 'Similiar to the iconElementLeft prop except that this element ' +
                  'is displayed on the right of the app bar.'
          },
          {
            name: 'iconStyleRight',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline-styles of the element displayed on the right side of the app bar.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the app bars\'s root element.'
          },
          {
            name: 'showMenuIconButton',
            type: 'boolean',
            header: 'default: true',
            desc: 'Determines whether or not to display the Menu icon next to ' +
                  'the title. Setting this prop to false will hide the icon.'
          },
          {
            name: 'title',
            type: 'string',
            header: 'optional',
            desc: 'A string of text that is displayed on the app bar.'
          },
          {
            name: 'zDepth',
            type: 'number',
            header: 'default: 1',
            desc: 'The zDepth of the app bar. The shadow of the app bar is also ' +
                  'dependent on this property.'
          }
        ] 
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onLeftIconButtonTouchTap',
            header: 'AppBar.onLeftIconButtonTouchTap(e)',
            desc: 'Callback function for when the left icon is selected via ' +
                  'a touch tap.'
          }, 
          {
            name: 'onRightIconButtonTouchTap',
            header: 'AppBar.onRightIconButtonTouchTap(e)',
            desc: 'Callback function for when the right icon is selected via ' +
                  'a touch tap.'
          }
        ]
      }
    ];
  }

  Object.defineProperty(AppBarPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement(ComponentDoc, {
        name: "AppBar", 
        code: this.code, 
        desc: this.desc, 
        componentInfo: this.componentInfo}, 
          React.createElement(AppBar, {title: "Title", iconClassNameRight: "muidocs-icon-navigation-expand-more"})
      )
    );
  }});



module.exports = AppBarPage;
