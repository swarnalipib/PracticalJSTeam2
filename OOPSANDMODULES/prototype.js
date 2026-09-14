//


//Example
function student()
{
this.name='john';
this.gender='male';
}
student.prototype.age=45;
student.age =45;
stu1 = new student();
console.log(stu1.name,stu1.gender,stu1.age);
stu2 = new student();
console.log(stu2.name,stu2.gender,stu2.age);

//Class to be added


class employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

    employee.prototype.esalary=50000;
    employee.prototype.display= function()
                                {
                                console.log(this.eid,this.ename,this.esalary);    
                                }
    empj=new employee(34,"john");

    //console.log(empj.eid,empj.ename,empj.esalary); //inplace of using console of this using function to display
    empj.display();
    empj2=new employee(35,"swarna");
    empj2.display();
   // console.log(empj2.eid,empj2.ename,empj2.esalary);
