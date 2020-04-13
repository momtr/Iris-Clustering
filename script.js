let data;
let values = [];
let kmeans;

function preload() {
    data = loadTable('data/iris.csv');
}

function setup() {
    for(let i of data.rows) {
        let row = [];
        for(let j = 0; j < i.arr.length; j++) {
            let float = parseFloat(i.arr[j]);
            if(!isNaN(float))
                row.push(parseFloat(i.arr[j]));
        }
        values.push(row);
    }

    // K-Means
    kmeans = new KMeans(values, 3, 0.0000000000001);
    kmeans.train();
}