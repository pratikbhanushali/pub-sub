

/*====================================================
=       A Generic Pub-Sub Model - Documentation  	 =
======================================================

	Author : Pratik Bhanushali
	August 2015
	Website: https://www.pratikbhanushali.in

	Object : PubSub

	Usage :
		- Objects can subscribe to the Publisher for an event.
		- A Publisher, on publish, notifies all the subscribers for that event with a callback object.
		- Subscribers then can implement a logic on callback.

	E.g :
		=== Subscribe for an event ===

			var qb_sub = PubSub.register('ratings', function(obj) {
	  			console.log("This gets called when a publisher publishes 'ratings' event", obj);
			});

		=== Unsubscribe from an event ===

			qb_sub.unRegister();

*/


PubSub = {

	subscribers : {},

	register : function(eventName, functionName) {

		if(!this.subscribers.hasOwnProperty(eventName)) {
			this.subscribers[eventName] = [];
		}

		var index = this.subscribers[eventName].push(functionName) - 1;

		return {
      		unRegister: function() {
    			delete PubSub.subscribers[eventName][index];
			},
		};
	},

	broadcast : function(eventName, data) {
		if(!this.subscribers.hasOwnProperty(eventName))
			return;

		this.subscribers[eventName].forEach(function(callback) {
			callback(data);
		});
	}
};


/* Below commented are the subscribers listening to the publisher */

// var qb_sub = PubSub.register('ratings', function(obj) {
//   	console.log("Obj", obj);
// });


// var ns_sub = PubSub.register('ratings', function(obj) {
//   	console.log("Obj", obj);
// });


/* Below commented is a publisher that broadcasts to the subscribers when an event occurs */

// PubSub.broadcast('ratings', {
//     GetSetHome: {
//         "TransId": 6876876
//     }
// });
