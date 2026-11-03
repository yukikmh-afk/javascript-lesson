/* -------- Java Script 基礎編 -------- */
/* ------------ /
Question.1
  自身の名前と年齢を変数に代入し文字列連結し表示しよう
  ------------ */

let name = '萩原';
let age = 33;

console.log('私のニックネームは' + name + 'です。年齢は' + age + 'です。');

/* ------------ /
Question.2
  変数 languages に JavaScript, PHP, Ruby, Python, Go の 
  5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、
  テンプレートリテラルを用いて以下のようにコンソールに出力してください。
  ------------ */

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

/* ------------ /
  Question.3
  下記の変数 user を使用し 26 をコンソールに出力してください。
  ------------ */

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

/* ------------ /
  Question.4
  下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。
  ------------ */

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

/* ------------ /
  Question.5
  Q4 で定義した変数 playerList を使用し、
  John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。
  ------------ */

  let avg = 0;
  let sum = 0;

  for(let i = 0; i < playerList.length; i++){
      sum += playerList[i].age;
  }
  avg = sum / playerList.length;
  console.log(avg);

/* ------------ /
  Question.6
  Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
  変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
  ------------ */

function sayHello(){
  console.log('Hello');
}

sayHello();

let sayWorld = function (){
  console.log(('World'));
}

sayWorld();

/* ------------ /
  Question.7
  Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
  Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
  ※ いずれも Q3 で定義した変数 user を直接書き換えないこと
  ------------ */

  user.birthday = '2000-09-27';
  user.sayHello = function(){
    console.log('Hello!');
  };
  user.sayHello();

/* ------------ /
  Question.8
  下記の空のオブジェクト calc を使用し、以下問題を解いてください。

  let calc = {};
  2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
  2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
  2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
  2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
  ------------ */

  let calc = {
    add: function (x, y){
      console.log(x + y);
    },
    substract: function(x, y){
      console.log(x - y);
    },
    multiply: function(x, y){
      console.log(x * y);
    },
    divide: function(x, y){
      console.log(x / y);
    }
  }
  calc.add(3,4);
  calc.substract(20,10);
  calc.multiply(7,7);
  calc.divide(10,2);

  /* ------------ /
  Question.9
  2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、
  5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。
  ------------ */

  function remainder(x, y){
    return x % y;
  }

  let x = 5;
  let y = 3;

  console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');

  /* ------------ /
  Question.10
  下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
  その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

  スコープ
  参照

  function foo() {
  let x = 1;
  }
  console.log(x);
  ------------ */

  /* ------------  回答 ------------ */
  /* 
    変数xが生きていられるのは定義されたスコープの範囲内である関数fooの中のみであるため、
    そのスコープ外でであるconsole.logでは参照できずにエラーが発生する
  */

  /* -------- Java Script 応用編 -------- */
  /* ------------ /
  Question.1
  標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。
  ------------ */
  let max = 9;
  let min = 0;
  console.log(Math.floor(Math.random() * (max - min + 1) + min));

  /* ------------ /
  Question.2
  関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
  Hello World!
  ------------ */
  setTimeout(function(){
    console.log('Hello World!')
  }, 3000);

  /* ------------ /
  Question.3
  変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

  条件
  num が 0 より大きければnum is greater than 0
  num が 0 より小さければnum is less than 0
  num が 0 であればnum is 0
  ------------ */
  let num = 1;
  let text = '';

  if(num > 0){
    text = 'num is greater than 0';
  }
  else if(num < 0){
    text = 'num is less than 0';
  }
  else{
    text = 'num is 0'
  }

  console.log(text);

  /* ------------ /
  Question.4
  変数 numbers に空の配列を代入した後、
  0 ~ 99 までの数字を変数 numbers に全て追加し、
  値が追加された状態の変数 numbers をコンソールに出力してください
  ------------ */

  let numbers = [];

  for(let i = 0; i < 100; i++){
    numbers[i] = i;
  }
  console.log(numbers);

  /* ------------ /
  Question.5
  以下の変数 mixed から 要素を一つずつ取り出し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

  let mixed = [4, '2', 5, '8', '9', 0, 1];
  条件
  Number であり偶数の時は even
  Number であり奇数の時は odd
  Number 以外の時は not number
  ------------ */
  let mixed = [4, '2', 5, '8', '9', 0, 1];
  for(let i = 0; i < mixed.length; i++){
    if(typeof mixed[i] === 'number'){
      if(mixed[i] % 2 === 0){
        console.log('even');
      }
      else{
        console.log('odd');
      }
    }
    else{
      console.log('not number');
    }
  }