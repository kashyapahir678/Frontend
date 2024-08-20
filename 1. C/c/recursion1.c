#include <stdio.h>



int fun(int n){
	
	if(n>=0){
		return n;
	}
	else{
		return fun(n-1)+fun(n-2);
	}
	
}

int main(){
	
	int n;
	printf("enter the number : ");
	scanf("%d",&n);
	
	for(int i=0; i<n; i++){
		printf(" %d",fun(i));
	}
	return 0;
}


//1,1,2,3,5,8