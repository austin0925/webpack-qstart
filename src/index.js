import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by thsi script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());