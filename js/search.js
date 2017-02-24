var contacts = [
  '13051162287',
  '13146921531',
  '13601039619',
  '13699270278',
  '13781198718',
  '13781337349',
  '15335327077',
  '15813209022',
  '15910124670',
  '15910601270',
  '15934356213',
  '18500811527',
  '18515155564',
  '15001100615',
  '13522066925',
  '18237170583',
  '13621211812',
  '13439139530',
  '13750308223',
  '18101533927',
  '15592098111',
  '13700287252',
  '18919089777'
];

function submit(){
  var node = document.getElementById('btn');
  var content = document.getElementById('input').value;
  if(contacts.indexOf(content) === -1){
    node.setAttribute("data-toggle", "modal");
    node.setAttribute("data-target", ".alert");
    return false;
  }
  var link = 'contacts/'+ content + '.html';
  window.location.href=link;
}

function addClick(nodeID){
  var node = document.getElementById(nodeID);
  node.onclick = function(){
    submit();
  }
}

function addEnterPress(nodeID){
  var node = document.getElementById(nodeID);
    node.onkeydown = function(){
      if(event.keyCode == 13){
        $("#btn").click();
      }
    }
};

addEnterPress('input');
addClick('btn');
