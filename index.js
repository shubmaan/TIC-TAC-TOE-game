const box = document.querySelectorAll(".box");
document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
});
let Try = 1;
const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let val = 1;
for (let i of box) {

    i.addEventListener("click", (e) => {
        if (val === 1) {
            i.textContent = "X";
            Try++;
            val = 2;
        } else if (val === 2) {
            i.textContent = "O";
            val = 1;
            Try++;
            
        }
        i.disabled = true;
        chackWinner()
        
        

    });
}

function disabledBtn(){
    for (let i of box){
        i.disabled = true;
    }
}

function chackWinner() {
    const h2 = document.querySelector("h2");
    for(let list of winList){
        
        
        if(box[list[0]].textContent===box[list[1]].textContent 
        && box[list[1]].textContent === box[list[2]].textContent
        && box[list[0]].textContent !== ""){
            h2.textContent = `PLAYER WITH '${box[list[0]].textContent}' WINS`;
            disabledBtn()
            return;
        }
    }
    if(Try === 10 ){
            h2.textContent = "DRAW";
            
    }
}