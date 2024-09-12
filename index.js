// Shortest path  for visiting all points
let a=[ [0,9,30,3],
        [9,0,13,65],
        [30,13,0,1],
        [3,65,1,0]]; // 4x4 matrix which gives distance between all node pairs

let visited=[1,0,0,0];// matrix denoting visited nodes 
let order=[1];// displays order 
node=0;
for (i=0;i<3;i++){
    max=0;
    for(k=0;k<4;k++){
    if(a[i][k]>max && visited[k]!=1){
    max=a[i][k];
     maxelm=k;
    }
    }
    min=maxelm;

    for(j=0;j<4;j++){
        if((a[node][j]<a[node][min]) &&(j!=node) && (visited[j]!=1) )
            {
        min=j;
    }}
    visited[min]=1;
    node=min;
    order.push(min+1);
   
}
console.log(order);
