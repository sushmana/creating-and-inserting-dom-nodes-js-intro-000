var element = document.createElement('div');
element.innerHTML = "Hello, DOM!";
element.style.backgroundColor = '#f9f9f9';
document.style.appendChild(element);
element.style.textAlign = 'center';
var ul = document.createElement('ul');
for (let i = 0; i < 3; i++){
  let li= document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
