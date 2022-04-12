let sub_n = {
    'math_1': "Maths (Core)",
    'math_2': "Maths (Extended)",
    'efl': "EFL"
}

let total = {
    'math_1': [56, 104, 200],
    'math_2': [70, 130, 200],
    'efl': [80, 80, 160]
}

let weight = {
    'math_1': [0.35, 0.65],
    'math_2': [0.35, 0.65],
    'efl': [0.50, 0.50]
}

let paper = [[1,2,3,4], [1,3], [2,4], [1,3,'5/6'], [2,4,'5/6']]

console.log(total['math_1'][0])
console.log(document.getElementById('label1').innerHTML)

var short;
var name;

function subject(subjectname, element) {
    
    window.name = sub_n[subjectname]
    document.getElementById('subject').innerHTML = window.name;
    var papers = Number(element.getAttribute("data-papers"));
    console.log('Paper id: ' + papers)

    window.short = subjectname;
    console.log(window.short);

    var w_short = window.short;

    for (let i = 1; i < 5; i++) {
        var row_id = "row" + i
        console.log("row_id: "+ row_id)
        if (i <= weight[w_short].length) {
            document.getElementById(row_id).style.display = "table-row";
        } else {
            document.getElementById(row_id).style.display = "none";
        }
        

    }


        
        for (let i = 0; i < weight[w_short].length; i++) {
            var c = i+1

            var paper_label = "Paper " + paper[papers][i] + ":"
            var label_id = "label" + c;
            
            var total_n = total[w_short][i];
            var weight_n = weight[w_short][i];

            var score_id = "score" + c

            var total_id = "total" + c
            var per_id = "per" + c
            var weight_id = "weight" + c
            var after_w_id = "a_w" + c

            document.getElementById(label_id).innerHTML = paper_label;
            document.getElementById(score_id).value = 0;

            document.getElementById(total_id).innerHTML = total_n;
            document.getElementById(per_id).innerHTML = '';
            document.getElementById(weight_id).innerHTML = weight_n;
            document.getElementById(after_w_id).innerHTML = '';    

        }
        
        
        total_max = total[w_short].length-1
        document.getElementById('total').innerHTML = total[w_short][total_max];

}

function scores() {
    var subjectname = document.getElementById('subject').innerHTML;
    if (subjectname == "Subject") {
        alert("Choose a subject first!");
    } else {
        var w_short = window.short;
        var score1 = Number(document.getElementById('score1').value);
        var score2 = Number(document.getElementById('score2').value);
        console.log("score1 is " + score1)
        console.log("score2 is " + score2)
        console.log("Subject name is " + subjectname)

        console.log("window" + window.name);
        
        console.log("length" + total[w_short].length);

        var result = 0;
        
        for (let i = 0; i < weight[w_short].length; i++) {
            var c = i+1
            var score_id = "score" + c
            
            var score = Number(document.getElementById(score_id).value);

            var total_n = total[w_short][i];
            var per = score / total[w_short][i];
            var weight_n = weight[w_short][i];
            var after_w = per * weight_n


            var total_id = "total" + c
            var per_id = "per" + c
            var weight_id = "weight" + c
            var after_w_id = "a_w" + c

            document.getElementById(total_id).innerHTML = total_n;
            document.getElementById(per_id).innerHTML = per;
            document.getElementById(weight_id).innerHTML = weight_n;
            document.getElementById(after_w_id).innerHTML = after_w;    

            result = after_w + result;
        }
        
        
        total_max = total[w_short].length-1
        real_total =  Number(total[w_short][total_max])
        console.log("result: " + result);
        document.getElementById('result').innerHTML = result*real_total; 
        document.getElementById('total').innerHTML = real_total; 
    }
    
}


function refresh() {
    document.location.reload(true);
    
}