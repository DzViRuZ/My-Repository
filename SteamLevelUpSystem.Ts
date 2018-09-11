CalculateXp(currentLevel, targetLevel){
    var total:number= 0;

    if (targetLevel - currentLevel <10){
      var index:number= Math.ceil(currentLevel / 10);
      total = (targetLevel - currentLevel) * index *100;
    }else{

      var l_index:number;
      var u_index:number;



      l_index = Math.ceil(currentLevel / 10);
      u_index = Math.ceil(targetLevel / 10);

      if(u_index > l_index){
        for(var i = l_index+1;i<u_index;i++){
          total = total + (i * 1000);
        }
      }

      total = total + (((l_index * 10) - currentLevel) * (l_index * 100)) + ((targetLevel - (u_index-1)*10) * (u_index * 100));

    }
    
    return total;
    
  }
