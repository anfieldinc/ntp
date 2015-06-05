var React = require('react');
var mui = require('mui');
var RaisedButton = mui.RaisedButton;
var Snackbar = mui.Snackbar;
var ComponentDoc = require('../../component-doc.jsx');

var ____Classf=React.Component;for(var ____Classf____Key in ____Classf){if(____Classf.hasOwnProperty(____Classf____Key)){SnackbarPage[____Classf____Key]=____Classf[____Classf____Key];}}var ____SuperProtoOf____Classf=____Classf===null?null:____Classf.prototype;SnackbarPage.prototype=Object.create(____SuperProtoOf____Classf);SnackbarPage.prototype.constructor=SnackbarPage;SnackbarPage.__superConstructor__=____Classf;

  function SnackbarPage() {"use strict";
    ____Classf.call(this);
    this.$SnackbarPage_handleClick = this.$SnackbarPage_handleClick.bind(this);
  }

  Object.defineProperty(SnackbarPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var code =
      '<Snackbar\n' +
      '  message="Event added to your calendar"\n' +
      '  action="undo"\n' +
      '  onActionTouchTap={this._handleAction}/>\n\n' +
      '//Somewhere in our code\n' +
      '_handleAction: function() {\n' +
      '  //We can add more code to this function, but for now we\'ll just include an alert.\n' +
      '  alert("We removed the event from your calendar.");\n' +
      '}';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'action',
            type: 'string',
            header: 'optional',
            desc: 'The name of the action on the snackbar.'
          },
          {
            name: 'message',
            type: 'string',
            header: 'required',
            desc: 'The message to be displayed on the snackbar.'
          },
          {
            name: 'openOnMount',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the snackbar will open once mounted.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Snackbar\'s root element.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'dismiss',
            header: 'Snackbar.dismiss()',
            desc: 'Hides the snackbar.'
          },
          {
            name: 'show',
            header: 'Snackbar.show()',
            desc: 'Shows the snackbar.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onActionTouchTap',
            header: 'function(e)',
            desc: 'Fired when the action button is touchtapped.'
          }
        ]
      }
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Snackbar", 
        code: code, 
        componentInfo: componentInfo}, 

        React.createElement(RaisedButton, {
          onTouchTap: this.$SnackbarPage_handleClick, 
          label: "Add to my calendar"}), 

        React.createElement(Snackbar, {
          ref: "snackbar", 
          message: "Event added to your calendar", 
          action: "undo", 
          onActionTouchTap: this.$SnackbarPage_handleAction})

      )
    );
  }});

  Object.defineProperty(SnackbarPage.prototype,"$SnackbarPage_handleClick",{writable:true,configurable:true,value:function(e) {"use strict";
    this.refs.snackbar.show();
  }});

  Object.defineProperty(SnackbarPage.prototype,"$SnackbarPage_handleAction",{writable:true,configurable:true,value:function() {"use strict";
    //We can add more code here! In this example, we'll just include an alert.
    window.alert("We removed the event from your calendar.");
  }});



module.exports = SnackbarPage;
