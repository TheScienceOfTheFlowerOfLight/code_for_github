// إنشاء شريط للتحكم بمقطع صوت أو فديو

/*  (Code/html/project/p2.html) العناصر فى ملف */

class P2{
    sound = document.getElementById(`sound`);
    controlForSound = document.getElementById(`controlForSound`);
    on_off = document.getElementsByClassName(`on_off`)[0];

    constructor(){
        this.onOff();
        this.range();
    }

    /* on_off ------------------------------------------*/
        onOrOff;

        onOff(){
            this.on_off.addEventListener(`click`,e=>{
                if (this.onOrOff === false){
                    this.on();
                }else{
                    this.off();
                }
            });
        }

        /* on */
            on(){
                this.sound.play();
                this.onOrOff = true;
            }

        /* off */
            off(){
                this.sound.pause();
                this.onOrOff = false;
            }

    

    /* range ---------------------------------------------------*/
        range(){
            this.rangeEqualDuration();
            this.takeCurrenttime();
            this.controlWithCurrenttime();
        }

        /* range == duration */
            rangeEqualDuration(){
                this.sound.addEventListener(`play`,e=>{
                    this.controlForSound.max = Number(this.sound.duration);
                });
            }

        /* takeCurrenttime */
            takeCurrenttime(){
                this.sound.addEventListener(`timeupdate`,e=>{
                    this.controlForSound.value = Number(this.sound.currentTime);
                });
            }

        /* contorWithCurrentime */
            controlWithCurrenttime(){
                this.controlForSound.addEventListener(`input`,e=>{
                    this.sound.currentTime = Number(this.controlForSound.value);
                });
            }



}

// *run
let p2 = new P2();