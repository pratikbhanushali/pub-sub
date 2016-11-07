

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
