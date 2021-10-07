let state = 0;
const setState = (def = true)=> {
    if (!def){
        state=0;}
else{
    state ++;
}}
    setState(true);
document.querySelector('button').addEventListener('click', ()=>{
    setState()
});
const Elem = (t, el, className) => {
    const div = document.createElement(el);
    const text = document.createTextNode(t);
    const root = document.querySelector('#root');
    root.appendChild(div);
    div.appendChild(text);
    div.classList.add(className);
}

const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini?', 'Namo ainu']
data.forEach((s, nr) => Elem (s, 'h1', nr%2 ? 'pink' : 'goth'));

