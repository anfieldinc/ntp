var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');
var extend = mui.Utils.Extend;
var Typography = mui.Styles.Typography;
var $__0=        mui,ClearFix=$__0.ClearFix,FlatButton=$__0.FlatButton,FloatingActionButton=$__0.FloatingActionButton,FontIcon=$__0.FontIcon,RaisedButton=$__0.RaisedButton,Tab=$__0.Tab,Tabs=$__0.Tabs;

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){ButtonPage[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;ButtonPage.prototype=Object.create(____SuperProtoOf____Class6);ButtonPage.prototype.constructor=ButtonPage;ButtonPage.__superConstructor__=____Class6;

  function ButtonPage(props) {"use strict";
    ____Class6.call(this,props);

    this.codeFlatButton =
      '//Flat Buttons\n' +
      '<FlatButton label="Default" />\n' +
      '<FlatButton label="Primary" primary={true} />\n' +
      '<FlatButton label="Secondary" secondary={true} />\n' +
      '<div style={styles.container}>\n' +
      '  <FlatButton primary={true} label="Choose an Image">\n' +
      '    <input type="file" id="imageButton" style={styles.exampleImageInput}></input>\n' +
      '  </FlatButton>\n' +
      '</div>\n' +
      '<div style={styles.container}>\n' +
      '  <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="GitHub">\n' +
      '    <FontIcon style={styles.exampleFlatButtonIcon} className="muidocs-icon-custom-github"/>\n' +
      '  </FlatButton>\n' +
      '</div>\n' +
      '<FlatButton label="Disabled" disabled={true} />';

    this.codeRaisedButton =
      '//Raised Buttons\n' +
      '<RaisedButton label="Default" />\n' +
      '<RaisedButton label="Primary" primary={true} />\n' +
      '<RaisedButton label="Secondary" secondary={true} />\n' +
      '<div style={styles.container}>\n' +
      '  <RaisedButton primary={true} label="Choose an Image">\n' +
      '    <input type="file" style={styles.exampleImageInput}></input>\n' +
      '  </RaisedButton>\n' +
      '</div>\n' +
      '<div style={styles.container}>\n' +
      '  <RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Github">\n' +
      '    <FontIcon style={styles.exampleButtonIcon} className="muidocs-icon-custom-github"/>\n' +
      '  </RaisedButton>\n' +
      '</div>\n' +
      '<RaisedButton label="Disabled" disabled={true} />';

    this.codeFloatingActionButton =
      '//Floating Action Buttons\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-custom-github" linkButton={true} href="https://github.com/callemall/material-ui" mini={true} secondary={true}/>' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} disabled={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" secondary={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} secondary={true} />';

    this.desc = 'This component generates a button element and all props except for ' +
                'the custom props below will be passed down to the button element. Also, ' +
                'focus styles will happen on tab but not on click.';

    this.componentInfo = [
      {
        name: 'Flat Button',
        infoArray: [
          {
            name: 'label or children',
            type: 'string (label) or HTML/React elements (children)',
            header: 'required',
            desc: 'This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed.'+
            ' Otherwise, the component will expect children which will then be displayed (in our example, we are nesting an <input type="file" />'+
            'and a span that acts as our label to be displayed.) '+
            'This only applies to flat and raised buttons.'
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s label element.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'primary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the primary button colors.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s root element.'
          },
          {
            name: 'hoverColor',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline hover color of the button\'s root element.'
          },
          {
            name: 'rippleColor',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline color of the button\'s ripple element.'
          }
        ]
      },
      {
        name: 'Raised Button',
        infoArray: [
          {
            name: 'label or children',
            type: 'string (label) or HTML/React elements (children)',
            header: 'required',
            desc: 'This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed.'+
            ' Otherwise, the component will expect children which will then be displayed (in our example, we are nesting an <input type="file" />'+
            'and a span that acts as our label to be displayed.) '+
            'This only applies to flat and raised buttons.'
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s label element.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'primary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the primary button colors.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s root element.'
          }
        ]
      },
      {
        name: 'Floating Action Button',
        infoArray: [
          {
            name: 'iconClassName',
            type: 'string',
            header: 'optional',
            desc: 'The icon within the FloatingActionButton is a FontIcon component. This property ' +
                  'is the classname of the icon to be displayed inside the button. An alternative ' +
                  'to adding an iconClassName would be to manually insert a FontIcon component or ' +
                  'custom SvgIcon component or as a child of FloatingActionButton.'
          },
          {
            name: 'iconStyle',
            type: 'object',
            header: 'optional',
            desc: 'This is the equivalent to iconClassName except that it is used for overriding ' +
                  'the inline-styles of the FontIcon component.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'mini',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will be a small floating action button.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s root element.'
          }
        ]
      }
    ];
  }

  Object.defineProperty(ButtonPage.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    var styles = {
      container: {
        textAlign: 'center',
        marginBottom: '16px'
      },
      group: {
        float: 'left',
        width: '50%'
      },
      groupFloatingAction: {
        float: 'left',
        width: '33%'
      },
      buttonLabel: {
        padding: '0px 16px 0px 8px'
      },
      exampleIconButtonLabel: {
        padding: '0px 8px'
      },
      exampleImageButton: {
        whiteSpace: 'pre',
        cursor: 'pointer',
        position: 'relative',
        textAlign: 'center',
        lineHeight: '24px',
        width: '50%',
        top: '0px',
        left: '0px',
        marginTop: '24px',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '0px 8px'
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        width: '100%',
        opacity: '0'
      },
      exampleFlatButtonIcon: {
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'middle',
        float: 'left',
        paddingLeft: '12px',
        lineHeight: '36px'
      },
      exampleButtonIcon: {
        color: Typography.textFullWhite
      },
      headline: {
        //mui-font-style-headline
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      }
    };
    styles.exampleButtonIcon = extend(styles.exampleFlatButtonIcon, styles.exampleButtonIcon);
    return styles;
  }});

  Object.defineProperty(ButtonPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    return (
      React.createElement("div", null, 
        React.createElement("h2", {style: styles.headline}, "Buttons"), 
        React.createElement(Tabs, null, 
          React.createElement(Tab, {label: "Flat Buttons"}, 
            React.createElement(ComponentDoc, {
              name: "", 
              code: this.codeFlatButton, 
              desc: this.desc, 
              componentInfo: this.componentInfo.slice(0,1)}, 
              React.createElement("div", {style: styles.group}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {label: "Default"})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {label: "Primary", primary: true})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {label: "Secondary", secondary: true})
                )
              ), 
              React.createElement("div", {style: styles.group}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {primary: true, label: "Choose an Image"}, 
                    React.createElement("input", {type: "file", id: "imageButton", style: styles.exampleImageInput})
                  )
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {linkButton: true, href: "https://github.com/callemall/material-ui", secondary: true, label: "GitHub", labelStyle: styles.buttonLabel}, 
                    React.createElement(FontIcon, {style: styles.exampleFlatButtonIcon, className: "muidocs-icon-custom-github"})
                  )
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FlatButton, {label: "Disabled", disabled: true})
                )
              )
            )
          ), 
          React.createElement(Tab, {label: "Raised Buttons"}, 
            React.createElement(ComponentDoc, {
              name: "", 
              code: this.codeFlatButton, 
              desc: this.desc, 
              componentInfo: this.componentInfo.slice(1,2)}, 
              React.createElement("div", {style: styles.group}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {label: "Default"})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {label: "Primary", primary: true})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {label: "Secondary", secondary: true})
                )
              ), 
              React.createElement("div", {style: styles.group}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {primary: true, label: "Choose an Image"}, 
                    React.createElement("input", {type: "file", style: styles.exampleImageInput})
                  )
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {linkButton: true, href: "https://github.com/callemall/material-ui", secondary: true, label: "Github", labelStyle: styles.buttonLabel}, 
                    React.createElement(FontIcon, {style: styles.exampleButtonIcon, className: "muidocs-icon-custom-github"})
                  )
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(RaisedButton, {label: "Disabled", disabled: true})
                )
              )
            )
          ), 
          React.createElement(Tab, {label: "Floating Action Buttons"}, 
            React.createElement(ComponentDoc, {
              name: "", 
              code: this.codeFlatButton, 
              desc: this.desc, 
              componentInfo: this.componentInfo.slice(2)}, 
              React.createElement("div", {style: styles.groupFloatingAction}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade"})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade", mini: true})
                )
              ), 
              React.createElement("div", {style: styles.groupFloatingAction}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade", secondary: true})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade", mini: true, secondary: true})
                )
              ), 
              React.createElement("div", {style: styles.groupFloatingAction}, 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade", disabled: true})
                ), 
                React.createElement("div", {style: styles.container}, 
                  React.createElement(FloatingActionButton, {iconClassName: "muidocs-icon-action-grade", mini: true, disabled: true})
                )
              )
            )
          )
        )
      )
    );
  }});



module.exports = ButtonPage;
