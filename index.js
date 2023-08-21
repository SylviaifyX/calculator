
let activeBtn = document.getElementById("active");
let birthyear = document.getElementById("year")
let monthday = document.getElementById("month")
let Dday = document.getElementById("day")
let message = document.getElementsByClassName("message");
let Year_result = document.getElementById("years_result");
let Month_result = document.getElementById("months_result");
let Day_result = document.getElementById("days_result");
 

function calculateAge(){
    /*  testing code  */
    // let dob = parseInt(new Date().getFullYear());
    // let year = parseInt(new Date(birthyear.value).getFullYear());
    // let result = dob - year;
    // console.log("your age is:", result);
    /*  testing code end*/


    
    /* getting input values */
    let inputYear = parseInt(birthyear.value);
    let inputMonth = parseInt(monthday.value);
    let inputDday = parseInt(Dday.value);


    /* getting new Date */
    let new_date = new Date();

    let User_date = new_date.getDate();
    let User_month = 1 + new_date.getMonth();
    let User_year = new_date.getFullYear();
    let user_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    /* calculating the age */
    if (inputDday > User_date){
        User_date = User_date + user_month[User_month - 1];
        User_month = User_month - 1;
    }else{
        if (inputMonth > User_month){
            User_month = User_month + 12;
            User_year = User_year - 1;
        }
    }
    let  age = User_date - inputDday;
    let  year = User_year - inputYear;
    let month = User_month - inputMonth;

    // if (User_date >= inputDday){
    //     User_date = User_date - inputDday;

    // }else{
    //     User_date--;
    //     User_date = user_month + User_date - inputDday
    // }

    // if(User_month >= inputMonth){
    //     User_month = User_month - inputMonth ;
    // }else{
    //     User_month--;
    //     User_month = 12 + User_month - inputMonth ;
    // }

    // if (inputDday.value > User_date){
    //     let User_date = User_date + user_month[User_month -1];
    //     let User_month = User_month -1
    // }else{
    //     if (inputMonth.value > User_month){
    //         let User_month = User_month + 12;
    //         let User_year = User_year - 1;
    //     }
    // }

    
    Year_result.innerHTML = year;
    Month_result.innerHTML = month;
    Day_result.innerHTML = age  
    
    let storage ={
        age: age,
        year: year,
        month: month,
    }
   localStorage.setItem("result", JSON.stringify(storage));

   let RetriveDate = JSON.parse(localStorage.getItem("result"))
   console.log();(RetriveDate);
    
}




activeBtn.addEventListener("click", function (){
    calculateAge()
   
})