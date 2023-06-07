'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('fine', 'fine.html'), 
            new Route('special', 'special.html'),
            new Route('vegans', 'vegans.html')
            
        ]);

    }
    init();
    
})();
