console.log('ロボ玉')

// 型付けの方法
 //1.変数、2.関数の引数、戻り値に対して : 型『コロン+型』の形式 で明示的に型を指定することができます。( | 区切りで複数可能)

let robo : string = 'ロボ玉' // 変数:型
let age : number = 2

// 引数:型
const RoboAge = (robo : string, age:number ) : string =>{ // 引数の後に:型 (戻り値の型を定義)
    return `${robo}の年齢は、人間換算だと${age * 100}`
}

console.log(RoboAge(robo,age))

let likefood : 'ラーメン'

let num : number = 123

let num2 : any = 123
num2 = '123'

let str = ''

let Robotama : { name : string, age : number } = { name:'ロボ玉', age:2 }

function tama (obj:{ name:string, age:number}) : void { // 戻り値なしを明示する！
}

tama(Robotama)

//let tamano : {key:string} = {} // 型を定義したけど、ないのでエラーがでる！
let tamano : { key ? : string } = {}  // ?を使うと、あってもなくても大丈夫になる！

let NeoRobo : { name:string, age:number, hissatu ?:string} = { name:'ネオ・ロボ玉', age:2}

// impossibleには値falseしか入らないように指定していますね。 (値を指定し特定の値しか入らないようにする型をリテラル型と言います)
let impossible:false = false
impossible = true as false　// asはTypescriptの型のアサーションです、型を変換しています。

// 型のアサーション 
let val1: any = "abcde";
let len1: number = (val1 as string).length; // val1をstringとして(as)、型を定義します！(アサーション：明言・断言・主張)

// let num1: number = 777;
// let numString: string = num1 as string; // number型で一度定義したものをstrign型としてアサーションすることはできない！ => エラー

// 型のアサーションはanyからStringのように、規則の緩い型から、 厳しい型に変換することは可能ですが、逆はできません。
// が、number -> any -> stringということは可能です。 そして、厳密には型を変換してはいません。
// 型のアサーションが必要になったタイミングでどのようなことができるのか調べてみましょう。

// interface(窓口・境界線) と type(型・パターン)
// 簡単に言うと、「オブジェクトの型」に名前をつけることができます。

interface RoboG { // 型宣言(関数宣言)
    name : string,
    like : string, 
    level : number,
    pirot ? : boolean
}

let Robo1 : RoboG = {
    name : 'ロボ玉試作1号機',
    like : 'ヒマたね',
    level : 12,
    pirot : true
}

// interfaceを使用するには interface 型名 {key:型}宣言すること ができます。 作成したinterfaceを利用する方法は他の型付きと同じで、
//変数 : 作成した型名で利用することができます。


// typeも見てみましょう(正式には型エイリアス type alias)
// ぱっと見、少し書き方が変わっただけで同じように見えます。 次は2つの違いについてみていきます。

type RoboGunma = { // 無名の型
    name : string,
    like : string, 
    level : number,
    pirot ? : boolean
}

let Robo2 : RoboGunma = {
    name : 'ロボ玉試作2号機',
    like : 'ドライフルーツ',
    level : 12,
    pirot : true
}


// 厳密に見ると
// interfaceは型の宣言ですので、型に名前をつけます。 typeはどちらかというと無名で作られた型に参照のため別名をを与えるということをやってます。

// 関数の関数宣言と関数式の関係性に似ています。 関数を宣言して名前をつけ作成をするのと、変数に作成した関数の 処理を代入している関係性です。


// 定義できる型の種類
// typeであればオブジェクト以外の型も参照できます。

type Color = '赤'|'青'|'緑'|'白'

let color : Color = '青'
color = '白'
//color = 'オレンジ'


// 拡張
// interfaceは拡張が可能です。

interface RoboG3 {
    name : string,
    like : string, 
    level : number,
    pirot ? : boolean
}

interface RoboG3 {
    hissatu ?:string
}

interface RoboG3 {
    attak ?:number
}

const Robo3 : RoboG3 = {
    name:'ロボ玉試作3号機',
    like:'はむはむピューレ',
    level:28,
    pirot:false,
    hissatu:'ロボ玉ビーム'
}

// 再度宣言をしているように見えますが、実際にはプロパティを追加 しています。 その為、user2を作成する時にはプロパティが足らずエラーになっ ています。
//typeではこのようなことはできません。 (厳密にはできるんですけどね。)

// 配列の要素チェック
let array1: number[] // numberの入る配列と型定義
let array2: string[]
let array3: any[]
let array4: Array<number> // Array型で中身はnumberと型定義 => array1と同じ！
let array5: Array<string>
let array6: Array<any>

// Tuple(組,連符,順序組)
//配列の各要素ごとに型指定できます。 以下ケースでエラーとなります。 
// 1.要素ごとに指定した型と異なる型である  
// 2.要素数が違う

let tup: [number, string, boolean]
tup = [1,'2',true]

// Enum
//数値集合を名前をつけて管理しやすくなります。
 
enum payStatus {cashOn = 1,creditCard = 2}

// void
// voidは関数の戻り値で利用できます。 戻り値がない場合に使用するのがvoidです。
let roborobo :string = 'ロボ玉'
const echo = (name :string): void => {
    console.log(name)
}
echo(roborobo)

// never
// 処理が終了しない、決して何も返さない場合 neverを使用します

let error = (message: string): never => {
    throw new Error(message)
}

let hensu :string|null
hensu = null

// 複数型の指定 intersection( T1 & T2) => 交差する

interface InterFace1 {
    name: string,
    age: number
}

interface InterFace2 {
    level: number
}

type InterSection = InterFace1 & InterFace2

const Leaf :InterSection = {
    name: 'リーフちゃん',
    age: 1,
    level: 100
}


interface InterfaceA {
    aaa: string;
    bbb: string;
}

interface InterfaceB { 
    ccc: string;
}

const Xxx = () :InterfaceA & InterfaceB=>{
    return {
        aaa:'ロボ玉',
        bbb:'ロボロボ',
        ccc:'グンマー'
    }
}

interface InterfaceC {
    hasContent: true;
    name: string;
    body: string;
}

interface InterfaceD {
    hasContent: false,
    item: string
}

const xxx = (yyy: InterfaceC|InterfaceD) => {
    if(yyy.hasContent){
        console.log(yyy.name)
        console.log(yyy.body)
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------------

const foo = (robo: number | string) => {

    const x = robo; // const x: string | number
    console.log(typeof x)
    if (typeof robo === "number") {
      const y = robo; // const y: number
      console.log(typeof y)
    } else {
      const z = robo; // const z: string
      console.log(typeof z)
    }
    
}

const foo2 = (arg: number | string) => {
    switch (typeof arg) {
      case "number": {
        const x = arg; // const x: number
        break;
      }
      case "string": {
        const y = arg; // const y: string
        break;
      }
      default: {
        const z = arg; // const z: never
      }
    }
  
    const a = typeof arg === "number" ? arg : null; // const a: number | null
  };


let hasvalue: boolean = true

let count: number = 12

let mozi: string = 'ロボ玉'

const person:{ name: string; age: number } = { name: 'ロボ玉', age: 1 }

const roboObj:object = {name: 'ロボ玉'}


const fruits: (string | number)[] = ['Apple', 'Banana', 'Grape', 1]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// < TypeScript講座(Udemy)セクション2 >

// タプル型
const book:[ string, number, boolean ] = ['business',1200,true]
book.push(100) // エラーでない！ => TypeScriptは、初期値を設定するときに厳しい！
//console.log(book[3]) => 参照するときはエラーがでる！


// 列挙型(enum)
enum CoffeeSize {
    short = 'short',
    tall = 'tall',
    grande = 'grande'
}

const coffee = {
    hot: true,
    size: CoffeeSize.short
}

coffee.size = CoffeeSize.tall

let anything: any = true
anything = 'hello'
anything = true
anything = {}

let an: any[] = ['ロボ玉']

let banana = 'banana'
banana = anything

let union: number | string = 10
union = 'ロボロボ'

// union型の配列を作成
let unionArray : (number | string)[] = [12,'ロボ玉']

const apple = 'apple'

let clothSize: ClothSize

let cloth: {
    color: string,
    size: ClothSize 
}

type ClothSize = 'small' | 'medium' | 'large'

// 関数に対する型定義
const add = (num1: number, num2: number):number => {
    return num1 + num2
}

add(1,2)

// 関数の引数(パラメーター)に関しては、必ず付ける！
// 関数の戻り値に関しても、型推論に任せてもいいが、なるべく付ける！ => 他の人が見てもわかりやすい！


// 関数のvoid型はundefined型を返す！ => 関数で何も返さない時は、void => 基本的にundefinedを使わせない！(return文があるとundefinedを使える！)
const sayHello = (): void => {
    console.log('Hello')
}

const sayHello2 = (): undefined => {
    console.log('Hello')
    return
}

let tmp: undefined // undefined型は、undefinedを持つことができる！
console.log(tmp)

let nullType: null = null


// 関数の型注釈

const anotherAdd = add

// アロー関数での型定義方法
const doubleNumber1 = (num:number):number => num * 2

const doubleNumber2: (num:number) => number = num => num * 2


// コールバック関数の型定義
const doubleNumber3 = (num:number, cb: (num: number)=> number ):void =>{
    const doubleNum = cb( num * 2)
    console.log(doubleNum)

}

// unknownは使う時に、厳しい！
let unknownInput: unknown
let anyInput: any
let text: string

unknownInput = 'hello' // unknown型は、最初に入った型に化ける！
unknownInput = 21
unknownInput = true


if( typeof unknownInput === 'string'){
    unknownInput = 'ロボ玉'
}

// never => 決して何も返さない！

const errorNever = (message: string): never =>{
    throw new Error(message)
}

console.log(errorNever('ロボロボ'))


// ----------------------------------------------------------------------------------------------------------------------------------

// < TypeScript講座(Udemy)セクション6 >

// インターセクション型

type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower ?: number;
}

type EngineerBlogger = Engineer & Blogger;

const GRrobotama: EngineerBlogger = {
    name: 'ロボ玉',
    role: 'グンマー',
    follower: 100
}

type NumberBoolean = number | boolean
type StringNumber = string | number
type Mix = NumberBoolean & StringNumber // Mixはnumber型になる！


// < 3つのtypeガード >

// typeof演算子

// instanceof演算子

// in演算子

const toUpperCase = (x: (string | number) )=> {

    if(typeof x === 'string'){ // if文の中でstring型であることが確定する！
        return x.toUpperCase()
    }
    return ''

}

type NomadWorker = Engineer | Blogger

let NomadWorkerProfile = (nomado: NomadWorker)=> {
    console.log(nomado.name) // 共通しているものじゃないとエラーがでる！
    //console.log(nomado.role)

    // typeofは7つの型しか判定できない！
    if(typeof nomado === 'object'){ 
        // objectの判定はできる！ だけど、そのobjectの中身まではチェックできない！ => roleが欲しい場合アクセスできない！
        
        console.log(nomado.name)
        //console.log(nomado.role) => エラー
    }

    if(nomado instanceof Object){
        console.log(nomado.name)
        //console.log(nomado.role)
    }

    if('role' in nomado){ // in演算子で中に該当のkey(プロパティ)がある時だけの処理をかける！
        console.log(nomado.role)
    }

    if('follower' in nomado){
        console.log(nomado.follower)
    }


}

// 型アサーション 

const input = document.getElementById('input') // nullの可能性がある！

//const inputError: HTMLInputElement = document.getElementById('input')

const input2 = document.getElementById('input') as HTMLInputElement  // HTMLElementのHTMLInputElementを指定

const input3 = document.getElementById('input')!  // 「!」で、nullの否定

// インデックスシグネチャ

type Designer = {
    name: string;
    [key: string]: string; // インデックスシグネチャ
}

const designer: Designer = {
    name: 'ロボ玉',
    robo: 'ロボ',
    gunma: 'グンマー'
}


// 関数のオーバーロード
//const toUpperCase2 = (x: string):string
// const toUpperCase2 = (x: string|number):string|number => {
//     if(typeof x === 'string'){
//         return x.toUpperCase()
//     }
//     return x
// }

//console.log(toUpperCase2('Hello') as string)




const peter = {
    name: 'ピーター',
    age: 20
}

// typeofの役立つ使い方！
type PeterType = typeof peter 



