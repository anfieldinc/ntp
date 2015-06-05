var React = require('react');
var mui = require('mui');
var LinearProgress = mui.LinearProgress;
var CircularProgress = mui.CircularProgress;
var ComponentDoc = require('../../component-doc.jsx');
 
var SlidersPage = React.createClass({displayName: "SlidersPage",

  handleMouseDown:function(e){
    console.log('hmd', e);
  },

  getInitialState:function () {
      return {
        completed: 0         
      };
  },

  componentDidMount: function () {
    
     var self = this;

      var id = window.setInterval(function () {
        var diff = Math.random() * 10;

        self.setState({
          completed: self.state.completed + diff
        });

        if (self.state.completed > 100) {
          window.clearInterval(id);
        }
      }, 1000);
  },

  render:function() {

    var code =

        '//Linear\n\n' + 
        '//determinate\n' +
        '<LinearProgress mode="determinate" value={60} />\n' +
        '//indeterminate\n' +      
        '<LinearProgress mode="indeterminate"  />\n\n' +
        '//Circular\n\n'  +
        '//determinate\n' +
        '<CircularProgress mode="determinate" value={60} />\n' +
        '<CircularProgress mode="determinate" value={60} size={1.5} />\n' +
        '<CircularProgress mode="determinate" value={60} size={2} />\n' +
        '//indeterminate\n' +      
        '<CircularProgress mode="indeterminate" />\n' +
        '<CircularProgress mode="indeterminate" size={1.5} />\n' +
        '<CircularProgress mode="indeterminate" size={2} />';
        
         

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'mode',
            type: 'one of: determinate, indeterminate',
            header: 'default: indeterminate',
            desc: 'The mode of show your progress, indeterminate for when there is no value for progress. '
          },
          {
            name: 'value',
            type: 'number',
            header: 'default: 0',
            desc: 'The value of progress, only works in determinate mode ' 
          },
          {
            name: 'max',
            type: 'number',
            header: 'default: 100',
            desc: 'The max value of progress, only works in determinate mode ' 
          },
          {
            name: 'min',
            type: 'number',
            header: 'default: 0',
            desc: 'The min value of progress, only works in determinate mode ' 
          }
        ]
      },
    ];


    return (
      React.createElement(ComponentDoc, {
        name: "Sliders", 
        code: code, 
        componentInfo: componentInfo}, 
        React.createElement("h2", {className: "mui-font-style-headline"}, "Linear Progress"), 
        React.createElement("p", null, 
          "Determinate"
        ), 
        React.createElement(LinearProgress, {mode: "determinate", value: this.state.completed}), 
        React.createElement("p", null, 
          "Indeterminate"
        ), 
        React.createElement(LinearProgress, {mode: "indeterminate"}), 
        React.createElement("h2", {className: "mui-font-style-headline"}, "Circular Progress"), 
        React.createElement("p", null, 
          "Determinate"
        ), 
        React.createElement(CircularProgress, {mode: "determinate", value: this.state.completed}), 
        React.createElement(CircularProgress, {mode: "determinate", value: this.state.completed, size: 1.5}), 
        React.createElement(CircularProgress, {mode: "determinate", value: this.state.completed, size: 2}), 
        React.createElement("p", null, 
          "Indeterminate"
        ), 
        React.createElement(CircularProgress, {mode: "indeterminate"}), 
        React.createElement(CircularProgress, {mode: "indeterminate", size: 1.5}), 
        React.createElement(CircularProgress, {mode: "indeterminate", size: 2})
      )
    );
  }

});

module.exports = SlidersPage;
