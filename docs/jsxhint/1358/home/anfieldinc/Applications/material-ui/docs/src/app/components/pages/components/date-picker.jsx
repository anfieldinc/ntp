var React = require('react');
var mui = require('mui');
var DatePicker = mui.DatePicker;
var TextField = mui.TextField;
var Toggle = mui.Toggle;
var ComponentDoc = require('../../component-doc.jsx');

var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){DatePickerPage[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;DatePickerPage.prototype=Object.create(____SuperProtoOf____Class7);DatePickerPage.prototype.constructor=DatePickerPage;DatePickerPage.__superConstructor__=____Class7;
  function DatePickerPage(props) {"use strict";
    ____Class7.call(this,props);

    var minDate = new Date();
    var maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() -1);
    minDate.setHours(0,0,0,0);
    maxDate.setFullYear(maxDate.getFullYear() +1);
    maxDate.setHours(0,0,0,0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      showYearSelector: false
    };
  }

  Object.defineProperty(DatePickerPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    var code =
      '//Portrait Dialog\n' +
      '<DatePicker\n' +
      '  hintText="Portrait Dialog"\n\n' +
      '//Landscape Dialog\n' +
      '<DatePicker\n' +
      '  hintText="Landscape Dialog"\n' +
      '  mode="landscape"/>\n\n'+
      '// Ranged Date Picker\n' +
      '<DatePicker\n' +
      '  hintText="Ranged Date Picker"\n' +
      '  autoOk={this.state.autoOk}\n' +
      '  minDate={this.state.minDate}\n' +
      '  maxDate={this.state.maxDate}\n' +
      '  showYearSelector={this.state.showYearSelector} />';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'defaultDate',
            type: 'date object',
            header: 'optional',
            desc: 'This is the initial date value of the component.'
          },
          {
            name: 'formatDate',
            type: 'function',
            header: 'default: formats to M/D/YYYY',
            desc: 'This function is called to format the date to display in ' +
              'the input box. By default, date objects are formatted to M/D/YYYY.'
          },
          {
            name: 'mode',
            type: 'one of: portrait, landscape',
            header: 'default: portrait',
            desc: 'Tells the component to display the picker in portrait or landscape mode.'
          },
          {
            name: 'minDate',
            type: 'date object',
            header: 'optional',
            desc: 'The beginning of a range of valid dates. The range includes the startDate. ' +
              'The default value is current date - 100 years.'
          },
          {
            name: 'maxDate',
            type: 'date object',
            header: 'optional',
            desc: 'The ending of a range of valid dates. The range includes the endDate. ' +
              'The default value is current date + 100 years.'
          },
          {
            name: 'shouldDisableDate',
            type: 'function',
            header: 'optional',
            desc: 'Called during render time of a given day. If this method returns false ' +
              'the day is disabled otherwise it is displayed normally.'
          },
          {
            name: 'hideToolbarYearChange',
            type: 'boolean',
            header: 'optional',
            desc: 'Hide year change buttons on calendar; good for short time spans. Clicking ' +
              'the year will always result in selecting a year.'
          },
          {
            name: 'showYearSelector',
            type: 'boolean',
            header: 'default: false',
            desc: 'Determines whether or not a DatePicker has a year selection capability. ' +
              'If false, the year change buttons in the toolbar are hidden.'
          },
          {
            name: 'autoOk',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, automatically accept and close the picker on select a date.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of DatePicker\'s root element.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'getDate',
            header: 'DatePicker.getDate()',
            desc: 'Returns the current date value.'
          },
          {
            name: 'setDate',
            header: 'DatePicker.setDate(d)',
            desc: 'Sets the date value to d, where d is a date object.'
          }
        ]
      }
    ];

    var optionsStyle = {
      width: '300px',
      margin: '0 auto'
    };

    return (
      React.createElement(ComponentDoc, {
        name: "Date Picker", 
        code: code, 
        componentInfo: componentInfo}, 

        React.createElement(DatePicker, {
          hintText: "Portrait Dialog"}), 

        React.createElement(DatePicker, {
          hintText: "Landscape Dialog", 
          mode: "landscape"}), 

        React.createElement(DatePicker, {
          hintText: "Ranged Date Picker", 
          autoOk: this.state.autoOk, 
          minDate: this.state.minDate, 
          maxDate: this.state.maxDate, 
          showYearSelector: this.state.showYearSelector}), 

        React.createElement("div", {style: optionsStyle}, 
          React.createElement(TextField, {
            floatingLabelText: "Min Date", 
            defaultValue: this.state.minDate.toDateString(), 
            onChange: this.$DatePickerPage_updateMinDate.bind(this)}), 

          React.createElement(TextField, {
            floatingLabelText: "Max Date", 
            defaultValue: this.state.maxDate.toDateString(), 
            onChange: this.$DatePickerPage_updateMaxDate.bind(this)}), 

          React.createElement(Toggle, {
            name: "autoOk", 
            value: "autoOk", 
            label: "Auto Accept", 
            defaultToggled: this.state.autoOk, 
            onToggle: this.$DatePickerPage_handleToggle.bind(this)}), 

            React.createElement(Toggle, {
              name: "showYearSelector", 
              value: "showYearSelector", 
              label: "Show Year Selector", 
              defaultToggled: this.state.showYearSelector, 
              onToggle: this.$DatePickerPage_handleToggle.bind(this)})
        )
      )
    );
  }});

  Object.defineProperty(DatePickerPage.prototype,"$DatePickerPage_updateMinDate",{writable:true,configurable:true,value:function(e) {"use strict";
    this.setState({
      minDate: new Date(e.target.value)
    });
  }});

  Object.defineProperty(DatePickerPage.prototype,"$DatePickerPage_updateMaxDate",{writable:true,configurable:true,value:function(e) {"use strict";
    this.setState({
      maxDate: new Date(e.target.value)
    });
  }});

  Object.defineProperty(DatePickerPage.prototype,"$DatePickerPage_handleToggle",{writable:true,configurable:true,value:function(e, toggled) {"use strict";
    var state = {};
    state[e.target.name] = toggled;
    this.setState(state);
  }});



module.exports = DatePickerPage;
