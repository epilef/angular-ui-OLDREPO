
angular.module('ui.config', []).value('ui.config', {});
angular.module('ui.filters', ['ui.config']);
angular.module('ui.directives', ['ui.config']);
angular.module('ui.services', ['ui.config']);
angular.module('ui', ['ui.filters', 'ui.directives', 'ui.services', 'ui.config']);
