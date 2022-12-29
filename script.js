var info = " ";
var n1=" ";
var n2 =" ";
fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((data) => {
        return data.json(); 
    })
    .then((objectData) => {
        // console.log(objectData);
        for (var i = 0; i < objectData.Employees.length; i++) {
            const obj = objectData.Employees[i];
            info += "<tr><td>" + obj.Name + "</td>";
            info += "<td>" + obj.Address + "</td>";
            info += "<td>" + obj.Salary + "</td>";
            info += "<td>" + obj.DateOfJoining + "</td></tr>";
            if(obj.Salary > 50000){
                n1+=""+obj.Name+", ";
            }
            
            if(obj.DateOfJoining[3] =='1' && obj.DateOfJoining[4] =='2'){
                n2+=""+obj.Name+", ";
            }
        }
        document.getElementById("tb").innerHTML = info;
        document.getElementById('s').innerHTML=n1;
        document.getElementById('m').innerHTML=n2;

    });