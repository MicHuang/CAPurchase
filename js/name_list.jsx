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
    var link = 'contacts/'+{this.state.contacts.phone}+'.html';
    return (
      <a href={link}>
          <li>{this.state.contacts.name}</li>
      </a>
    );
  }
});

ReactDOM.render(<NameList />,document.getElementById('test'));
