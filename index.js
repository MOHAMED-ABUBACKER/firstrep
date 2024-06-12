
var alreadypagecontent = document.querySelector(".containerdiv")
var normalcontainer = document.getElementById("normalcontent")
        function btnremov(event) {
            event.target.parentElement.remove()
        }
        
        
        //addpopup
        var popupoverlay = document.querySelector(".popup-overlay")
        var popupbo = document.querySelector(".popupbox")
        var addpopupbtn = document.querySelector(".add-button")
        
        addpopupbtn.addEventListener("click", function(event){
            event.preventDefault();
            popupoverlay.style.display = "block"
            popupbo.style.display = "block"
        })
        // ......................................................

        //popup addbtn
        

        // na add button click pannathu yennaku containerdiv kulla oru div create agi aduthu adthu tag create agi show aganum
        
        //needed:  
        // popaddbtn - cause click pannanuthum content maari show aganum
        // containerdiv - select pannanum cause ithukulla dhaan yella contentum venum appa dhan style oda varum
        //intha containerdiv kulla yenna maari venum apdina 
        // oru title-input          - h2
        // next subtitle-input      - h5
        // next description- input  - textarea

        // intha 3 um select pannanum cause yennaku intha 3 la irukura value yennaku venum and aprm dhaan na showcontent la irukura maari create pannanum like h2, h5, textarea

// containerdiv, addbtn, title-input, subtitle-input, discription-content 

        var popaddbtn = document.querySelector("#popadd-btn")
        var container = document.querySelector(".containerdiv")
        //intha container ah getElementbyid vachi get panna work agala 
        // because namma intha container ulla neraiya tag ah insert panna porom so work agala ... but querry selector vachi summa get pannrathuku get pannalaam

        //select input id
        var titleinput = document.getElementById("title-input")//h2
        var subtitleinput = document.getElementById("subtitle-input")//h5
        var descriptioninput = document.getElementById("description-input")//description

        


        popaddbtn.addEventListener("click", function(event) {
            event.preventDefault();

           

            var newdiv = document.createElement("div")
            newdiv.setAttribute("id","normalcontent")
            //ithula oru div create panni id um create panniten
            // ippo id ulla yenna venum nu innerHTML la sollanum

            // `` = ithuku peru therla but ithu dhan nammaku neraiya textcontent  ah orey inner html la create panni thara poguthu....itho ungalukaga

            // ippo yennaku oru h2 theva na <h2></h2><br ippadi poduven
            // but ippo yennaku intha h2 kku pathila yennaku input la kudukura value venum so ${inputid.value }nu kudukanum.

            //ithu ` tick ulla dhaan yellam kudukanum
            if (titleinput.value && subtitleinput.value && descriptioninput.value) {
            newdiv.innerHTML = 
            ` 
            <h2 style="font-family:  Agbalumo, sans-serif;">${titleinput.value}</h2><br>
            <h5>${subtitleinput.value}</h5>
            <p >${descriptioninput.value}</p><br>
            <button onclick="btnremov(event)">Remove</button> 
            ` //main
            container.append(newdiv)
            
            // after i click this add button i want to close overlay and popupbox also
            popupoverlay.style.display = "none"
            popupbo.style.display = "none"

            
            document.getElementById("myform").reset()
        }
            else{
                alert("Please Fill in the Field")
            }
            
        })

  













// .............................................................
        //popup cancelbt
        var popupcancel = document.getElementById("popcancel-btn")

        popupcancel.addEventListener("click", function(event){
            event.preventDefault();
            popupoverlay.style.display = "none"
            popupbo.style.display = "none"
            // console.log("cancel")
        })