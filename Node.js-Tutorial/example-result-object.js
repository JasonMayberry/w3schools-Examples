/* #### The Result Object ####

When executing a query, a result object is returned.

The result object contains information about how the query affected the table.
*/
// The result object returned from the example above looks like this:

{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
// The values of the properties can be displayed like this:

// Example
// Return the number of affected rows:

console.log(result.affectedRows);
// Which will produce this result:

// 1
