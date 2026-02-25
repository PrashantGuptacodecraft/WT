import 'dart:io';

class Add {
  int sum(int a, int b) {
    return a + b;
  }
}

class Subtract {
  int sub(int a, int b) {
    return a - b;
  }
}

class Divide {
  int div(int a, int b) {
    return a ~/ b;
  }
}

class Multiply {
  int mul(int a, int b) {
    return a * b;
  }
}

void main() {
  stdout.write('Enter choice (1:Add, 2:Subtract, 3:Divide, 4:Multiply): ');
  int n = int.parse(stdin.readLineSync()!);
  stdout.write('Enter first number: ');
  int first = int.parse(stdin.readLineSync()!);
  stdout.write('Enter second number: ');
  int second = int.parse(stdin.readLineSync()!);

  switch (n) {
    case 1:
      print('The sum of $first and $second is: ${Add().sum(first, second)}');
      break;
    case 2:
      print(
        'The difference of $first and $second is: ${Subtract().sub(first, second)}',
      );
      break;
    case 3:
      if (second == 0) {
        print('Cannot divide by zero.');
      } else {
        print(
          'The quotient of $first and $second is: ${Divide().div(first, second)}',
        );
      }
      break;
    case 4:
      print(
        'The product of $first and $second is: ${Multiply().mul(first, second)}',
      );
      break;
    default:
      print('Invalid choice.');
  }
}
