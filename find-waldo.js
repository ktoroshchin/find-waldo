// The second argument/parameter is expected to be a function
function findWaldo(arr, found)
{
   arr.forEach(function(name,sos)
   {
    if (name === "Waldo")
    {
      found(sos);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at INDEX: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


