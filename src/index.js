import {MDCList} from '@material/list';

const elements = [];

document.querySelectorAll('.mdc-list').forEach(el => {
const list = new MDCList(el);
if (el.hasAttribute('single')) {
    list.singleSelection = true;
}
 elements.push(el);
});
