import './style.scss';
import 'fomantic-ui-less/semantic.less';

import("./pkg").then(module => {
  module.run_app();
});
