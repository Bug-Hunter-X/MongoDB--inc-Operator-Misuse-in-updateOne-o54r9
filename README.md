# MongoDB $inc Operator Misuse
This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method.  Improperly using `$inc` can lead to data corruption or unexpected behavior.

## Bug
The original code attempts to increment multiple fields using a single `$inc` operation. This is incorrect. The correct usage involves separate `$inc` operators for each field.

## Solution
The solution shows the correct way to increment multiple fields simultaneously by using a separate `$inc` operator for each field. This ensures accurate updates.

## Setup
1. Ensure that MongoDB is installed and running.
2. Create a MongoDB collection named `myCollection`.
3. Run the code.