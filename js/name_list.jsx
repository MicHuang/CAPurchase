var NameList = React.createClass({
  getInitialState: function(){
    return {
      contacts: [
        {
          name: '时瑞琪',
          phone: 13051162287
        },
        {
          name: '胡若婕(Banana)',
          phone: 18515155564
        }
      ]
    };
  },
  render: function(){
    return (
      <a href='contacts/'+{this.state.contacts.phone}+'.html'>
          <li>{this.state.contacts.name}</li>
      </a>
    );
  }
});

ReactDOM.render(,document.getElementById('test'));
