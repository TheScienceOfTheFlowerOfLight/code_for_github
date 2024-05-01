//* تعليقات ------------------------------------
//dddd
/*dddddd
dddd
dddd */












//* تخطيط ---------------------------------------------
//? var
//? fun
//? class X
//? run



/* 
    الأكواد سأكتبها فى دوال فقط
    كل دالة ستحتوى على كود لتنفيذ شئ واحد فقط 
    لو هناك كود ينفذ أكثر من شئ ، يتم استدعاء دوال كل شئ من هؤلاء فى دالة واحدة
*/













//* نطاق ----------------------------------------------
/* 
file
function
{}
*/













//* قواعد كتابة الأوامر -----------------------------------
/* 
    ; كل أمر يجب أن ينتهى بفاصلة منقوطة
    condition - function - class عدا 
    أسم الأمر بالانجليزية ، و تكون حروفه متصلة ليس بينهم فواصل
    اذا كان الاسم يتكون من أكثر من كلمة ، يكون الحرف الأول للكلمات الثانية كابتل
*/













//* = ---------------------------------------------------
/* 
    الاسم على يسارها ، يخزن به القيمة الموجودة على يمينها
*/













//* ثلاث نقاط متجاورة ------------------------------------
/* 
    ...
    ! إذا تم وضعها قبل متغير أو معامل ، سيأخذ قيم من مخزن أخر
    ? index يتحول المتغير أو المعامل إلى مصفوفة ، ويحفظ كل قيمة تدخل له فى 

    ! وسيعطى قيمه لمخزن أخر index إذا تم وضعها قبل كائن له 
    ? index تعطى القيم الخاصة به منفردة وكأن الكائن ليس له  
*/














//* console ----------------------------------------------
/* 
   يعمل بشكل سليم js يستخدم للتأكد أن كود 
   يستخدم لاختبار الكود لاكتشاف مكان خطأ معين لكى يتم حله
*/



console.log();
console.warn();
console.error();
console.time();
    // code
console.timeEnd();
console.clear();
monitorEvents(document);//docment / element
unmonitorEvents(document);














//* اكتشاف الأخطاء ------------------------------------
/* 
     لعرض ناتج تنفيذ كل جزء من الكود للتأكد من عدم وجود خطأ فى ناتج التنفيذconsole تستخدم 
     و سيخبرك بنوع الخطأ وسطره و عموده console إذا كان هناك خطأ فى قاعدة كتابة أمر ، سيظهر ذلك فى 
*/













//* اصلاح الأخطاء ------------------------------------------
/* 
    إذا كان فى قيمة ناتج التنفيذ ، فراجع قواعد إظهار القيمة التى تريد ، ثم راجع خطوات تنفيذ هذه القواعد فى الكود
    ! إذا كان الخطأ فى قاعدة كتابة الأمر
    ? بعد أن اكتشفت مكانه ، ولم تعرف الطريقة الصحيحة لكتابة الأمر ، راجع قاعدته فى مراجعك ، أو انسخه وضعه للبحث فى جوجل ، أو أبحث بالذكاء الاصطناعى
*/













//* document --------------------------------------------
/* 
    DOM هو ال
    ! ؟ DOM ما هو 
    ? لعرضها فى الصفحة ، و لتتمكن لغات برمجة الويب من تنفيذ أوامرها على العناصر HTML هو طريقة تستعملها المتصفحات لتنظيم عناصر 
    هو يشبه الشجرة حيث يتفرع من العنصر الأب أبنائه ، وهكذا
    وكل ابن يرث صفات أبيه (خصائص س أس أس) ، إلا إذا تم تحديد خصائص خاصة به
    EX:
    html
        head
            meta (charset)
            title
        body
            header
                h1
                p
            main
                section
                section

    EX: Media/image/Js/DOM
*/













//* CSSOM --------------------------------------------
/* 
    لعنصر ، أو تعدل عليها css تعرض قيم لخصائص  method أو  property  هو 
    string كل القيم التى تعرضها تكون من نوع 
    القيم التى تأخذها تكون حسب نوعها و بوحدة قياسها لو كان لها وحدة قياس
*/














//* التخزين ----------------------------------------------
    //? المتغيرات
    var v1;//str
    var v1;
    v1 = 11;
    /* 
        يدعم نطاق الملف و الدالة فقط
        يمكن أن لا أعطيه قيمة
        أستطيع التعديل فى قيمه
        يقبل أن يتم الإعلان عن نفس المتغير فى نفس النطاق

        متى أستخدمه ؟
        عندما أريد انشاء متغير داخل شرط أو تكرار ، ويصبح معروف فى النطاق الأب له      
    */

    let v2;
    v2 = 11;
    v2 = 'hhhhh';
    /* 
        يدعم نطاق الملف و الدالة و الكائن
        يمكن أن لا أعطيه قيمة
        أستطيع التعديل فى قيمه
        لا يقبل أن يتم الإعلان عن نفس المتغير فى نفس النطاق

        متى أستخدمه ؟
        عندما أريد انشاء متغيير أستطيع التعديل فى قيمه
    */

    const v3 = 11;
    /* 
        يدعم نطاق الملف و الدالة و الكائن
        يجب أن أعطيه قيمة
        لا يقبل التعديل فى قيمه
        لا يقبل أن يتم الإعلان عن نفس المتغير فى نفس النطاق

        متى أستخدمه ؟
        عندما أريد انشاء متغيير لا يتم التعديل فى قيمه
    */



    //? الدوال
    /* تستخدم لحفظ الكود بها */
    function f1(a,b,...q){
        // code...
        return 1,a;
    }
    
    let f2 = (a,b)=>{
        return{
            a,
            b,
        };
    };
    // ()=>{}   // e=> e+11   // (a,s,d)=> a+b+c

    f2(()=>11,1);
    f2(function soso(){return 11},1);
    f2(f1(1,2,3),1);

    f1(1,2);
    f1; //لو استدعين فى مكان سيدخل لها قيم معاملاتها تلقائيا
    f2(1,2,3).a;
    f2(f1(11,12,11),11);



    //? browser for FE
    localStorage.setItem(`k1`,`aaa`);
    localStorage.getItem(`k1`);
    localStorage.removeItem(`k1`);
    /* 
        تحذف البيانات مع حذف المتصفح من الجهاز أو حذف البيانات المخزنة به
        انظر لمكان تخزينها بالمتصفح
    */



    //? browser for BE
    document.cookie = `c=11;max-age=${3*365*24*60*60*1000};domain=w.com;path=/;sameSite=Strict`;//Lux
    document.cookie = `c=;max-age=0`;
    /* 
        تحذف البيانات مع حذف المتصفح من الجهاز أو حذف البيانات المخزنة به
        انظر لمكان تخزينها بالمتصفح
    */













//* اختيار ------------------------------------------------
try{}catch(error){}



let vv;
(vv) ? 1 : 0 ;



if(vv){

}else if (vv){

}else{

}



switch (vv){
    case 1:
    case 2:
    case 3:
        //code
        break;
    case `a`:
        //code
        break;
    default:
        //code
}














//* تكرار -----------------------------------------------
do{

}while(vv)



while(vv == 1){

}



while(true){
    break;
}



let ao = [1,2,3];
for (let i = 1; i < 11; i++){
    ao[i] = ao[i] + 1;
}
/* تستخدم عند تكرار كود عدة مرات */



for (let i of ao){

}
/* 
    متى تستخدم ؟
    index بيان له  index عند تكرار كود عدد من المرات ، حسب عدد 
    index عند نسخ أو عرض كل أو بعض قيم بيان له 
    list عند عرض أو إضافة أو تعديل عناصر ب
*/



let opjo = {
    k1: 1,
    k2: 2,
    k3: 3,
};
for (let i in opjo){
    i;
    opjo[i];

    if (vv){
        continue;
    }

    if (vv == 11){
        break;
    }
}
/* 
    متى يستخدم ؟
    عند تكرار كود عدد من المرات حسب عدد مفاتيح كائن
    عند عرض أو نسخ مفاتيح كائن
    عند عرض أو نسخ أو تعديل قيم مفاتيح كائن
*/



let t;
t = setInterval(()=>{},1000);
clearInterval(t);















//* تنفيذ بعد وقت ----------------------------------------
let tt;
tt = setTimeout(()=>{},1000*60*3);
clearTimeout(tt);















//* بيانات -----------------------------------------------
    // أنواع البيانات
        // String
        // Number
        // Boolean
        // null
        // undefined
        // NaN
        // بيانات غير متزامنة

         /* 
            معرفة شكلهم
            معرفة متى يستخدم
            عمليات لهم
            كائناتهم
            دوالهم
            property
            method
        */

        // String
            // شكله
            'sdff' , "sddffg" , `sdfggh`
            '\'" \n \t' , `sss ${1 + 1/* code */}
               '"`
            
            let str = `Mohamed :)`;
            str;
            str[0];

            // متى يستخدم ؟
            /* 
                عندما تريد أن تكتب نص
                كل ما يكتب بين علامات التنصيص يصبح نص
                index هذا البيان له 
            */

            // عمليات
                str += `Noor`;

            // دوال
                btoa();
                atob();

            // property
                str.length;

            // method
                str.replace(/ss\$/g,`ww`);
                str.toUpperCase();
                str.toLowerCase();
                str.trim();

                str[0];
                str.slice(1,6);
                str.includes('');
                str.indexOf('');
                str.lastIndexOf('');
                str.startsWith(``);
                str.endsWith(``);
                str.charCodeAt(``);

        // Number
            11,1.55,-11
            let num = 25;

            // عمليات
                // حسابية
                    // + - * / % ** ()
                    num = num + 1;
                    num += 1;
                    num++;
                    --num;

                // احضار قيم تقريبية
                    // الوسيط / المتوسط / المنوال
                
                //  النسبة الئوية

                // الوقت

            // كائنات
                Math.PI;
                Math.abs();
                Math.sqrt(4);
                Math.max(1,2,3);
                Math.min();
                Math.round();
                Math.ceil();
                Math.floor();
                Math.random()*10;

            // دوال
                parseInt(num);

            // method
                num.toFixed(1);
                num.toLocaleString(`en-US`);

        // Boolean
            true,false,1 > 2
            false,0,'',null,undefined
            let bool = true;

            // عمليات
                // معاملات المقارنة
                    // < > <= >= == === != !==

                // معاملات المقارنة المنطقية
                    // &&  ||  !
                    bool = !bool;

        // null
            null
            let n = null;

        // undefined
            undefined
            let u;

        // NaN
            NaN
            let nan = '11';

            // دوال
            isNaN(num);

        // بيانات غير متزامنة
            // معرفة شكلهم و متى يستخدم
                /* 
                    هى الحصول على بيانات لعرضها فى التطبيق ، من مخازن البيانات فى الكود للتطبيق أو ملفات التطبيق أو ملفات موقع أخر ، وتشغيل و عرض المكان الذى سيعرض به هذه البيانات (قبل ان تصل البيانات او اثناء وصولها) ثم انتظار البيانات التى سيعرضها او يستخدمها اذا لم تكم وصلت بعد
                */
            // عمليات لهم 
                // تحويل مخزن بيانات لغير متزامن
                    async function n(){}
                
                // استدعائها من ملفات
                    let v = await fetch("مسار الملف ")
                    v.ok; /*  لو حصل على البيانات ولم يحدث مشكلة true تكون قيمتها  */



    // معرفة نوع بيان
        typeof num;

    // تحويل بيان لبيان اخر
        let str2 = String(num);
        str2 = num.toString();

        let num2 = Number(str);

        let bool2 = Boolean(str);

    // الأماكن المحفوظ بها البيانات














//* هياكل البيانات
    // Array
        let arr = [1,2,3,4,5,`sss`,[1,2,3],{}]; //يفضل أن تحتوى المصفوفة على بيانات من نفس النوع
        // المصفوفة تتكون من عناصر ، العنصر يتكون من انديكس و قيمته
        // المصفوفة تتكون من انديكسات
        arr;
        arr[1];

        // استخدامها
            /* 
                عند تخزين بيانات معامر تبين بالارقام (مثل 
                list)
                عند تخزين أكثر من بيان لعنصر 
                html 
            */

        // عمليات
            let arr2 = new Array(3);
            arr2[0] = 1;
            arr2[1] = 2;
            arr2[2] = 3;

            arr[1] = 101;

        // كائن
            Array.isArray(arr);
            arr2 = Array.from(str);//لانشاء مصفوفة من كائن لديه انديكسات

        // property
            arr.length;

        // method
            // إضافة
                arr.unshift(11); arr.push(111); arr.splice(1,0, 11,12);
                arr = [...arr,1,2,33]; /* إنشاء مصفوفة جديدة بها المصفوفة القديمة و عناصر أخرى */

            arr.shift(); arr.pop(); arr.splice(1,3);

            arr[1] = 11;
            arr.splice(1,3, 11,12,13);
            arr.copyWithin(1,4);
            let arr = arr.concat(arr2,str);
            arr.reverse();
            arr.sort( (a,b)=> a - b  );
            arr.sort( (a,b)=>{
                let aA = a.toLowerCase();
                let bB = b.toLowerCase();

                if (aA > bB){
                    return +1;
                } else if (aA < bB){
                    return -1;
                } else {
                    return 0;
                }
            } );
            arr.sort( (a,b)=> a.localCompare(b) );
            arr.toSorted(); /*ولكن تنشئ مصفوفة جديدة بدل التعديل على المصفوفة الأصلية sort مثل */
            arr = arr.filter( (v,i,a)=> v > 1 );

            // جمع أو طرح عناصر المصفوفة معا
                let sumArr = arr.reduce((total,num,numStart)=>{
                    return total + num;
                }, 0);
                /* 
                   بنتيجة جمع أو طرح كل عناصر المصفوفة method ترجع هذه ال
                   أنت الذى تحدد جمع أو طرح
                   تحصل على كل عنصر من عناصر المصفوفة بالترتيب
                   لا تعدل على المصفوفة الأصلية
                    تأخذ 2 وسيطة
                    الوسيطة الأولة هى دالة مضمنة 
                    الدالة المضمنة بها 2 معامل اجبارى و 1 اختيارى
                    total تكون قيمته الأولية صفر
                           معه (num) يتم جمع أو طرح العنصر الحالى 
                           بها reduce() بعد الانتهاء من كل عناصر المصفوفة ترجع 
                    num    العنصر الحالى
                    numStart (اختيارى)
                               الذى سيبدأ به index تحديد ال 
                    
                    0   (اختيارى)
                       total هو القيمة الأولية ل 
                */

            arr[1];
            arr.slice(1,5);// (5)
            arr.includes(11);
            arr.indexOf(11);
            arr.lastIndexOf(11);
            arr.find( (v,i,a)=> v > 11 );
            
            arr.forEach( (v,i,a)=>{
                arr[i] = v + 11;
                // تكرار حسب عدد عناصر المصفوفة
                // تعديل فى قيم العناصر
                // عرض قيم أو انديكسات العناصر
                // نسخ قيم أو انديكسات العناصر
            } );

            let arr3 = arr.map( (v,i,a)=>{
                return v - 5;
                // لانشاء مصفوفة جديدة من مصفوفة موجودة
            } );

            arr.map().filter();


    // Object
        let obj = {
            name: `oo`,//property
            num: 11,
            f(){
                this.name;
            },//method
            str,
        };
        obj;
        obj.name;
        obj[`name`];
        obj.f();
        obj[`f()`];

        // استخدامها
            // عندما يكون هناك بيانات أو أوامر خاصين بنفس الشئ و أريد تجميعهم معا ، اجمعهم فى كائن و اسميه باسم ذلك الشئ
            // عندما يكون هناك تصنيفات متعددة لبيانات خاصين بنفس الشئ ، و أريد تجميعهم معا ، بحيث يكون كل بيانات التصنيف معا فى اسم التصنيف و كل التصنيفات معا ، مثل القاموس

        // عمليات
            obj.name = `object`;
            obj.age = 13;//create new key
            let {name} = obj;
        
    // class
        class Cla{
            name = `ccc`;

            constructor(a){
                this.f();
            }

            f(){

            }
        }
         
        let c1 = new Cla(1);
        let c2 = new Cla(2);
        c1.name;

    /* 
        شكلهم
        متى يستخدموا؟
        عمليات عليهم
        كائن
        دالة
        property
        method
    */

    // تحويل هياكل البيانات إلى بيانات
        arr.join(``);//arr >>> str
        str.split(`a`);//str >>> arr
        JSON.stringify(obj);

    









//* استدعاء
    // استدعاء ملفات js فى ملفات أخرى
        // html
        // js >>> js
            import {nname, funF} from './body';
            nname;
            funF();

    // استداعاء عناصر html
        document;
        
        document.head;
        document.title;

        document.body;
        document.body.firstElementChild;
        document.body.lastElementChild;
        document.body.parentElement;

        document.embeds;
        document.images;
        document.links[0];
        document.forms;

        document.getElementById(``);
        document.getElementsByClassName(`a`)[0];
        document.getElementsByClassName(`a`,`d`,`s`);
        document.getElementsByTagName(`h1`)[1];

        document.querySelector(`#ss`);
        document.querySelectorAll(`h1,#ss`)[0];












//* إضافة
    // إنشاء عنصر فى js
        let eeE = document.createElement(`a`);
        eeE.href = ``;
        // العنصر موجود فى js ولكن لم يتم اضافته الى DOM بعد
        // لاضافته ل DOM استخدم أحد طرق الاضافة

    // اضافة عنصر كأبن أخير لعنصر أخر
        let d1 = document.getElementById(`d1`);
        d1.innerHTML += eeE;

    // أضافة عنصر بالنسبة لعنصر أخر
        d1.insertAdjacentElement(`beforeend`,`<h1>gg</h1>`);

    // نقل عنصر كأبن أخير لعنصر
        d1.append(eeE,str);

    // إضافة داخل عنصر
        d1.innerHTML += `ss`;//Element and text
        d1.textContent += `sss`;//text









//* حذف
    // حذف كل الموجود بملف html
        document.write(` `);

    // حذف عنصر
        eeE.remove();

    // حذف ميزة عنصر
        eeE.removeAttribute(`id`);









//* تعديل
    d1.outerHTML = ``;//Element and text
    d1.outerText = ``;//text
    d1.innerHTML = ``;//Element and text
    d1.textContent = ``;//text

    d1.title = `sdf f`;

    d1.setAttribute(`class`,`c a f`);
    let d1Class = d1.classList;
    d1Class.add(`a`,`b`,`c`);
    d1Class.remove(`a`,`b`);
    d1Class.replace(`c`,`cc`);
    d1Class.toggle(`a`);

    d1.style.fontSize = `12px`;









//* استعلام
    // نظام التشغيل
        // نوع الجهاز و نظام التشغيل و المتصفح
            navigator.userAgent.toLowerCase();//device,os,browser

        // هل الجهاز متصل بالانترنت؟
            navigator.onLine;

        // الموقع الجغرافى للجهاز
            navigator.geolocation.getCurrentPosition();// الحصول على الموقع الجغرافى للجهاز مرة واحدة لحظة الطلب فقط
            let locationMap;
            locationMap = navigator.geolocation.watchPosition( position=>{
                        position.coords.longitude;//الموقع الجغرافى على خط الطول
                        position.coords.latitude;// الموقع الجغرافى على خط العرض

                        document.getElementById(`open_street_map`).src = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&amp;layer=mapnik`;

            },error=>{} );// الحصول على الموقع الجغرافى للجهاز باستمرار كل ثوانى
            navigator.geolocation.clearWatch(locationMap);// لالغاء الحصول على الموقع الجغرافى

        // عرض و ارتفاع شاشة الجهاز
            screen.width;
            screen.height;

    // المتصفح
        // ارتفاع و عرض نافذة المتصفح
            // (شاشة العرض + شريط النوان + شريط التبويبات + شريط المفضلة + شريط التمرير...)
            window.outerWidth;
            window.outerHeight;

        // ارتفاع و عرض شاشة المتصفح
            // (المكان الذى تعرض به الصفحة)
            window.innerWidth;
            window.innerHeight;

        // علامات التبويب
            /*  أى صفحة تفتح فى علامة التبويب يتم وضها فى list بالترتيب */
            // عدد الصفحات التى فتحت فيها
                history.length;
            
    // الصفحة
        // رابط الصفحة
            location.href;
        // مسار ملف الصفحة
            location.pathname;
        // بروتوكول نقل الملفات للصفحة
            location.protocol;
        // دومين الصفحة
            location.hostname;

    // العنصر
        let ele = document.getElementById(`ele`);
        // اسم النصر
            ele.nodeName.toLowerCase();

        // التاكد من وجود ميزة به
            ele.hasAttribute(``);
        // التأكد من وجود class به
            ele.classList.contains(``);
        // class
            ele.classList;
        //  قيمة ميزة
            ele.id;

        //  عرض العنصر و ما يحتويه
            ele.outerHTML;
        //  عرض ما يحتويه العنصر
            ele.innerHTML;

        //  عرض نص العنصر
            // بالتنسيقات
                ele.innerText;
            // بدون تنسيقات
                ele.textContent;

        // أبعاد العنصر
            // عرض و ارتفاع العنصر
                ele.clientWidth;
                ele.clientHeight;

            // عرض و ارتفاع العنصر + padding + border
                ele.offsetWidth;
                ele.offsetHeight;

            // padding
                ele.clientTop;

            // border + margin
                ele.offsetTop;

            // عرض scroll الموجودة على محور X لعنصر
                ele.scrollWidth;

            // ارتفاع scroll الموجودة على محور Y لعنصر
                ele.scrollHeight;

            // المسافة من الأعلى التى يمكن لscroll العنصر التمرير لها
                ele.scrollTop;

            // بعد العنصر عن يسار شاشة المتصفح
                ele.getBoundingClientRect().left; //المسافة بين أخر جزء من يسار العنصر و يسار شاشة المتصفح
                ele.getBoundingClientRect().right; // بعد اخر جزء من يمين العنصر و يسار شاشة المتصفح

            // بعد العنصر عن أعلى الشاشة
                ele.getBoundingClientRect().top; // بعد أخر جزء من أعلى العنصر عن أعلى شاشة المتصفح
                ele.getBoundingClientRect().bottom; // المسافة بين أخر جزء من أسفل العنصر و أعلى شاشة المتصفح

    // التاريخ و الوقت
        // كائن التاريخ و الوقت
            let date = new Date(); // يحضر تاريخ دولة و مدينة جهاز المستخدم

        // التاريخ و الوقت حسب دولة و مدينة معينة
            let date1 = new Date().toLocaleString(`en`,{timeZone: `America/New York`});
            let date2 = new Date(date1);

        // التاريخ
            date.getDay();
            date.getDate();
            date.getMonth();
            date.getFullYear();
            date.getUTCMonth();

        // الوقت
            date.getHours();
            date.getMinutes();
            date.getSeconds();
            date.getMilliseconds();
            date.getUTCHours();

        // كائن تنسيق التاريخ و الوقت
            /* 
                كل ما ستكتبه في كائن الوسيطة اختيارى
            */
            let formatte = new Intl.DateTimeFormat(`en-US`,{
                //  المنطقة الزمنية التى سيظهر التاريخ و الوقت الخاصين بها
                    timeZone: `America/New York`,

                // اظهار اسم المنطقة الزمنية 
                    timeZoneName: `long`, /* لها قيمتين :
                                            long لاظهار الاسم بالكامل
                                            short لاظهار اختصار الاسم */

                // اظهار التاريخ
                    /*
                        long : النص كله 
                        short: مختصر النص
                        numeric: رقم صحيح مثل 1
                        2-digit: رقم يتكون من خانتين مثل 01 بدل 1
                    */
                    weekday: `long`, /*(long - short) اليوم فى الاسبوع */
                    day: `numeric`, /* اليوم فى الشهر */
                    month: `long`, /* (long - short - numeric) الشهر  */
                    year: `numeric`, /* (numeric - 2-digit) السنة */

                // اظهار الوقت
                    hour12: true, /*
                     (true - false) تفعيل نظام 12 ساعة أم لا 
                     true: تفعيل نظام 12 ساعة 
                     false: عدم تفعيل نظام 12 ساعة ، و تفعيل نظام 24 ساعة
                    */
                    hour: `numeric`, /* (numeric - 2-digit) */
                    minute: `numeric`, /* (numeric - 22-digit ) */
                    second: `numeric`, /* (numeric - 2-digit) */

            }); /* الوسيطة الأولة كتبت نوع اللغة المرادة للتنسيق - حدد انى اريد اللغة الانجليزية الخاصة بالولايات المتحدة الأمريكية  
                    (اختيارى) */
                
                // اضافة كائن التاريخ لاظهار التنسيقات
                formatte.format(new Date());
                    /* سيظهر من كائن التاريخ و الوقت الذى حددت تنسيقاته فقط بداخل كائن التنسيقات */

        //  مدة عرض الصفحة بالمللى ثانية
            // من لحظة ظهورها إلى الأن
                performance.now();

            // من لحظة معينة إلى لحظة معينة أخرى
                performance.mark(`start`); /* start أو أى اسم أخر مكان */
                performance.mark(`end`); /* end أو أى اسم اخر مكان */
                performance.measure(`time`,`start`,`end`);

    









// property
        // صوت و فديو
            let aud = document.createElement(`audio`);
            aud.duration; /* 
                            يحضر الوقت الكلى لمقطع الصوت و الفديو
                            يكون بالثانية
                            يحضره كرقم نصى
                            يعمل لحظة و أثناء تشغيل المقطع فقط
                            لا يمكن أعطائه قيمة
            */
           aud.currentTime; /* يحضر الوقت الحالى للمقطع بالثانية كرقم نصى */
           aud.currentTime = 100; /* 
                                    يمكن ادخال له قيمة لتكون الوقت الحالى للمقطع
                                    يجب أن تكون القيمة ضمن حدود وقت المقطع
                                    تكتب القيمة من نوع بيان رقمى
                                    يتعامل مع القيمة كثوانى
           */
            aud.volume; /* يحضر مستوى الصوت كرقم نصى بالنسبة المئوية*/
            aud.volume = 0.5; /* 
                                يمكن أن تدخل له قيمة مستوى الصوت كرقم
                                تكون القيمة نسبة مئوية من النو العشرى او الكسرى
                                العشرى تتراوح بين 0 إلى 1 ويمكن و ضع قيمة بينهم مثل 0.3 أى %30
                                الكثرى تكون مثل:
                                    50/100
                                    %أى 50
            */
           aud.volume += 0.1; /* لزيادة %1 لمستوى الصوت*/
           aud.playbackRate; /*
                                يحضر قيمة سرعة تشغيل المقطع 
                                تكون كرقم نصى
                                تكون نسبة مئوية من النوع العشرى
                                تتراوح بين 0 و 2
                                القيمة الافتراضية هى 1 
                                إذا قلت القيمة عن 0 أو زادت عن 2 يحدث مشكلة ، لذلك إذا جعلت شئ يغير فى القيمة فضع شرط ليجعلها فى حدود 0 و 2              
            */
           aud.playbackRate = 0.77;
            aud.playbackRate += 0.1;

    
            












// method
        // صوت و فديو
            aud.play(); /* تشغيل المقطع */
            aud.pause(); /* إيقاف المقطع مؤقتا حتى يتم تشغيله مرة أخرى*/
            aud.load(); /* (ليس تشغيله) إعادة تحميل المقطع من البداية */

        // عناصر الإدخال
            let inp = document.createElement(`input`);
            inp.setCustomValidity(``); /* إظهار رسالة فى صندوق يخرج من عنصر الإدخال */













// تنقل
        // تنقل بين الصفحات
            // افتح صفحة جديدة فى نفس علامة التبويب الحالية
                // مع إمكانية الرجوع للصفحة الحالية
                    location.assign(`رابط الصفحة الجديدة`); 
                    
                // مع عدم إمكانية الرجوع للصفحة الحالية
                    location.replace(`رابط الصفحة الجديدة`);

            // انتقال لصفحة جديدة فى علامة تبويب جديدة
                window.open(`رابط الصفحة الجديدة`);

            // انتقال لصفحة سابقة
                history.go(-1); /* اكتب رقم ترتيب الصفحة السابقة التى تريد الرجوع لها
                -1,-2,-3,... */
            // انتقال لصفحة تالية
                history.go(1); /* اكتب رقم ترتيب الصفحة التالية التى تريد الذهاب لها
                1,2,3,... */

        // تنقل داخل الصفحة
            // تنقل لأحداثيات معينة
                /* 
                    له قيمتان
                    (x,y)
                    x: يظهرعلى شاشة المتصفح المنطقة حسب القيمة المدخلة بالبكسل بالنسبة ليسار العنصر
                    y: يظهرعلى شاشة المتصفح المنطقة حسب القيمة المدخلة بالبكسل بالنسبة لأعلى العنصر
                */
                document.body.scrollTo(100,10); /* للصفحة */
                ele.scrollTo(); /* للعنصر */

            // تنقل حسب المكان الظاهر على الشاشة
                /* 
                    له قيمتان
                    (x,y)
                    x: لنقلك داخل العنصر المسافة التى ادخلتها بالبكسل 
                        لو القيمة + ينقلك اتجاه اليمين
                        لو القيمة - ينقلك اتجاه اليسار
                    y: لنقلك داخل العنصر المسافة التى ادخلتها بالبكسل 
                        لو القيمة + ينقلك اتجاه الأعلى
                        لو القيمة - ينقلك اتجاه الأسفل
                */
                document.body.scrollBy(0,1000); /* للصفحة */
                ele.scrollBy(); /* للعنصر */













// تحديث
    // تحديث الصفحة
        location.reload();










// طباعة
    // فتح نافذة طباة الصفحة
        print();












// إيقاف
    // إيقاف الصفحة عن التحميل
        window.stop();










// إغلاق
    // إغلاق الصفحة
        window.close();










// الأحداث
    // انقطاع الانترنت
        window.addEventListener(`offline`);

    // عودة الانترنت
        window.addEventListener(`online`);

    // اكتمال تحميل المحتوى
        document.body.addEventListener(`load`); /* للصفحة */
        ele.addEventListener(`load`); /* لعنصر */

    // صوت و فديو
        // اكتمل تحميل المحتوى
            aud.addEventListener(`load`);

        // فى وضع التشغيل
            aud.addEventListener(`play`);

        // متوقف
            aud.addEventListener(`pause`);

        // تغيير فى الوقت الحالى للمقطع
            aud.addEventListener(`timeupdate`);

        // الوقت الحالى للمقطع = الوقت الكلى للمقطع
            /* وصل الوقت الحالى للمقطع لنهاية وقت  المقطع */
            aud.addEventListener(`ended`);


    // form
        let form = document.createElement(`form`);

        // حذف كل القيم المدخلة داخلها
            form.addEventListener(`reset`);

        // ارسال كل القيم المدخلة داخلها للخادم
            form.addEventListener(`submit`);
            // التأكد من القيم المدخلة قبل إرسالها للخادم
                form.addEventListener(`submit`,e=>{
                    if(str){
                        return; /* لو صحيحة  */
                    } else {
                        e.preventDefault(); /* بها خطأ ، يتم إلغاء الإرسال */
                    }
                });


    // عناصر الإدخال
        inp.addEventListener(`focus`); /* (تمم تحديده لاستحدامه) العنصر نشط */
        inp.addEventListener(`blur`); /* العنصر غير نشط */
        inp.addEventListener(`select`); /* مؤشر الكتابة نشط فى نصر الأدخال */
        inp.addEventListener(`input`); /* حدث تغيير الأن فى قيمة عنصر الادخال
                                         radio , checkbox , select لا تعمل مع                
        */
        inp.addEventListener(`change`); /* حدث تغيير فى قيمة عنصر الادخال و تم إعلان انتهاء ادخال القيمة
                                           إعلان انتهاء الادخال يكون عند الضغط على انتر او خارج العنصر
                                         radio , checkbox  يستخدم هذا الحدث أيضا لإعلان حدوث تغيير فى تنشيط أو إلغاء تنشيط 
                                         وفى إعلان حدوث تغيير فى قيمة select
       */
        inp.addEventListener(`invalid`); /* تم ادخال قيمة من نوع بيان لا يقبله العنصر */

    // نسخ و قص و لصق
        inp.addEventListener(`copy`);
        inp.addEventListener(`cut`);
        inp.addEventListener(`paste`);

    // طباعة
        addEventListener(`beforeprint`); /* اثناء نافذة إعدادات الطباعة */
        addEventListener(`afterprint`); /* أثناء نافذة اعلان انتهاء الطباعة */

    // تمرير
        window.addEventListener(`scroll`); /* حدوث تمرير فى الصفحة */

    // اغلاق
        addEventListener(`beforeunload`,e=> ""); /* قبل إغلاق الصفحة 
                                                    الدالة التى ترجع ب علامة تنصيص فارغة ، تظهر رسالة تسأل إذا كنت تريد إغلاق الصفحة ، لو وافقت يتم الاغلاق ، لو رفضت يلغغى الاغلاق
        */

    // لوحة المفاتيح
        /* تعمل على الصفحة أو العنصر ، حسب ما تشغله عليه */
        inp.addEventListener(`keydown`); /* زر مضغوط عليه */
        inp.addEventListener(`keyup`); /* انتهى الضغط على زر */
        // property لها
            inp.addEventListener(`keydown`,e=>{
                e.key; /* تحضر قيمة المفتاح
                           القيمة متغيرة
                           A مثل: ش 
                */
                e.code; /* تحضر كود المفتاح
                            لكل مفتاح كود خاص به ، لا يتغير 
                */
            });


    // الفأرة
        addEventListener(`click`); /* ضغطة بزر الفأرة الأيمن */
        addEventListener(`dblclick`); /* ضغطتان بزر الفأرة الأيمن */
        addEventListener(`auxclick`); /* ضغطة بزر الفأرة الأيسر */
        addEventListener(`wheel`,e=>{
            e.deltaX; /* X يحضر قيمة الزر الموجود باتجاه محور 
                         لو تحرك على اليمين تحضر قيمة موجبة
                         لو تحرك على اليسار تحضر قيمة سالبة
                         لم يتحرك تحضر 0
            */

            e.deltaY; /* Y يحضر قيمة الزر الموجود باتجاه محور 
                         لو تحرك لأعلى تحضر قيمة موجبة
                         لو تحرك لأسفل تحضر قيمة سالبة
                         لم يتحرك تحضر صفر
            */

            if (deltaY > 0){

            } else {

            }
        }); /* عند تحريك زر التمرير فى الفأرة */

        addEventListener(`mouseover`); /* مؤشر الفأرة فوق العنصر */
        addEventListener(`mousedown`); /* مؤشر الفأرة يضغط على العنصر */
        addEventListener(`mousemove`); /* مؤشر الفأرة يتحرك على العنصر  */
        addEventListener(`mouseup`); /* مؤشر الفأرة أنه الضغط على العنصر  */
        addEventListener(`mouseout`); /* مؤشر الفأرة غادر من على العنصر  */

        // عند تحريك العنصر بمؤشر الفأرة
            addEventListener(`pointerdown`); /* = mousedown */
            addEventListener(`pointermove`); /* = mousemove */
            addEventListener(`pointerup`); /* = mouseup */

        // تحديد احدثيات مؤشر الفأرة
            /* 
                تعمل فى كود الرد لى أحداث الفأرة 
                تكون القيمة بالبكسل
            */

            // بالنسبة للصفحة
                addEventListener(`click`,e=>{
                    e.pageX; /* بالنسبة ليسار الصفحة */
                    e.pageY; /* بالنسبة لأعلى الصفحة */
                });

            // بالنسبة لشاشة المتصفح
                addEventListener(`mouseover`,e=>{
                    e.clientX; /* بالنسبة ليسار شاشة المتصفح */
                    e.clientY; /* بالنسبة لأعلى شاشة المتصفح */
                });

    // ظهور أو اختفاء جزء من عنصر
        /* نستخدم كائن طريقة عمله تشبه الأحداث */
        /* 
             دالة الكائن تعمل إذا ظهرت أو اختفت الأجزاء التى يتم مراقبتها من العنصر المستدعى على شاشة المتصفح
            المعامل الخاص بها يأخذ مصفوفة بها العديد من البيانات الخاصة بالعنصر
        */
        let elementShow = new IntersectionObserver(e=>{

            if (e[0].isIntersecting){ /* هل الأجزاء المراقبة للعنصر المراقب ظهرت */
                if (e[0].intersectionRatio == 0.3){ /*
                                                         (threshold يجب أن يكون المقدار مسجل فى )  هل ظهر أو اختفى من العنصر هذا المقدار على شاشة المتصفح 
                                                         تستخدم إذا كنت حددت أكثر من قيمة فى threshold
                                                    */
                }
                e[0].target; /* تستدعى العنصر المراقب نفسه */
                document.getElementsByClassName(e[0].target.id)[0]; /*
                                                                            استخدم هذه الطريقة عندما أريد أن أجعل قائمة بها عناصر لكل جزء فى الموقع 
                                                                             وأريد حين يظهر الجزء من الموقع الخاص بعنصر القائمة على شاشة المتتصفح يتغير لون عنصر القائمة
                                                                             id  اضع لكل جزء من الموقع الذى له عنصر فى القائمة 
                                                                            الخاص بالجزء الخاص به id له نفس اسم  class ثم أضع لكل عنصر فى القائمة 
                                                                        */

            } else {

            }

        },{root:null,rootMargin:`0px 0px 0px 0px`,threshold:[0.3,0.5,1]});
        /* 
            root تستدعى فيها العنصر الذى سيتم مراقبة ظهوره
                    null يتم استدعاء الصفحة بالكامل
            
            rootMargin لزيادة مساحة حول العنصر المراقب لمراقبتها معه
                        تستخدم عندما تريد تنفيذ شئ عندما تقترب من العنصر المراقب بمقدار معين 
                        (left top right bottom) قيمها بالبكسل 
            
            threshold بها مصفوفة تضع بها عنصر أو أكثر هذه العناصر هى المقدار الذى تعمل دالة الكائن عند ظهوره أو اختفاء هذا الجزء من العنصر المحدد
            
        */

        // وضع العناصر التى سيتم مراقبتها
            elementShow.observe(document.getElementById(``));
            /* 
                يمكن أن أضع العدد الذى أريده من العناصر ليتم مراقبة رضها على شاشة المتصفح 
                كل عنصر أضعه بأمر خاص له
            */

        // إلغاء عنصر من مراقبته
            elementShow.unobserve(document.getElementById(``));

        // تعطيل كان المراقبة
            elementShow.disconnect();












// تنفيذ حدث
    inp.click(); /* ضغط بزر الفأرة الأيسر على العنصر */
    inp.focus(); /* تنشيط العننصر */
    inp.blur(); /* إلغاء تنشيط العنصر */
    form.reset(); /* form إلغاء كل البيانات المدخلة فى عناصر الإدخال بال  */
    form.submit(); /* إلى الخادم form إرسال كل البيانات المدخلة فى عناصر الإدخال بال  */











// الرد على الحدث
    // html فى 
        /* 
            أنشئ دالة بها الكود المراد تنفيذه
            html استدعيه فى ميزة الرد على الحدث فى ملف 
        */
        /* 1) الدالة */
        function yea (){

        }
        /* 2) index.html استدعيها فى ميزة الرد على الحدث فى ملف  */

    // استدعاء ميزة الرد على الحدث
        inp.onclick = e=>{};
        /* المعامل فى دالة الرد على الحدث يحصل على الحدث نفسه و بياناته لحظى حدوثه */
        
        inp.onclick = false; /* إلغاء الدالة المكتوبة بها */

    // addEventListener الرد على الحدث ب 
        inp.addEventListener(`click`,e=>{},true);
        /* الوسيطة الثالثة اختيارية وهى لجعل الرد على الحدث يتم فى مرحلة الالتقاط أم لا إذا كان تابع لعنصر أب لعنصر أخر */

    // addEventListener إلغاء الرد على حدث أنشئ ب 
        function eve1 (){}
        inp.addEventListener(`click`,eve1);
        inp.removeEventListener(`click`,eve1);
        /* الالغاء يتم لحظة قرأتها أى سيتم الإلغاء قبل الرد على الحدث لذلك يتم وضعها فى شرط أو حدث */

    // أوامر فى دالة الرد على الحدث
        inp.addEventListener(`click`,e=>{
            e.target; /* استدعاء العنصر الذى تم عليه الحدث */
            e.preventDefault(); /* الغاء الرد الافتراضى من العنصر على الحدث */
        });

    // معالج الحدث
        /* هو الذى يقوم بتشغيل كود الرد على الحدث */
<<<<<<< HEAD













// التشغيل
    /* 
       js بعد تحميل الصفحة و ملفاتها يبدأ تنفيذ كود 
       يتم تنفيذ الأوامر المتزامنة أولا
       الأوامر غير المتزامنة مثل الرد على حدث و انتظار لوقت مين يتم إرسال نسخة منها للمتصفح
       المخازن يتم حفظها فى الرام
       عندما يصل لكود تشغيل مخزن يضعه فى مرجع و يضع به مكانه
        ثم يذهب لمكان كوده و ينفذه 
       ثم يأخذ ناتج تنفيذه و يذهب للمرجع و يضعه فى مكان تنفيذ المخزن و يحذفه من المرجع
       الأوامر غير المتزامنة عندما يحدث ما يشغلها يتم وضعها فى طابور 
       عندما يكون المرجع فارغ ترسل اليه ليتم تنفيذها
    */













// قبل التسليم
    /* 
       و إعطائها للعميل فى مجلد منفصل فى حال أراد التعديل على الكود js انشاء نسخة من ملفات 
       تشفير و ضغط الملفات الأصلية التى سيعمل بها الموقع 
    */












// عمليات خاصة
    // تحريك عنصر من مكانه
        /* (Code/js/project/p1.js) اذهب إلى ملف  */

    // إنشاء شريط للتحكم بمقطع صوت أو فديو
        /* (Code/js/project/p2.js) اذهب إلى ملف */
		///
=======
        
>>>>>>> 450bc8a64e5337b29f691cdb6b9e83035436b5f4















        
    















            
            









    




