/* (Code/html/project/p1.html) سيتم انشاء العناصر فى ملف  */

class P1{
    parent = document.getElementsByClassName(`d1`)[0];
    child = document.getElementsByClassName(`d2`)[0];

    constructor(){
        this.clickOnChlid()
    }

    clickOnChlid(){
        let parentLeft;
        let parentRight;

        let clickOnChildForEvent = e=>{
            parentLeft = Number(this.parent.getBoundingClientRect().left);
            parentRight = Number(this.parent.getBoundingClientRect().right) - 25;
            
            this.moveOnParent(parentLeft, parentRight);
        };

        this.child.addEventListener(`pointerdown`,clickOnChildForEvent);
    }


        moveOnParent(parentLeft, parentRight){
            let pointerPositionOnScreen;
            let pointerPositionOnParent;

            let moveOnParentEvent = e=>{
                pointerPositionOnScreen = Number(e.clientX);
                pointerPositionOnParent = pointerPositionOnScreen - parentLeft;

                if ((pointerPositionOnScreen > parentLeft) && (pointerPositionOnScreen < parentRight) ){
                    this.childGoMove(pointerPositionOnParent);
                }
            };

            this.parent.addEventListener(`pointermove`,moveOnParentEvent);
            this.stopMove(moveOnParentEvent);
        }


            childGoMove(pointerPositionOnParent){
                this.child.style.left = `${pointerPositionOnParent}px`;
            }

            stopMove(moveOnParentEvent){
                document.addEventListener(`pointerup`,e=>{
                    this.parent.removeEventListener(`pointermove`,moveOnParentEvent);
                });

            }
}

/*  run */
let p1 = new P1();