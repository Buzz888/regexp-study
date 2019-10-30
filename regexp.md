RegExp
检验 :test
          let str = "good study day up"

          let reg = /\d+/

      reg.test(str); //=>false

    

内容捕获 :exec
          str = "2019-02-30"

          reg.exec(str) //=>["2019" , index:0 ,inputs:原来的字符串]



创建方式 

字面量 都是描述正则规则元字符

let reg = /\d+/



构造函数 /实例 两个参数 元字符和修饰符

let reg = new RegExp("\\d+")



元字符 和 修饰符


常用元字符

      1.量词元字符  设置出现的次数   \d{5} 5位数字

       * 0 到多次  （可以出现也可以不出现）

       + 1到多次

       ？ 0或者1此

       {n} 出现n次

       {n,}出现n到多次

       {n,m}出现n到m次

       

      2.特殊元字符

     \  转义字符 (普通和特殊) 都可以相互转义

     .  除\n(换行符)以外到任意字符

     ^ 以哪一个作为元字符开始

     $ 以哪一个作为元字符结束

\n换行符

\d 0-9之间到一个数字

\D 非0-9之间到一个数字

\w 数组字母下划线中到任意一个字符

\s 一个空白字符

\t 一个tab键 四个空格

\b 匹配一个单词的边界

x|y x或者y中的一个字符 1|0|2|3

[xyz] xyz其中一个 [1afmofao23] 任意一个字符 逗号也是字符

[^xy] 除了xy以外的字符

[a-z] 指定a-z这个范围的任意字符 [0-9a-zA-Z_] ===\w

[^a-z] 上一个的取反

()分组

(?:)只匹配不捕获

(?=)正向预判

(?!)负向预判



修饰符

i =>ignoreCase 忽略大小写

m => multiline 可以多行匹配

g => 全局匹配



/A/.test('lalalla') =>false

/A/i.test('lalalla') =>true