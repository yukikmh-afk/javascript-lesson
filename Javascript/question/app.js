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

  for(let i = 0; i < playerList.length; i++){
      avg += playerList[i].age;
  }
  avg /= playerList.length;
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
user.hello = sayHello;

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