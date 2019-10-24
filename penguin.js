var penguinPromise = d3.json("penguins/classData.json")
    penguinPromise.then(
        function(penguins)
        {
            Maketable(penguins)
            GetImage(penguins)
            Quiz(penguins)
            HW(penguins)
            Tests(penguins)
            finalgrade(penguins)
        },
        
        function(err)
        {
        console.log("fail", err)
        })     
var Maketable = function(penguins)
    {
        d3.select("tbody")
            .selectAll("tr")
            .data(penguins)
            .enter()
            .append("tr")
    }

var GetImage = function(penguins)
    {
        d3.selectAll("tbody>tr")
        .append("img")
        .attr("src", function(penguins)
            {
              return "penguins/" + penguins.picture;
            })
        
    {
        d3.selectAll("tbody>tr")
        .append("td")
        .text(function(grades)
        {
            return Quiz(grades)
            
         })
    }
    {
        d3.selectAll("tbody>tr")
        .append("td")
        .text(function(grades)
        {
            return HW(grades)
        })
    }
    {
        d3.selectAll("tbody>tr")
        .append("td")
        .text(function(grades)
        {
            return Tests(grades)
        })
    }
        {
        d3.selectAll("tbody>tr")
        .append("td")
        .text(function(penguins)
        {
           var finalgrade = d3.mean(penguins.quizes, getGrade)*2 + d3.mean(penguins.homework, getGrade)*.3 + d3.mean(penguins.test, getGrade)*.3 + penguins.final[0].grade*.35
         
         return finalgrade
        })
             .style("background-color",function(penguins)
    {
         var finalgrade = d3.mean(penguins.quizes, getGrade)*2 + d3.mean(penguins.homework, getGrade)*.3 + d3.mean(penguins.test, getGrade)*.3 + penguins.final[0].grade*.35
         
         
    if(finalgrade < 70)
        {
             return "red";  
        }
    
    })
            
    }
    }

var getGrade = function(quiz)
{
    return quiz.grade;
}

var Quiz = function(peng)
{

    return d3.mean(peng.quizes, getGrade)
} 

var HW = function(peng)
{
    return d3.mean(peng.homework, getGrade)
}

var Tests = function(peng)
{
    return d3.mean(peng.test, getGrade)
}


    