```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{a:1,b:1}});
//Correct Usage
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{a:1}, $inc:{b:1}});
```