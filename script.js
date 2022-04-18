

// 0 - 4, 1 - core, 2 - ext, 3 - core(sci), 4 - ext(sci)
let paper = [[1,2,3,4], [1,3], [2,4], [1,3,'5/6'], [2,4,'5/6']]

let sub_n = {
    'math_1': "0580 Maths (Core)",
    'math_2': "0580 Maths (Extended)",
    'efl': "0500 EFL",
    "chem_2": "0620 Chemistry (Extended)", 
    "chem_1": "0620 Chemistry (Core)", 
    "phy_1": "0410 Physics (Core)", 
    "phy_2": "0410 Physics (Extended)",
    "bio_1": "0610 Biology (Core)", 
    "bio_2": "0610 Biology (Extended)", 
    "econ": "0455 Economics", 
    "mand_f": "0547 Chinese (Mandarin) Foreign Language", 
    "ict": "0417 ICT", 
    "math_a": "0606 Maths Additional", 
    "busi": "0450 Business Studies"
}

let total = {
    'math_1': [56, 104, 160],
    'math_2': [70, 130, 200],
    'efl': [80, 80, 160],
    'chem_2': [40, 80, 40, 200],
    'chem_1': [40, 80, 40, 200], 
    'phy_1': [40, 80, 40, 200],
    'phy_2': [40, 80, 40, 200], 
    'bio_1': [40, 80, 40, 200], 
    'bio_2': [40, 80, 40, 200],
    'econ': [30, 90, 150], 
    'mand_f': [30, 36, 100, 45, 200], 
    'ict': [100, 80, 80, 300], 
    'math_a': [80, 80, 160], 
    'busi': [80, 80, 160]
}

let weight = {
    'math_1': [1, 1],
    'math_2': [1, 1],
    'efl': [1, 1],
    'chem_2': [1.5, 1.25, 1], 
    'chem_1': [1.5, 1.25, 1], 
    'phy_1': [1.5, 1.25, 1], 
    'phy_2': [1.5, 1.25, 1], 
    'bio_1': [1.5, 1.25, 1], 
    'bio_2': [1.5, 1.25, 1], 
    'econ': [1.5, 1.16667],
    'mand_f': [1.66667, 1.38889, 0.5, 1.11111], 
    'ict': [1.2, 1.125, 1.125], 
    'math_a': [1, 1],
    'busi': [1, 1]

}



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
            var after_w = score * weight_n


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
        document.getElementById('result').innerHTML = Math.round(result); 
        document.getElementById('total').innerHTML = real_total; 
    }
    
}


function refresh() {
    document.location.reload(true);
}