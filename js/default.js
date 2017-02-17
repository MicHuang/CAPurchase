function verify(){
  var passwd = document.getElementById('passwd').value;
  if(passwd == 12101){
    window.location.href = 'name_list.html';
  }
  else{
    document.getElementById('passwd').value = '';
    var input = document.getElementById('passwd');
    input.setAttribute('placeholder', '密码不正确....');
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var content = document.createTextNode('input::-webkit-input-placeholder {color: red !important;}');
    style.appendChild(content);
    head.appendChild(style);
  };
}

function addEnterPress(nodeID){
  var node = document.getElementById(nodeID);
    node.onkeydown = function(){
      if(event.keyCode == 13){
        verify();
      }
    }
};

addEnterPress('passwd');
