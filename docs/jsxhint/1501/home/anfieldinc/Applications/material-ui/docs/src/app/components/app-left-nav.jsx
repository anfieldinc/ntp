var React = require('react');
var Router = require('react-router');
var mui = require('mui');
var $__0=   mui,MenuItem=$__0.MenuItem,LeftNav=$__0.LeftNav;
var $__1=    mui.Styles,Colors=$__1.Colors,Spacing=$__1.Spacing,Typography=$__1.Typography;

var menuItems = [
    { route: 'get-started', text: 'Get Started' },
    { route: 'customization', text: 'Customization' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    { type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    { type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
  ];

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){AppLeftNav[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;AppLeftNav.prototype=Object.create(____SuperProtoOf____Class0);AppLeftNav.prototype.constructor=AppLeftNav;AppLeftNav.__superConstructor__=____Class0;

  function AppLeftNav() {"use strict";
    ____Class0.call(this);
    this.toggle = this.toggle.bind(this);
    this.$AppLeftNav_getSelectedIndex = this.$AppLeftNav_getSelectedIndex.bind(this);
    this.$AppLeftNav_onLeftNavChange = this.$AppLeftNav_onLeftNavChange.bind(this);
    this.$AppLeftNav_onHeaderClick = this.$AppLeftNav_onHeaderClick.bind(this);
  }

  Object.defineProperty(AppLeftNav.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }});

  Object.defineProperty(AppLeftNav.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var header = (
      React.createElement("div", {style: this.getStyles(), onClick: this.$AppLeftNav_onHeaderClick}, 
        "material ui"
      )
    );

    return (
      React.createElement(LeftNav, {
        ref: "leftNav", 
        docked: false, 
        isInitiallyOpen: false, 
        header: header, 
        menuItems: menuItems, 
        selectedIndex: this.$AppLeftNav_getSelectedIndex(), 
        onChange: this.$AppLeftNav_onLeftNavChange})
    );
  }});

  Object.defineProperty(AppLeftNav.prototype,"toggle",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.leftNav.toggle();
  }});

  Object.defineProperty(AppLeftNav.prototype,"$AppLeftNav_getSelectedIndex",{writable:true,configurable:true,value:function() {"use strict";
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }});

  Object.defineProperty(AppLeftNav.prototype,"$AppLeftNav_onLeftNavChange",{writable:true,configurable:true,value:function(e, key, payload) {"use strict";
    this.context.router.transitionTo(payload.route);
  }});

  Object.defineProperty(AppLeftNav.prototype,"$AppLeftNav_onHeaderClick",{writable:true,configurable:true,value:function() {"use strict";
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }});



AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;
