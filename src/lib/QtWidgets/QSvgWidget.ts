import addon from '../utils/addon';
import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';

/**

> Display SVG files in a widget.

* **This class is a JS wrapper around Qt's [QSvgWidget class](https://doc.qt.io/qt-5/qsvgwidget.html)**

The `QSvgWidget` class provides a widget that is used to display the contents of Scalable Vector Graphics (SVG) files.

### Example

```javascript
const fs = require("fs");
const { QSvgWidget } = require("@nodegui/nodegui");

const svg = new QSvgWidget();
svg.load("icon.svg");
// or
fs.readFile("icon.svg", (err, buffer) => {
  if (!err) svg.load(buffer);
})

```

 */
export class QSvgWidget extends QWidget<QWidgetSignals> {
    constructor(parent?: QWidget) {
        let native: NativeElement;
        if (parent) {
            native = new addon.QSvgWidget(parent.native);
        } else {
            native = new addon.QSvgWidget();
        }
        super(native);
    }
    load(file: string | Buffer): void {
        if (file instanceof Buffer) {
            this.native.load('data:image/svg+xml;base64,' + file.toString('base64'));
        } else {
            this.native.load(file);
        }
    }
}
