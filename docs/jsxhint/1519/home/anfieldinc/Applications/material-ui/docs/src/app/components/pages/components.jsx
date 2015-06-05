var React = require('react');
var PageWithNav = require('./page-with-nav.jsx');

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Components[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Components.prototype=Object.create(____SuperProtoOf____Class4);Components.prototype.constructor=Components;Components.__superConstructor__=____Class4;function Components(){"use strict";if(____Class4!==null){____Class4.apply(this,arguments);}}

  Object.defineProperty(Components.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var menuItems = [
      { route: 'appbar', text: 'AppBar'},
      { route: 'buttons', text: 'Buttons'},
      { route: 'date-picker', text: 'Date Picker'},
      { route: 'dialog', text: 'Dialog'},
      { route: 'dropdown-menu', text: 'Dropdown Menu'},
      { route: 'icons', text: 'Icons'},
      { route: 'icon-buttons', text: 'Icon Buttons'},
      { route: 'left-nav', text: 'Left Nav'},
      { route: 'menus', text: 'Menus'},
      { route: 'paper', text: 'Paper'},
      { route: 'progress', text: 'Progress'},
      { route: 'sliders', text: 'Sliders'},
      { route: 'switches', text: 'Switches'},
      { route: 'snackbar', text: 'Snackbar'},
      { route: 'tabs', text: 'Tabs'},
      { route: 'text-fields', text: 'Text Fields'},
      { route: 'time-picker', text: 'Time Picker'},
      { route: 'toolbars', text: 'Toolbars'},
    ];

    return (
      React.createElement(PageWithNav, {menuItems: menuItems})
    );
  }});



module.exports = Components;
