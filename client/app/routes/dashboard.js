import Ember from 'ember';

export default Ember.Route.extend({
    model : function () {
        return Ember.$.getJSON('/dashboard').then(function (alive) {
            
            // Replaced by process.running key
            // alive.processes.forEach(function (process) { 
            //     if (alive.running.findBy('id', process.id)) {
            //         process.alive = true;
            //     } else {
            //         process.alive = false;
            //     }
            // });

            return alive;
        });
    }
});
