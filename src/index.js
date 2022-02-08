import {info} from '../src/ids'

info.forEach(title => {
  const paragraph = document.createElement('p');
  paragraph.innerText = title;

  document.body.append(paragraph);
});