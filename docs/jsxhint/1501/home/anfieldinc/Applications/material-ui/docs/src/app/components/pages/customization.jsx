var React = require('react'),
  PageWithNav = require('./page-with-nav.jsx');

var ____Classj=React.Component;for(var ____Classj____Key in ____Classj){if(____Classj.hasOwnProperty(____Classj____Key)){Customization[____Classj____Key]=____Classj[____Classj____Key];}}var ____SuperProtoOf____Classj=____Classj===null?null:____Classj.prototype;Customization.prototype=Object.create(____SuperProtoOf____Classj);Customization.prototype.constructor=Customization;Customization.__superConstructor__=____Classj;function Customization(){"use strict";if(____Classj!==null){____Classj.apply(this,arguments);}}

  Object.defineProperty(Customization.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var menuItems = [
      { route: 'themes', text: 'Themes'},
      { route: 'inline-styles', text: 'Inline Styles'},
      { route: 'colors', text: 'Colors'}
    ];

    return (
      React.createElement(PageWithNav, {menuItems: menuItems})
    );
  }});



module.exports = Customization;
