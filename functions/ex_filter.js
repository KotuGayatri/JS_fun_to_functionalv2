const _={};
_.filter=function(arr,cb){
  //create a new Array
  const storage=[];
  //loop through Array
  for(let i=0;arr.length;i++){
    if(cb(arr[i],i,arr)===true){
      storage.push(arr[i])
      //check if cb returns true
      //if returns true,push into Array
    }
  }
        //return Array
        return storage;
}

const videoData=[
  {
    name:"Miss Scarlet",
    present:true,
    rooms:[
      {kitchen:false},
      {ballroom:false},
      {conservatory:false},
      {"dinning room":false},
      {"billiard room":false},
      {library:false}
      ]
  },
  {
    name:"MRs.White",
    present:false,
    rooms:[
      {kitchen:false},
      {ballroom:false},
      {conservatory:false},
      {"dinning room":false},
      {"billiard room":false},
      {library:false}
    ]
  },
  {
    name:"Reverend Green",
    present:true,
    rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {"dinning room":false},
        {"billiard room":false},
        {library:false}
        ]
    },
    {
      name:"Professor Plum",
      present:true,
      rooms:[
          {kitchen:false},
          {ballroom:false},
          {conservatory:false},
          {"dinning room":false},
          {"billiard room":false},
          {library:false}
          ]
    }
  ];
  const suspects=_.filter(videoData,function(suspectObject){
    return suspectObject.present;
    });

  const suspectsName=  _.map(suspects,suspect =>{
    return suspects.name
  });
