// void main(){
//   List<String> todo = ['Alice', 'Bob', 'Charlie'];
//   todo.add('David');
//   print(todo);
//   todo.addAll(['Eve', 'Frank']);
//   print(todo);
//   for(String name in todo){
//     print(name);
//   }
//   for(var n in todo){
//     print(n);
//   }
// }

void main() {
  Set<String> todo = {'Alice', 'Bob', 'Charlie'};
  todo.add('David');
  print(todo);
  todo.addAll({
    'Eve',
    'Frank',
    'Alice',
  }); // 'Alice' is already in the set, so it won't be added again
  print(todo);
  todo.remove('Bob'); // Remove 'Bob' from the set
  print(todo);
  todo.contains('ram'); // Check if 'ram' is in the set
  print(todo.contains('Alice')); // Print the result of checking if 'Alice' is in the set
  // for(String name in todo){
  //   print(name);
  // }
  // for(var n in todo){
  //   print(n);
  // }
}
