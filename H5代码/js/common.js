/*
  查看某个特征数字在整数中出现的频率
*/
function cntTimes(digital, num){

	var cnt = 0;

    while(digital>0){
    	if(digital%10==num){
    		cnt++;
    	}
    	digital = Math.floor(digital/10);
    }

	return cnt;

} 