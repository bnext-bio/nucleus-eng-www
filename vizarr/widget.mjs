// https://github.com/hms-dbmi/vizarr
import * as vizarr from 'https://nucleus.engineering/vizarr/vizarr-B7KA9y9r.js';

export default {
  async render({ model, el }) {
    console.debug('vizarr-viewer:', el);
    console.debug('vizarr-viewer:', model.get('height'));
    console.debug('vizarr-viewer:', model.get('source'));
    console.debug('vizarr-viewer:', model.get('menuOpen'));

    let div = document.createElement('div');
    Object.assign(div.style, {
      height: model.get('height') ?? '500px',
      backgroundColor: 'black',
    });
    // hard code closed for now
    let viewer = await vizarr.createViewer(div, { menuOpen: true });
    viewer.addImage({ source: model.get('source') });
    el.appendChild(div);
    console.debug('vizarr-viewer: done');
    return () => viewer.destory?.();
  },
};
