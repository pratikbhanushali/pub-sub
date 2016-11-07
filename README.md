# pub-sub
The purpose of this repo is to provide a solution to the observer design pattern using JavaScript

**Subscribe for an Event** - PubSub.register()

```code
var subscriber_1 = PubSub.register('event_name', function(obj) {
    // do something when an event occurs
});
```

**Unsubscribe from an Event** - PubSub.unRegister()

```code
subscriber_1.unRegister();
```

**Broadcast an Event** - PubSub.broadcast()
```code
PubSub.broadcast('event_name', {
    return_obj: {
        "status": true,
        "data" : "Some data or a JSON"
    }
});
```
