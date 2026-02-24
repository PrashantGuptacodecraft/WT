// import 'dart:io';
// void main() {
//   int a=int.parse(stdin.readLineSync()!);
//   int b=int.parse(stdin.readLineSync()!);
// print("Enter the first number: $a");
// print("Enter the second number: $b");
//   int c = sum(a, b);
//   print(" The sum of $a and $b is: $c");
// }

// int sum(int a, int b) => a + b;
  
 
 
  void main(List<String> args) {
  int a = int.parse(args[0]);
  int b = int.parse(args[1]);

  int result = sum(a, b);

  print("The sum of $a and $b is: $result");
}

int sum(int a, int b) => a + b;
