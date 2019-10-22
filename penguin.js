var PengPromise = d3.json("classData.json")
PengPromise.then(function(penguin)
{
console.log("penguin", penguin)
    Getimage(penguin)
    console.log(alldata)
    
},
function(err)
{
console.log("fail", err)
})

var Getimage = function(penguin)
{
d3.select("#table")
    .append("tr")
    .selectAll("tr")
    .data(penguin)
    .enter()
    .append("tr")
    .append("td")
    .append("img")
    .attr("src", function(d)
         {
    return "/penguins/"+d.picture;
})
    
}
var anygrade = function(subject)
    {
        return subject.grade;
    }
var Getdata = function(penguin)
{
   var data = {}
   data.quizmean = d3.mean(penguin.quizes, anygrade)
    data.hwmean = d3.mean(penguin.homework, anygrade)
    data.testmean = d3.mean(penguin.test, anygrade)
    return data
}
var alldata = d3.map(Getdata)
