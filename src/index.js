import {MDCList, MdcList} from '@material/list';

const elements = [];

document.querySelectorAll('.mdc-text-field').forEach(el => {
 //new MDCTextField(el);
 elements.push(el);
});

document.querySelectorAll('.mdc-list').forEach(el => {
const list = new MDCList(el);
if (el.hasAttribute('single')) {
    list.singleSelection = true;
}
 elements.push(el);
});

let current = 0;
const AMOUNT_LEVELS = 4;

global.toggle = () => {
    elements.forEach(el => el.classList.remove('density-' + current));
    current = (current - 1) % AMOUNT_LEVELS;
    elements.forEach(el => el.classList.add('density-' + current));
    updateLevel();
}

updateLevel();

function updateLevel() {
    document.querySelector('#current').textContent = `-${current}`;
}